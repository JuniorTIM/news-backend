const { Router } = require("express");

const { userControllers } = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get('/user',  userControllers.getUsers)
router.post('/user', userControllers.createUser)
router.delete('/user/:id', authMiddleware, userControllers.deleteUser)
router.post('/login', userControllers.login)

module.exports = router;