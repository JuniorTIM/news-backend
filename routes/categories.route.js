const { Router } = require("express");

const { categoryController } = require("../controllers/categories.controller");
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router();

router.get('/category', categoryController.getCategory)
router.post('/admin/category', authMiddleware, categoryController.postCategory)
router.delete('/admin/category/:id', authMiddleware, categoryController.deleteCategory)

module.exports = router;