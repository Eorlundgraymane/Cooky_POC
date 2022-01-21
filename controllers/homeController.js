exports.getIndex = (req,res,next) => {
    console.log("Home Controller Get Index");
    res.render("home/index",{
        path: "home",
        pageTitle: "Cooky Home"        
    });
};