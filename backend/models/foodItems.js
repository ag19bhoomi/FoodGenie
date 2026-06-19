const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter food item name"],
        trim: true, //remove white space
        maxLength:[100,"Please enter name less than 100 characters"]
    },
    price:{
        type: Number,
        required:[true,"Please enter price"],
        maxLength:[5,"Food item price cannot exceed more than 5"],
        default:0.0
    },
    description:{
        type:String,
        required:[true,"please Enter the description"]
    },
    ratings:{
        type:Number,
        default:0
    },
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
    menu:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Menu"
    },
    stock:{
        type:Number,
        required:[true,"Please enter food item"],
        maxLength:[5,"Food item stock cannot be more than 5"],
        default:0,
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restaurant"
    },
    numOfReviews:{
        type:Number,
        default:0.0
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
            comment:{
                type:string,
                required:true
            }
        }
    ],
    createdAt:{
        type:Data,
        default:Date.now()
    }
})

module.exports = mongoose.model("FoodItem",foodSchema)