const mongoose = require("mongoose");
var mongoDB = process.env.DB_MONGO;
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.set("useCreateIndex", true);

if (process.env.NODE_ENV != "production")
    mongoose.set("debug", true);

mongoose.connect(
    mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (!err) {
            console.log("MongoDB connected");
        } else {
            console.log("Error: " + err);
        }
    }
);