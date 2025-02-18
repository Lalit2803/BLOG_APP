const express=require("express");
const {connectDB}=require("./config/database")

const userRoutes = require('./routes/user.routes');
const blogRoutes=require("./routes/blog.routes")

const cookieParser = require('cookie-parser');


connectDB();
let app=express();
// it is for only html data not other so we use json format because it can easily converted 
app.use(express.urlencoded({extended:true})); 
app.use(express.json());// if we not use this then we pass data from postman in json format it shows error

app.use(cookieParser())

app.use('/users/lps',userRoutes);
app.use("/blogs/lps",blogRoutes);

app.listen(9000,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is listening at port 9000")
})