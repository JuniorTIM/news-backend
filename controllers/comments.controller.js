const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  createComment: async (req, res) => {
    try {
      const comment = await Comment.create({
        name: req.user.id,
        text: req.body.text,
        newsId: req.body.newsId,
      });
      return res.json(comment)
    } catch (e) {
      res.json(e.message);
    }
  },

  deleteComment: async (req, res) => {
    const { id } = req.params;

    try {
      const comment = await Comment.findById(id)

      if (comment.name.toString() === req.user.id) {
      await comment.remove()
      return res.json('Задача удалена');
      }
      return res.status(401).json({error: "Ошибка доступа"})
    } catch (e) {
      return res.status(401).json({error: "Ошибка:" + e.toString()});
    }
  },

  getCommentsByNews: async (req, res) => {
    try {
       const comments = await Comment.find({newsId: req.params.id})
       return res.json(comments)
    } catch (e) {res.json({error: e.message})}
  }
};
