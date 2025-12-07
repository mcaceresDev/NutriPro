const userController = require("../controllers/user.controller")
const { verifyAdmin, verifySudo } = require("../middlewares/auth.middleware")
const userRoutes = require("express").Router()

userRoutes.post('/new-user', verifySudo, userController.addUser)
userRoutes.get('/all', verifySudo, userController.getUsers)
userRoutes.put('/self-passwd', verifyAdmin, userController.updateSelfPassword)

module.exports = userRoutes