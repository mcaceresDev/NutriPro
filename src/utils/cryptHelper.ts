const bcryptjs = require("bcryptjs")

export const encrypt = async (passwordPlain:string) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
}

export const compare = async (passwordPlain:string, hashPasword:string) => {
    return await bcryptjs.compare(passwordPlain, hashPasword)
}