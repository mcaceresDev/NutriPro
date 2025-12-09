const { patient } = require("../models");

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
            
            const formattedDate = new Date(patientData.birthdate).toISOString().split("T")[0]; // YYYY-MM-DD
            return res.render("evaluation", { username, patient: patientData, formattedDate });
        } catch (error) {
            console.log(error);
            return res.render("pages/error");
        }
    }
}

module.exports = new EvaluationController();