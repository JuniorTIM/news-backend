const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  createComment: async (req, res) => {
    try {
      Comment.create({
        name: req.name.id,
        text: req.body.text,
        newsId: req.body.newsId,
      });
    } catch (e) {
      res.json(e.message);
    }
  },

  deleteComment: async (req, res) => {
    try {
      Comment.findByIdAndRemove(req.params.id);
      res.json("Комментарий удален");
    } catch (e) {
      res.json(e.message);
    }
  },

  getCommentsByNews: async (req, res) => {
    try {
       const comments = await Comment.find({newsId: req.params.id})
       res.json(comments)
    } catch (e) {res.json(e.message)}
  }
};
