const router = require("express").Router()
const drugRouter = require("./drug.routes")
const patientRouter = require("./patient.routes")
const foodRouter = require("./food.routes")
const userRoutes = require("./user.routes")
const pageRouter = require("./pages.routes")

router.use("/pacientes", patientRouter)
router.use("/farmacos", drugRouter)
router.use("/nutrientes", foodRouter)
router.use("/users", userRoutes)
router.use("/pages", pageRouter)

module.exports = router