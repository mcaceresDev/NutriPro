const { disease } = require("../models")

class DiseaseService {

    readAll = async()=> {
        try {
            const diseases = await disease.findAll()
            return diseases

        } catch (error) {
            throw error
        }
    }


}

module.exports = new DiseaseService()