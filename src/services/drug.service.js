const { drug } = require("../models")

class DrugService {

    createDrug = async (drugData) => {
        try {
            const newDrug = await drug.create(drugData)
            return newDrug

        } catch (error) {
            throw error
        }
    }
    readDrugs = async () => {
        try {
            const drugsData = await drug.findAll()
            return drugsData

        } catch (error) {
            throw error
        }
    }
    updateDrug = async (payload, id) => {
        try {
            const [updatedRows] = await drug.update(
                payload,
                { where: { id } }
            );
            return updatedRows
        } catch (error) {
            throw error
        }
    }

}

module.exports = new DrugService()