
const { Schema, model, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const blogSchema=new Schema(
    {
        title:{
            type:String,
            required: true,
        },
        body:{
            type:String,
            required: true,
        },
         author:{
            type: mongoose.Schema.Types.ObjectId,  //this will take _id field as the input
                     required: true,
          },

    },
    { timestamps: true }
)
module.exports=model("Blog",blogSchema)