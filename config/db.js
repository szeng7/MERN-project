const config = require("config");
const db = config.get("mongoURI");
const MongoClient = require("mongodb").MongoClient;

const connectDB = async () => {
    try {
        const client = new MongoClient(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        client.connect((err) => {
            const collection = client.db("test").collection("devices");
            // perform actions on the collection object
            client.close();
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(`DB Connection Error: ${err.message}`);
        //exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
