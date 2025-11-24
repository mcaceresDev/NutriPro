const bcryptjs = require("bcryptjs")

const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
}

const compare = async (passwordPlain, hashPasword) => {
    return await bcryptjs.compare(passwordPlain, hashPasword)
}

module.exports = { encrypt, compare }