import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment, getPostComments, likeComment, editComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getcomments/:postId', getPostComments);
router.put('/like/:commentId', verifyToken, likeComment);
router.put('/edit/:commentId', verifyToken, editComment);

export default router;

