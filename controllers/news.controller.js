const News = require("../models/News.model");

module.exports.newsControllers = {
  createNews: async (req, res) => {
    try {
      const news = await News.create({
        img: req.file.path,
        title: req.body.title,
        text: req.body.text,
        categoryId: req.body.categoryId,
      })
        return res.json(news);
    } catch (e) {
     res.json( {error: e.message})
    }
  },

  deleteNews: async (req, res) => {
    try {
     await News.findByIdAndDelete(req.params.id);
      res.json("Новость удалена");
    } catch (e) {
      res.json(e.message);
    }
  },

  getNewsByCategory: async (req, res) => {
    try {
      const news = await News.find({categoryId: req.params.id});
      res.json(news)
    } catch (e) {
      res.json(e.message);
    }
  },

  getNews: async (req, res) => {
    try {
      const news = await News.find();
      res.json(news)
    } catch (e) {
      res.json(e.message);
    }
  },
};
