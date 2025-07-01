import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createComment, getPostComments, likeComment } from "../controllers/comment.controller.js";

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getcomments/:postId', getPostComments);
router.put('/like/:commentId', verifyToken, likeComment);

export default router;

