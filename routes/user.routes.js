const {Router}=require("express");
const { addUser, fetchAllUsers, fetchOneUser, deleteUser, updateUser, updatePassword, userLogin, logout } = require("../controllers/user.controller");


const router=Router();
router.post("/register",addUser);
router.get("/users",fetchAllUsers);
router.get("/users/:id",fetchOneUser);
router.delete("/users/:id",deleteUser);
router.put("/users/:id",updateUser);
router.put('/userpassword/:id',updatePassword);
router.post('/userlogin',userLogin);
router.get("/userlogout",logout);



module.exports=router;