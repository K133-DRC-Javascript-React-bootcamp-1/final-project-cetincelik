const mongoose = require('mongoose')
exports.connectMongoose = async () => {

    try {
        await mongoose.connect(`mongodb+srv://mongodbdata123:data123data@cluster0.jsecn.mongodb.net/?retryWrites=true&w=majority`, {
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