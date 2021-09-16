module.exports = function (req, res, next){
    if(req.session.profile){
        next();
    } else {
        res.redirect("/");
    }
};