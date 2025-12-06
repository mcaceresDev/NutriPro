const interactionRouter = require('express').Router()
const interactionController = require('../controllers/interaction.controller')


interactionRouter.get('/', interactionController.getInteractionsView)
// interactionRouter.get('/', )
// interactionRouter.post('/', )
// interactionRouter.put('/', )

module.exports = interactionRouter