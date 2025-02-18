const blogSchema =require("../model/blog.model")

// create blog
exports.createBlog=async(req,res)=>{
    try {
        let{title,body}=req.body;
        let blog=await blogSchema.create({title,body,author:req.myUser._id});
        res.json({ success: true, message: "blog created successfully", blog });
    } catch (error) {
        res.json({ success: false, message: error.message });
      }
}

// fetch all blog
exports.fetchAllBlog=async(req,res)=>{
    try {
        let allBlog=await blogSchema.find();
        if(allBlog.length===0) return res.json({message:"No blog"});
        
        res.json({ success: true, message: "All blog fetched successfully", allBlog });
    } catch (error) {
        res.json({ success: false, message: error.message });
      }

}
// fetch one blog
exports.fetchBlog=async(req,res)=>{
    try {
        let{id}=req.params;
        let oneBlog=await blogSchema.findById(id);
        if(oneBlog.length===0) return res.json({message:"No blog"});
        
        res.json({ success: true, message: "All blog fetched successfully", oneBlog });
    } catch (error) {
        res.json({ success: false, message: error.message });
      }

}


// delete blog

exports.deleteBlog = async (req, res) => {
    try {
      let { id } = req.params;
  
      let blog = await BLOG_SCHEMA_SCHEMA.findById(id);
  
      if (!blog) return res.status(404).json({ message: "no user found" });
       let deleteBlog=await BLOG_SCHEMA.findByIdAndDelete(id);
  
      res.status(200).json({ success: true, message: "user deleted successfully", deleteBlog });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

// update blog
// exports.updateBlog=async(req,res)=>{
//     try{
//         let{id}=req.params;
//         let blog=await blogSchema.findByIdAndUpdate(id);

//     }catch (error) {
//         res.json({ success: false, message: error.message });
//       }
// }