const interactionRouter = require('express').Router()
const interactionController = require('../controllers/interaction.controller')


interactionRouter.get('/', interactionController.getInteractionsView)
interactionRouter.get('/all', interactionController.getInteractions)
interactionRouter.post('/add-new', interactionController.createInteraction)
interactionRouter.put('/update-infoi/:id', interactionController.updateInteraction)

module.exports = interactionRouter