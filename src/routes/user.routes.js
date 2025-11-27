const userController = require("../controllers/user.controller")
const userRoutes = require("express").Router()

userRoutes.post('/new-user', userController.addUser)
userRoutes.get('/all', userController.getUsers)
userRoutes.put('/self-passwd', userController.updateSelfPassword)

module.exports = userRoutes