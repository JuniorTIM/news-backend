const Category = require("../models/Category.model");

module.exports.categoryController = {
  postCategory: async (req, res) => {
    try {
     const category =  await Category.create({
        name: req.body.name,
      })
        return res.json(category);
    
    } catch (e) {
     return res.json(e.message);
    }
  },

  deleteCategory: (req, res) => {
    try {
      Category.findByIdAndDelete(req.params.id).then(() => {
        res.json("Категория удалена");
      });
    } catch (e) {
      res.json(e.message);
    }
  },

  getCategory: (req, res) => {
    try {
      Category.find().then((data) => {
        res.json(data);
      });
    } catch (e) {
      res.json(e.message);
    }
  },
};
