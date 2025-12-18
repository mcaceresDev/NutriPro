const { patient, food, disease } = require("../models");
const { measureData, foodSizes } = require("../public/js/evaluation/measures");
const diseaseService = require("../services/disease.service");
const drugService = require("../services/drug.service");
const foodService = require("../services/food.service");


class EvaluationController {


    // Render the evaluation page
    async renderEvaluationPage(req, res) {
        try {
            if (!req.session.user) {
                return res.render("pages/forbidden");
            }
            const { id } = req.params;
            
            const patientData = await patient.findByPk(id);
            if (!patientData) {
                return res.status(404).render("pages/notfound");
            }
            
            const foodData = await foodService.readAllFoodItems()
            const foodMessage = foodData && foodData.length && foodData.length >0 ? `Alimentos registrados: ${foodData.length}` : "Ningun alimento que mostrar"
            
            const diseases = await diseaseService.readAll()

            const drugs = await drugService.readDrugs()
            
            const formattedDate = new Date(patientData.birthdate).toISOString().split("T")[0]; // YYYY-MM-DD
            return res.render("evaluation", { patient: patientData, formattedDate, food:foodData, foodMessage, diseases, drugs, measureData, foodSizes });
        } catch (error) {
            console.log(error);
            return res.render("pages/error");
        }
    }
}

module.exports = new EvaluationController();