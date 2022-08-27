const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail, "Please enter a valid email"]
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    resetPasswordToken:String,
    resetPasswordTokenExpire:Date
})


userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10)
})

// jsonwebToken 
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},JSON.stringify(process.env.JWT_SECRET),{
        expiresIn:process.env.JWT_EXPIRE,
    })
}

//Compare password
userSchema.methods.comparePassword = async function(entredPassword){
    return await bcrypt.compare(entredPassword,this.password)
}


// generating resetPasswordToken 
userSchema.methods.getResetPasswordToken = function(){

    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 *60*1000;

    return resetToken;
}

module.exports = mongoose.model("User", userSchema);