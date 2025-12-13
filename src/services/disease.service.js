const { disease } = require("../models")

class DiseaseService {

    createDisease = async (diseaseData) => {
        try {
            const newDisease = await disease.create(diseaseData)
            return newDisease

        } catch (error) {
            throw error
        }
    }

    readAll = async()=> {
        try {
            const diseases = await disease.findAll()
            return diseases

        } catch (error) {
            throw error
        }
    }

    updateDisease = async (payload, id) => {
        try {
            const [updatedRows] = await disease.update(
                payload,
                { where: { id } }
            );
            return updatedRows
        } catch (error) {
            throw error
        }
    }


}

module.exports = new DiseaseService()