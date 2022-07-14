const { Router } = require("express");

const { newsControllers } = require("../controllers/news.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/news", newsControllers.getNews);
router.get("/news/:id", newsControllers.getNewsByCategory);
router.post("/admin/news", authMiddleware, newsControllers.createNews);
router.delete("/admin/news/:id", authMiddleware, newsControllers.deleteNews);

module.exports = router;
