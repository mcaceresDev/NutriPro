class MicrobiologyController {

    renderMicrobiologyView = (req, res)=> {
        res.render("microbiology")
    }

}

module.exports = new MicrobiologyController