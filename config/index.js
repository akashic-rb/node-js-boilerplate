const MONGO = require("./mongo")

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "http://localhost"
const SERVER_PORT = process.env.PORT || 8000

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

module.exports = {
    mongo: MONGO,
    server: SERVER
}