

class PoliticController {

    renderPoliticsView = (req, res)=> {
        res.render("politics")
    }

}

module.exports = new PoliticController