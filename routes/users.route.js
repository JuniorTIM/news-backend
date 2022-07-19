const { Router } = require("express");

const { userControllers } = require("../controllers/users.controller");

const router = Router();

router.get('/user',  userControllers.getUsers)
router.post('/user', userControllers.createUser)
router.delete('/user/:id', userControllers.deleteUser)
router.post('/login', userControllers.login)

module.exports = router;