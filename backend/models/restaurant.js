const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please enter the restaurant name"],
        trim: true,
        maxLength:[50,"Restaurant name cannot be more than 50 characters"]
    },

    isVeg:{
        type:Boolean,
        default:false
    },

    address:{
        type: String,
        required:[true,"Please provide address"]
    },
    ratings:{
        type:Number,
        default:0
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    location:
    {
        type:{
            type: String,
            enum:["point"],
            required:true
        },
        coordinates:{
            type:Number,
            required:true
        }
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true 
            },
            Comment:{
                type:String,
                required:true
            }
        }
    ],
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.new
    }
})

restaurantSchema.index({location:"2sphere"});
restaurantSchema.index({address:"text"})

module.exports = mongoose.model("restaurant",restaurantSchema)