const mongoose = require("mongoose");

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LINK,)
    .then(() =>{
        console.log("DB Connected");
    })
    .catch((err) =>{
        console.log(err);
    })
}

module.exports = connectDatabase;