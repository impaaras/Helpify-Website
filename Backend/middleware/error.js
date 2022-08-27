const ErrorHandeler = require("../utils/errorHandler");
const ErrorHandler = require("../utils/errorHandler")

module.exports  = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500; 
    err.message = err.message || "Internal server error";


    //Duplicate key error
    if(err.code ===11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err =  new ErrorHandeler(message, 400);
    }

    //wrong jwt error
    if(err.name ==="JsonWebTokenError"){
        const message = `Json web toke is invalid, try again`;
        err =  new ErrorHandeler(message, 400);
    }

    res.status(err.statusCode).json({
        success:false,
        error:err.message,
    })
}