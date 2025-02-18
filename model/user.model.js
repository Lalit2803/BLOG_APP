const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            require:[true,"This is a mandatory field"],
            unique: true,
        },
        email:{
            type:String,
            require:[true,"This is a mandatory field"],
            unique: true,
        },
        password:{
            type:String,
            require:[true,"This is a mandatory field"],
           
        },
        phoneNo: {
            type:Number,
            require:[true,"This is a mandatory field"],
          
        },
        isHavingInsurance: {
            type:Boolean,
            require:[true,"This is a mandatory field"],
           
        }
    },
    {
        timestamps:true
    }
)

userSchema.pre("save",async function(){
    // generate the salt
    let salt=await bcrypt.genSalt(10);
    // hashed the password
    let hashedPassword=await bcrypt.hash(this.password,salt);
    // store the hashedPassword in the database
    this.password=hashedPassword;
})

// compare the password
userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
  }

module.exports=mongoose.model("User",userSchema); 
// users-->lowercase and plural
// model()==>we are passing the schema and model() will create a collection/model in mongodb according to that schema


// 1)import mongoose module ==>Schema Class,model method
// 2)using Schema class define structure of the entity
//3)using model() create a collection inside mongodb passing the schema you just created