const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/form_Test");
    console.log("Data base is connected")
}


module.exports={connectDB};