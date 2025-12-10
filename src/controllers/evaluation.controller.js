const { patient, food } = require("../models");
const foodService = require("../services/food.service");


class EvaluationController {

    // Render the evaluation page
    async renderEvaluationPage(req, res) {
        try {
            if (!req.session.user) {
                return res.render("pages/forbidden");
            }
            const { id } = req.params;
            const { name, lastname } = req.session.user;
            const username = `${name.split(" ")[0]} ${lastname.split(" ")[0]}`;

            const patientData = await patient.findByPk(id);
            if (!patientData) {
                return res.status(404).render("pages/notfound");
            }
            
            const foodData = await foodService.readAllFoodItems()
            const foodMessage = foodData && foodData.length && foodData.length >0 ? `Alimentos registrados: ${foodData.length}` : "Ningun alimento que mostrar"
            
            const formattedDate = new Date(patientData.birthdate).toISOString().split("T")[0]; // YYYY-MM-DD
            return res.render("evaluation", { username, patient: patientData, formattedDate, food:foodData, foodMessage });
        } catch (error) {
            console.log(error);
            return res.render("pages/error");
        }
    }
}

module.exports = new EvaluationController();