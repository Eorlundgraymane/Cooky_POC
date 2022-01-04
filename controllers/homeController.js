exports.getIndex = (req,res,next) => {
    res.render("home/index",{
        path: "home",
        pageTitle: "Cooky Home"        
    });
};