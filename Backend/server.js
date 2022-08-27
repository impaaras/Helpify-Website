const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database')
const PORT = process.env.PORT || 4000


dotenv.config({path:"Backend/config/config.env"});

connectDatabase();

process.on("uncaughtException", (err) =>{
    console.log(`Error:${err.message}`)
    console.log("shuting down the server due to uncaught exception");
})

app.listen(PORT, () =>{
    console.log(`server is runing at port ${PORT}`)
})

// unhandled promises rejection
process.on("unhandledRejection", (err) =>{
    console.log(`Error: ${err.message}`);
    console.log("shuting down the server due to unhandled promises rejection");

    server.exit(() =>{
        process.exit(1);
    })
})