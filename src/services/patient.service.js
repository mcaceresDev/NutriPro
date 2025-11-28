const { patient } = require("../models")

class PatientService {

    createNewPatient = async (payload) => {
        try {
            const response = await patient.create(payload)
            return response

        } catch (error) {
            // return {message: "Error en el servicio"}
            throw error
        }
    }

    readPatientsByUser = async (userId) => {
        try {
            const response = await patient.findAll({
                where: {
                    addedBy: userId
                }
            })
            return response
        } catch (error) {
            // return {message: "Error en el servicio"}
            throw error
        }
    }

    readAllPatients = async () => {
        try {
            const response = await patient.findAll()
            return response
        } catch (error) {
            // return {message: "Error en el servicio"}
            throw error
        }
    }

    updatePatientInfo = async (payload, id) => {
        try {
            const [updatedRows] = await patient.update(
                payload,
                { where: { id } }
            );
            return updatedRows

        } catch (error) {
            // return {message: "Error en el servicio"}
            throw error
        }
    }
}

module.exports = new PatientService()