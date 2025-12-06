const { drug, drugPresentation, pharmagroup } = require("../models")

class DrugService {

    createDrug = async (drugData) => {
        try {
            const newDrug = await drug.create(drugData)
            return newDrug

        } catch (error) {
            throw error
        }
    }
    readDrugsAndCreateInfo = async () => {
        try {
            const drugsData = await drug.findAll({
                include: [
                    { model: drugPresentation, attributes: ['description'] },
                    { model: pharmagroup, attributes: ['name'] }
                ]
            })
            const presentationData = await drugPresentation.findAll()
            const pharmaGroupData = await pharmagroup.findAll()
            
            return { drugsData, presentationData, pharmaGroupData }

        } catch (error) {
            throw error
        }
    }
    readDrugs = async () => {
        try {
            const drugsData = await drug.findAll({
                include: [
                    { model: drugPresentation, attributes: ['description'] },
                    { model: pharmagroup, attributes: ['name'] }
                ]
            })
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