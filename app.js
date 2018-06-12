var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "blah", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df7c57ba5efb7_340.jpg"},
    {name: "bleh", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f8c67da5efb7ba_340.jpg"},
    {name: "mehh", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f8c67da5efb7ba_340.jpg"},
    {name: "blkh", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df7c57ba5efb7_340.jpg"},
    {name: "bleh", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f8c67da5efb7ba_340.jpg"},
    {name: "mehh", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f8c67da5efb7ba_340.jpg"},
    {name: "blah", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df7c57ba5efb7_340.jpg"},
    {name: "bleh", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f8c67da5efb7ba_340.jpg"},
    {name: "mehh", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f8c67da5efb7ba_340.jpg"}
    ];
    
// testing git push
        


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
    
});

app.post("/campgrounds", function(req, res){
    var campName = req.body.name;
    var campImage = req.body.image;
    var newCampground = {campName:campName, campImage:campImage};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server has started");
});