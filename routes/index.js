var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// ********************************************************
// ROUTES
// ********************************************************
router.get("/", function(req, res){
    res.render("landing");
});


// REGISTER
router.get("/register", function(req, res){
    res.render("register", {page: 'register'});
});


router.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp " + user.username + "!");
           res.redirect("/campgrounds");
        });
    });
});


// LOGIN
router.get("/login", function(req, res) {
    res.render("login", {page: 'login'});
});


router.post("/login", function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      var redirectTo = req.session.redirectTo ? req.session.redirectTo : '/campgrounds';
      delete req.session.redirectTo;
      res.redirect(redirectTo);
    });
  })(req, res, next);
});


// LOGOUT
router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "You are logged out")
    res.redirect("/campgrounds");
});


module.exports = router;
