const { Router } = require("express");

const { commentsController } = require("../controllers/comments.controller");
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router();

router.get('/comments/:id', commentsController.getCommentsByNews)
router.post('/comments', authMiddleware, commentsController.createComment)
router.delete('/comments/:id', authMiddleware, commentsController.deleteComment)

module.exports = router;