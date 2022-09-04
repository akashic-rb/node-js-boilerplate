
// MONGO DEFAULT CONFIG, DO NOT EDIT THESE PROPERTIES IF YOU DON'T KNOW WHAT YOU'RE DOING
const MONGO_CONFIG = {
    useUnifiedtopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false,
}

// ADD FROM PROCESS ENV TERMINAL OR REPLACE THE EMPTY STRINGS, OTHERWISE IT WON'T WORK
const MONGO_USERNAME = process.env.MONGO_USERNAME || ""
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ""
const MONGO_HOST = process.env.MONGO_HOST || ""
const options = {

}

module.exports = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`,
    options
}