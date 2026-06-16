//packages

const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto");
const { kMaxLength } = require("buffer");

//step 2: create schema

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please Enter your Name"],
        maxlength:[30,"Name cannot exceed 30 characters"]
    },
    email:{
        type: String,
        required:[true,"Please Enter your Email"],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,"Enter a valid email"]
    },
    password:{
        type: String,
        required:[true,"Please Enter Password"],
        minlength:8,
        select:false,
    },
    passwordConfirm:{
        type: String,
        required:[true,"Confirm Password"],
        validate:{
            validator: function(el){
                return el === this.password
            },
            message:"Passowrd are not same"
        }
    },
    phoneNumber:{
        type: String,
        required:true,
        match:[/^[0-9]{10}$/,"Enter valid Phone number"]
    },
    role:{
        type: String,
        enum:["user","admin"],
        default:"user"
    },
    avatar:{
        public_id:String,
        url:String
    },
    passwordChangedAt: Date,
    passwordResetToken:String,
    passwordResetExpires:Date
},
{timestamps:true}
);

// Functions for hash password
// pre("save") =? runs befire data is saved

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    
    this.password = await bcrypt.hash(this.password,12)
    this.passwordConfirm = undefined
})

// password compare

userSchema.methods.correctPassword = async function( candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword,userPassword)
}

// Custom method after password changed after getting jwt token so user mjust login again

userSchema.methods.changePasswordAfter = function(JWTTimestamp){
    if(this.passwordChangedAt){
        const changedTimestamp = parseInt(
            this.passwordChangedAt.getTime()/1000,10
        )
        return JWTTimestamp< changedTimestamp
    }
    return false;
}

//Custom method to generate JWT token

userSchema.methods.getJWTToken = function(){
    return jwt.sign(
        {id:this._id},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES}
    )
}

module.exports = mongoose.model("User",userSchema)