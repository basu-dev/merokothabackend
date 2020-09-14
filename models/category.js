const mongoose=require("mongoose");
const categorySchema=mongoose.Schema({
name:{
    type:String,
    required:true,
    unique:true
},
icon:{
    type:String,
    required:true,
},
totalItems:{
    type:Number,
    default:0
},
});
module.exports=mongoose.model("Department",categorySchema);