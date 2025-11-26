const authRoutes = require("express").Router()
const authController = require("../controllers/auth.controller")

authRoutes.post('/login', authController.login)
authRoutes.get('/logout', authController.logOut)

module.exports = authRoutes