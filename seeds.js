var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm8.staticflickr.com/7284/9683731272_dc5b1c3429.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: '5b44cd2f1e67620921781975'
        },
        username: 'ian'
    },
    {
        name: "Desert Mesa", 
        image: "https://farm8.staticflickr.com/7201/6872147837_ef2caacb7d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: '5b44cd2f1e67620921781975'
        },
        username: 'ian'
        
    },
    {
        name: "Canyon Floor", 
        image: "https://farm3.staticflickr.com/2860/9680476233_cc6014f04e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author: {
            id: '5b44cd2f1e67620921781975'
        },
        username: 'ian'
        
    }
    ]


function seedDB(){
    //REmove all campgrounds
    // Campground.remove({}, function(err){
    //     if(err){
    //         console.log(err);
    //     }
    // });
    //     console.log("removed campgrounds");
    //     //add a few campgrounds
    //     data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err){
    //                 console.log(err);
    //             }
    //             else{
    //                 console.log("added a campground");
    //                 // Comment.create({
    //                 //     text: "this place is great but I wish there was internet", 
    //                 //     author: "Homer"
    //                 // }, function(err, comment){
    //                 //     if(err){
    //                 //         console.log(err)
    //                 //     }
    //                 //     else {
    //                 //         campground.comments.push(comment);
    //                 //         campground.save();  
    //                 //         console.log("Created new comment");
    //                 //     }
    //                 // });
    //             }
    //         });
    //     });
    // });
}
module.exports = seedDB;