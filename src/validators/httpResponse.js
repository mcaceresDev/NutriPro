// const { logType, errorType, LogFormat, createLog } = require("./pinoLogger")

const serverErrorResponse = {
    status: 500,
    message: "Error en el servidor"
}

const notFoundResponse = {
    status: 404,
    message: "No se encontraron registros"
}

const badRequestResponse = {
    status: 400,
    message: "Error en la peticion"
}

const forbiddenResponse = {
    status: 403,
    message: "No autorizado"
}


const genericErrorHandler = (error) => {
    
    if (error.errors){
        const { message } = error.errors[0]
        
        // const newLog = new LogFormat(message, errorType.database)
        // createLog(logType.error, newLog, error.message)
        return {
            status: 400,
            message: "Falló la solicitud. Peticion a la BD no completada",
            info: message
        }
    }
    if (error.parent) {
        // const newLog = new LogFormat(error.parent.sqlMessage, errorType.database)
        // createLog(logType.error, newLog, error.message)
        return {
            status: 400,
            message: "Error de tipos en base de datos"
        }    
    }
    
    // const newLog = new LogFormat(error.msg ? error.msg : error.message, errorType.database)
    // createLog(logType.error, newLog, error.message)
    
    return error.msg ?  {
        status: 400,
        message: error.msg
    }        
    :
    serverErrorResponse
}

const errorPostHandler = (error) => {
    
    if (error.errors && error.errors[0].validatorKey === 'not_unique'){
        // const newLog = new LogFormat(error.errors[0].message, errorType.database)
        // createLog(logType.error, newLog, error.message)
        return {
            status: 400,
            message: "Uno o mas campos deben ser unicos en BD"
        }
    }
    if (error.errors) {
        const { message } = error.errors[0]
        // const newLog = new LogFormat(message, errorType.database)
        // createLog(logType.error, newLog, error.message)
        return {
            status: 400,
            message
        }
    }
    
    if (error.parent) {
        // const newLog = new LogFormat(error.parent.sqlMessage, errorType.database)
        // createLog(logType.error, newLog, error.message)
        return {
            status: 400,
            message: "Error de base de datos. Dato incompatible"
        }    
    }
    
    // const newLog = new LogFormat(error.msg ? error.msg : error.message, errorType.system)
    // createLog(logType.error, newLog, error.message)
    return error.msg ?  {
        status: 400,
        message: error.msg
    }        
    :
    serverErrorResponse
}

const customError = (status, message, additionalInfo) => {
    // const newLog = new LogFormat(message, errorType.system, additionalInfo ? additionalInfo : {})
    // createLog(logType.error, newLog, message)

    return {
        status,
        message
    }
}
const sendSuccess = (message, title) => {
    return {
        status: 200,
        title: title ? title : "",
        message
    }
}

module.exports = { serverErrorResponse, notFoundResponse, badRequestResponse, forbiddenResponse,
    genericErrorHandler, errorPostHandler, customError, sendSuccess }