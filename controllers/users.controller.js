const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userControllers = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (e) {
      return res.status(400).json({
        error: e.message
      })
    }
  },

  createUser: async (req, res) => {
    try {
    const { login, password, role } = req.body;

    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

    const user = await User.create({ login: login, password: hash, role: role });

    res.json(user);
    } catch (e) {
      return res.status(400).json({
        error: e.message
      })
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json(req.params.id);
    } catch (err) {
      res.json(err.message);
    }
  },

  login: async (req, res) => {
    try {

      const { login, password } = req.body;
  
      const candidate = await User.findOne({ login });
  
      if (!candidate) {
        return res.status(401).json({error:"Неверный логин"});
      }
  
      const valid = await bcrypt.compare(password, candidate.password);
  
      if (!valid) {
        return res.status(401).json({error: "Неверный пороль"});
      }
  
      const payload = {
        id: candidate._id,
        login: candidate.login,
        role: candidate.role
      }
  
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      })
      res.json({token, name: payload.login, user: payload.id, role: payload.role});
    } catch (e) {
      res.json(e.message)
    }
  },
};