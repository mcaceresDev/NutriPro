function parseMorganMessage(msg) {
    return {
        method: extract(msg, /^(\w+)\s/),
        url: extract(msg, /\s(\/[^\s]*)\s/),
        status: extract(msg, /\s(\d{3})\s/),
        ip: extract(msg, /ip="([^"]+)"/),
        user: extract(msg, /user="([^"]+)"/),
        referrer: extract(msg, /ref="([^"]+)"/),
        userAgent: extract(msg, /agent="([^"]+)"/),
        responseTimeMs: extract(msg, /(\d+\.?\d*)\sms/)
    };
}

function extract(msg, regex) {
    const match = msg.match(regex);
    return match ? match[1] : null;
}

module.exports = { parseMorganMessage }