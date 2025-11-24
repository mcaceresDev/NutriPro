
class DrugController {

    getDrugs(req, res) {
        try {
            res.render("drugs", { btnText: "Agregar fármaco" })
        } catch (error) {
            console.log(`${error.message}`);
        }
    }
}

module.exports = new DrugController()