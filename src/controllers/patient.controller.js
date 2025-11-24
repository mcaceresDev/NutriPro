
class PatientController {

    getPatients(req, res) {
        try {
            res.render("patients")
        } catch (error) {
            console.log(`${error.message}`);
        }
    }
    
}
module.exports = new PatientController()