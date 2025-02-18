/* fort this we have to install cookie parser

const cookieParser=require("cookie-parser") in server.js
// app.use(cookieParser())

*/

const jwt=require("jsonwebtoken");
const USER_SCHEMA=require("../model/user.model");

exports.authenticate=async(req,res,next)=>{
    //console.log(req)
    console.log(req.cookies);

    let cookie=req.cookies.myCookie;
    if(!cookie){
        return res.json({message:"Please Login first"})
    }

    // decode the token
    let decodedToken=jwt.decode(cookie,"secret");
    console.log(decodedToken)    // we get  { id: '67a9cefca3a9d8c2be675e72', iat: 1739212687, exp: 1739299087 }

    let myUser=await USER_SCHEMA.findById(decodedToken.id);
    console.log(myUser);

  // modifying the request object
    req.myUser=myUser;
    next();
    

}