const pino = require("pino");
// trace	10	Depuración detallada
// debug	20	Información útil para depuración
// info	    30	Mensajes informativos generales
// warn	    40	Advertencias que no detienen el sistema
// error	50	Errores que afectan el flujo normal
// fatal	60	Errores críticos que pueden detener la aplicación
// ================================================================================

const logType = {
    trace: "trace",
    debug: "debug",
    info: "info",
    warning: "warn",
    error: "error",
    fatal: "fatal"
}

const errorType = {
    database: "DATABASE",
    types: "PARAMS",
    system: "SYSTEM"
}

// Función para obtener FECHA LOCAL YYYY-MM-DD
function getLocalDate() {
    const now = new Date();
    const offsetMs = 6 * 60 * 60 * 1000; // UTC-6
    const local = new Date(now.getTime() - offsetMs);
    return local.toISOString().split("T")[0];
}

function getLocalDateAndHour() {
    const now = new Date();
    const offsetMs = 6 * 60 * 60 * 1000; // UTC-6
    const local = new Date(now.getTime() - offsetMs);
    return local.toISOString();
}

const logger = pino({
    transport: {
        targets: [
            {
                target: "pino/file",
                options: {
                    destination: `logs/${getLocalDate()}.log.json`,
                    mkdir: true,
                },
            },
        ],
    },
});

// Clase formateadora
class LogFormat {
    constructor(description, type, info = {}) {
        this.description = description;
        this.type = type;
        this.additionalInfo = info;
    }
}

// Función para escribir logs
const createLog = (level, logInfo, message) => {
    logger[level](
        {
            ...logInfo,
            timestamp: getLocalDateAndHour(),
        },
        message
    );
};


module.exports = { logType, errorType, createLog, LogFormat }