const mongoose = require('mongoose')
exports.connectMongoose = async () => {

    try {
        await mongoose.connect(`mongodb+srv://cetinclk:we34dt67fg@cluster0.tbyv8he.mongodb.net/?retryWrites=true&w=majority`, {
            autoIndex: true,
            compressors: "zlib",
            minPoolSize: 10,
            maxPoolSize: 100
        })
        console.log("Connected to MongoDB :)")
    } catch (error) {
        throw new Error("Cannot Connect to MongoDB!")
    }
}