const  express =require( "express");
const cors = require("cors")
const mongooose = require("mongoose")
const errorMiddleware = require("./utils/errorHandler")
const user = require("./routes/userRoutes");
const cookieParser = require("cookie-parser")

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/",user)

app.get("/", (req, res) =>{
    console.log('success fully')
})

//Middleware for error
app.use(errorMiddleware);


module.exports = app;
