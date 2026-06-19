const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    menu:[
        {
            category:{
                type:string
            },
            items:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"FoodItem"
                }
            ]
        }
    ],
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restaurant"
    },
},
    {
        toJSON:{virtuals:true}, //virtual fields when we convert documents to JSON or js
        toObject:{virtuals:true}
    },
)



Menu = mongoose.model("Menu",menuSchema);
modeule.exports = Menu