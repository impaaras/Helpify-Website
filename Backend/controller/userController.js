const User = require('../Models/userModels')
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandeler = require('../utils/errorHandler');
const sendToken = require('../utils/jwtToken');
const sendEmail = require("../utils/sendEmail.js");
const crypto = require("crypto")

// Register user
exports.registerUser = catchAsyncError(async (req, res, next) =>{

    const {name, email, password,confirmPassword} = req.body;

    const userEmail = await User.findOne({
        email:email
    })

    if(userEmail){
        return next(new ErrorHandeler("Email already exist",400))
    }

    const user = await User.create({
        name,email, password,confirmPassword      
    })
    sendToken(user,201,res);
    // const token = user.getJWTToken();
    // console.log(user)
    // res.status(201).json({
    //     success:true,
    //     token,
    // }) 
})

// Login User
exports.loginUser = catchAsyncError (async (req, res, next) =>{

    const {email, password} = req.body;

    if(!email || !password){
        return next(new ErrorHandeler("Please enter email and password",400))
    }  
    const user = await User.findOne({email}).select("+password");
    // const user = await User.findOne({
    //     email:email,
    //     password:password
    // })
     
    if(!user){
        return next(new ErrorHandeler("Invalid email or password",401))
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401))
    }

    sendToken(user,200, res);
})


//Logout 
exports.logOut = catchAsyncError(async(req, res, next) =>{


    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
});


//forget Password

exports.forgetPassword = catchAsyncError(async(req, res, next) =>{

    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHandeler("User not found"));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save({validateBeforeSave:false})

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/password/reset/${resetToken}`;

    const message = `Your password token is :- \n\n ${resetPasswordUrl} \n\n if you have not requested this email then, ignore it`;

    try {
        await sendEmail({
            email:user.email,
            subject:"helpWebsite password Recovery",
            message
        })  

        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`
        })
        
    } catch (error) {
        
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpire = undefined;

        await user.save({validateBeforeSave:false})

        return next(new ErrorHandeler(error.message, 500))

    }   
});

exports.resetPassword = catchAsyncError(async(req,res,next) => {

    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()}
    });

    if(!user){
        return next(new ErrorHandeler("Reset Password Token is Invalid or has been expired",400));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandeler("Password does not password",400))
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;
    await user.save();

    sendToken(user, 200, res);
});


// Get User details
exports.getUserDetails = catchAsyncError(async(req, res, next) =>{

    const user = await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user
    })

});

// update password
exports.updatePassword = catchAsyncError(async(req, res, next) =>{


    const user = await User.findById(req.user.id).select("+password");

    
    const isPasswordMatched = user.comparePassword(req.body.oldpassword);

    if(!isPasswordMatched){
        return next(new ErrorHandler("old Password is incorrect",401))
    }

    if(req.body.newPassowrd !== req.body.confirmPassword){
        return next(new ErrorHandler("Password Does not match",401))
    }

    user.password = req.body.newPassowrd;

     await user.save();

     sendToken(user, 200, res);
});


// Update profile details

exports.updateProfile = catchAsyncError(async(req, res, next) =>{

    const newData = {
        name:req.body.name,
        email:req.body.email,
    }
    
    const user = await User.findByIdAndDelete(req.user.id,newData,{
        new:true,
        runValidator:true,
        useFindAndModify:false
    });
    
    res.status(200).json({
        success:true,
    })

});

// delete user 
exports.deleteUser = catchAsyncError(async(req,res, next) =>{

    const user = await User.findById(req.body.id);


    res.status(200).json({
        success:true,
        message:"user deleted Successfully"
    })
});