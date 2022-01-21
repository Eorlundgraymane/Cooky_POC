exports.getIndex = (req,res,next) => {
    console.log("Home Controller Get Index");
    res.render("follow/index",{
        path: "follow",
        pageTitle: "Cooky Maker"        
    });
};