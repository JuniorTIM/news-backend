const { Router } = require("express");

const { categoryController } = require("../controllers/categories.controller");

const router = Router();

router.get('/category', categoryController.getCategory)
router.post('/category', categoryController.postCategory)
router.delete('/category/:id', categoryController.deleteCategory)

module.exports = router;