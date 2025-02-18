const jwt=require("jsonwebtoken")
exports.generateToken=async(id)=>{
    return jwt.sign({id},"secret",{expiresIn:"1d"})
}