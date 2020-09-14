const mongoose=require("mongoose");
const properySchema=mongoose.Schema({
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    department:{
        type:mongoose.Types.ObjectId,
        ref:"Department",
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    avilable_quantity:{
        type:Number,
        default:1
    },
    hasInternet:{
        type:Boolean,
        default:false,
    },
    water:{
        type:String,
        
    },
    size:{
        type:Number,
        default:1
    },
    photos:[
        {
            type:String,
            required:true,
        }
    ],
    location:{
        type:Object,
        required:true,
    },

});
module.exports=mongoose.model("Prepery",properySchema);