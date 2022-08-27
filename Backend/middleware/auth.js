const ErrorHandeler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const User = require('../Models/userModels')
const jwt = require("jsonwebtoken")
const jwt_decode =  require('jwt-decode');

exports.isAuthUser = catchAsyncError(async(req, res, next) =>{

    const {token} = req.cookies;

    console.log(token)

    if(!token){
        return next(new ErrorHandeler("Please  login to access this resources"))
    }



     var newToken = jwt_decode(token);
//    const newToken =  parseJwt(token)
//    console.log(newToken)

    // const decodeData = jwt.verify(JSON.stringify(token), process.env.JWT_SECRET);
    // console.log("decode, "+decodeData)

    req.user = await User.findById(newToken.id);
    next();

});

// const parseJwt = (token) => {
//     try {
//       return JSON.parse(atob(token.split('.')[1]));
//     } catch (e) {
//       return null;
//     }
//   };

// exports.authorizeUser = (...roles) =>{
//     return (req, res, next ) =>{

//         if(!roles.includes(req.user.role) ) {
//            return next( new ErrorHandeler(`Roles ${req.user.role} is not allowed to access this resources`,403))
//         }

//         next();
//     }
// }