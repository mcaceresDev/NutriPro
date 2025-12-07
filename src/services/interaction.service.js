const { pharmaFoodInteraction, drug, disease, food } = require('../models');

class InteractionService {

    createInteraction = async (interactionData) => {
        try {
            const newInteraction = await pharmaFoodInteraction.create(interactionData);
            return newInteraction;
        } catch (error) {
            throw error;
        }
    };

    getInteractionsAndCreateInfo = async () => {
        try {
            const interactions = await pharmaFoodInteraction.findAll({
                include: [
                    { model: drug, attributes: ['name'] },
                    { model: food, attributes: ['name'] },
                    { model: disease, attributes: ['name'] }
                ]
            });
            const drugsData = await drug.findAll();
            const diseaseData = await disease.findAll();
            const foodData = await food.findAll();

            return { interactions, drugsData, foodData, diseaseData };

        } catch (error) {
            throw error;
        }
    };
    getAllInteractions = async () => {
        try {
            const interactions = await pharmaFoodInteraction.findAll({
                include: [
                    { model: drug, attributes: ['name'] },
                    { model: food, attributes: ['name'] },
                    { model: disease, attributes: ['name'] }
                ]
            });
            return interactions;
        } catch (error) {
            throw error;
        }
    };
    

}

module.exports = new InteractionService();