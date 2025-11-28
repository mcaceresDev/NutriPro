const morgan = require("morgan");
const { createLog, LogFormat, logType, errorType } = require("../utils/pinoLogger");
const { parseMorganMessage } = require("./parser");

// Tokens
morgan.token("user", (req) => req.session?.user?.username || "anonymous");
morgan.token("userAgent", (req) => req.headers["user-agent"]);
morgan.token("referrer", (req) => req.headers["referer"] || "-");
morgan.token("ip", (req) => req.ip);

const morganToPino = morgan(
    ':method :url :status - ip=":ip" user=":user" ref=":referrer" agent=":userAgent" - :response-time ms',
    {
        stream: {
            write: (msg) => {
                const info = parseMorganMessage(msg);

                const logObj = new LogFormat(
                    "HTTP Request",
                    errorType.system,
                    info
                );

                createLog(logType.info, logObj, "REQUEST");
            }
        }
    }
);

module.exports = { morganToPino };
