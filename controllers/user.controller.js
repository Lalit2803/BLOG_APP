// 1) import the collections
const USER_SCHEMA = require("../model/user.model");
const { generateToken } = require("../utils/jwt");

// CRUD -->CREATE,read/fetch ,  delete, update



exports.addUser=async(req,res)=>{
    try {
        const{username, email, password, phoneNo, isHavingInsurance } = req.body;
        let newUser=await USER_SCHEMA.create({ username, email, password, phoneNo, isHavingInsurance });
        res.json({user:newUser})

        
    } catch (err) {
        res.json({ message: err.message });
        
    }
}

// fetch all users

exports.fetchAllUsers=async(req,res)=>{
    try {
        
        let users=await USER_SCHEMA.find();
        if(users.length===0){
           return res.json({message:"No user Found"})

        }
        res.json({success:true,message:"All users fetched successfully",users:users})

        
    } catch (err) {
        res.json({ message: err.message });
        
    }

}
// fetch one user
exports.fetchOneUser=async(req,res)=>{
    try {
        console.log(req.params)
        let{id}=req.params;
        
         let user=await USER_SCHEMA.findOne({_id:id});
        if(!user){
            return res.json({message:"No user Found"})

         }
         res.json({success:true,message:" user fetched successfully",user:user})

        
    } catch (err) {
        res.json({ message: err.message });
        
    }

}
// delete the user
exports.deleteUser=async(req,res)=>{
    try {
        console.log(req.params)
        let{id}=req.params;
        
         let user=await USER_SCHEMA.findOne({_id:id});
        if(!user){
            return res.json({message:"No user Found"})

         }
         let deleteUser=await USER_SCHEMA.deleteOne({_id:id});
         res.json({success:true,message:" user deleted successfully",user:user})

        
    } catch (err) {
        res.json({ message: err.message });
        
    }

}
// update user
exports.updateUser=async(req,res)=>{
    try {
        console.log(req.params)
        let{id}=req.params;
        
         let user=await USER_SCHEMA.findById(id);
        if(!user){
            return res.json({message:"No user Found"})

         }
         let updateUser=await USER_SCHEMA.updateOne({_id:id},
            {$set:{
                username:req.body.username,
                 email:req.body.email,
                 phoneNo:req.body.phoneNo,
                 isHavingInsurance:req.body.isHavingInsurance

            }});
         res.json({success:true,message:" user updated successfully",user:user})

        
    } catch (err) {
        res.json({ message: err.message });
        
    }

}
// update password
exports.updatePassword=async(req,res)=>{
    try{
    let {id}=req.params;
    let user=await USER_SCHEMA.findById(id);
    if(!user){
        return res.json({message:"no user found"})
    }
    user.password=req.body.password;
    await user.save();
    return res.json({status:true,message:"User Password updated successfully",user})
   }catch (err) {
    res.json({ message: err.message });
    
}
}

// user login
exports.userLogin=async(req,res)=>{
    try{
        let{email,password}=req.body;
        let user=await USER_SCHEMA.findOne({email});
        if(!user) return res.json({message:"email is not registered"});

        let match=await user.comparePassword(password);
        if(!match) return res.json({message:"Wrong Password"})

            let token =await generateToken(user._id);
            console.log(token)
            /*  we get token
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                     eyJpZCI6IjY3YTdiYjYzOWI0ZmFjNmMwNjJjNTZmMSIsImlhdCI6MTczOTA1MDA0NCwiZXhwIjoxNzM5MTM2NDQ0fQ.cO2mSzyMqtVKiYtzMZ1PG39x0Yp204FZ_lOiMqTifVo

            */
            res.cookie("myCookie",token,{maxAge:1*60*60*1000,httpOnly:true})
            res.status(200).json({ success: true, message: "user loggedin successfully",token });
        
          }catch (error) {
            res.status(500).json({ success: false, message: error.message });
          }
    
}
exports.logout=async(req,res)=>{
    res.clearCookie("myCookie","",{maxAge:0});
    res.status(500).json({ success: true, message: "user logged out" });
  }


