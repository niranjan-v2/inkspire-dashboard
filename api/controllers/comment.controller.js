import Comment from "../models/comment.model.js";
import { errorHandler } from "../utils/error.js";

export const createComment = async (req, res, next) => {
  try {
    const { postId, userId, content } = req.body;
    if (userId !== req.user.id) {
      return next(errorHandler(403, "You are not allowed to add this comment"));
    }

    const newComment = new Comment({ postId, userId, content });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

export const getPostComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

export const likeComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, "Comment not found"));
    }
    const userIndex = comment.likes.indexOf(req.user.id);
    if (userIndex === -1) {
      console.log("here1 - new like");
      comment.numberOfLikes += 1;
      comment.likes.push(req.user.id);
    } else {
      console.log("here2 - unliked");
      comment.numberOfLikes -= 1;
      comment.likes.splice(userIndex, 1);
    }
    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};

export const editComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return next(errorHandler(404, "Comment not found"));
    }
    if (comment.userId !== req.user.id && !req.user.isAdmin) {
      return next(
        errorHandler(403, "You are not allowed to edit this comment")
      );
    }
    const editedComment = await Comment.findByIdAndUpdate(
      req.params.commentId,
      {
        content: req.body.content,
      },
      { new: true }
    );
    res.status(200).json(editComment);
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async(req, res, next) => {
  try {
     const comment = await Comment.findById(req.params.commentId);
     if(!comment) {
      return next(errorHandler(404, 'Comment not found'));
     }
     if(comment.userId !== req.user.id && !req.userId.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to delete this comment'));
     }
     await Comment.findByIdAndDelete(req.params.commentId);
     res.status(200).json('Comment has been deleted');
  } catch(error) {
    next(error);
  }
}

export const getUserComments = async(req, res, next) => {
  try {
    if(!req.user.isAdmin) {
      return next(errorHandler(403, 'You are now allowed to get all comments'));
    }
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.sort === 'desc' ? -1 : 1;
    const comments = await Comment.find().sort(sortDirection).skip(startIndex).limit(limit);
    const totalComments = await Comment.countDocuments();
    const now = new Date();
    const oneMonthAgo = new Date(now.getFullYear, now.getMonth()-1, now.getDate());
    const lastMonthComments = await Comment.countDocuments({createdAt:{$gte:oneMonthAgo}});
    res.status(200).json({comments, totalCommentsm, lastMonthComments});
  } catch(error) {
    next(error);
  } 
}
