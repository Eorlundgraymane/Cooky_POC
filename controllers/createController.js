exports.getIndex = (req,res,next) => {
    console.log("Home Controller Get Index");
    res.render("create/index",{
        path: "create",
        pageTitle: "Cooky Creator"        
    });
};