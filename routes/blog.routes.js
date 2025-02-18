const{Router}=require("express");
const { createBlog, fetchAllBlog, fetchBlog, updateBlog, deleteBlog } = require("../controllers/blog.controller");
const { authenticate } = require("../middlewares/protect");

const router=Router();
router.post('/createblog',authenticate,createBlog);
router.get('/fetchall',fetchAllBlog);
router.get('/fetchone/:id',fetchBlog);
//  router.patch("/updateblog/:id", updateBlog);
 router.delete("/deleteblog/:id",authenticate,deleteBlog)


module.exports=router;