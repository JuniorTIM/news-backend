const { Router } = require("express");

const { newsControllers } = require("../controllers/news.controller");
const fileMiddleware = require('../middlewares/file.middleware')

const router = Router();

router.get("/news", newsControllers.getNews);
router.get("/news/:id", newsControllers.getNewsByCategory);
router.post("/news", fileMiddleware.single("assets"), newsControllers.createNews);
router.delete("/news/:id", newsControllers.deleteNews);

module.exports = router;
