const userController = require("../controllers/user.controller")
const { verifyAdmin } = require("../middlewares/auth.middleware")
const userRoutes = require("express").Router()

userRoutes.post('/new-user', verifyAdmin, userController.addUser)
userRoutes.get('/all', verifyAdmin, userController.getUsers)
userRoutes.put('/self-passwd', verifyAdmin, userController.updateSelfPassword)

module.exports = userRoutes