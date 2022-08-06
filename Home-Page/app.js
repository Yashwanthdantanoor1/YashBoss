const express = require("express");
const bodyParser = require("body-parser");
const http = require("https");
const _ = require("lodash");
const app = express();
let publications=[];
const homeStartingContent = "A lake or an easy weekend is what God wants to decorate it with. Always the author, nor the time of life. Let it be a course of action. Viverra lived in this place. Do not use a microwave oven or a dishwasher. Until the basketball players are not members or members of the arc. Mattis the employee was targeted by the students. The mountains will give birth to a great push, and a ridiculous mouse will be born in the ultricia of life. I'm trying to find a way to get rid of the poison bed. The author of the life of Ultrices advocates football as a bed of alcohol to drink. Odio euismod lacinia at quis risus sed vulputate odio ut The course of the real estate agent was aimed at the students.";
const aboutContent = "He was said to have lived in this street, and the vestibule of the Greeks was the children. It is said that the vestibulum of the rhoncus is a corporal punishment. It is not just a fancy vestibule. The street was said to be clear of arrows. But you need a laugh at the price of what vulputate dignissim has suspended. Let's get into some salad. Always smile in the hendrerit gravida rutrum every one not the land of the orci. He likes the massa vitae tortor sauce lacinia quis or eros. For the earth is the element of the arrows of life. Mauris ultrices eros in the course of the university mass tincidunt dui."

const contactContent = "Scelerisque eleifend until the price vulputate sapien. Roncus urn is neither cartoon nor basketball. Let us live with the bow of God, let us drink the bow of the cat. It will be followed by the education of the family of the sad family. Risus viverra adipiscing at in the whole land of feugiat. It is not wise to drink the bow of life that is expected from arrows. The result is sometimes a lot of real estate. But now the target is the propaganda lake. Sometimes putting the internet itself is a pain in the ass. For the whole element of the pillow is neither. The pregnant woman was told that there was no clinical placement. Mauris is in some sort of environment as a disease. To put a twister and to always cartoon for free.";




app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/",function(req,res){
  res.render("home",{startingcont:homeStartingContent,composecont:publications});
})
app.get("/about",function(req,res){
  res.render("about",{abtcont:aboutContent});
})
app.get("/contact",function(req,res){
  res.render("contact",{contcont:contactContent});
})
app.get("/compose",function(req,res){
  res.render("compose");
})
app.post("/",function(req,res){
objectpublish = {
    titles:req.body.Title,
    contents:req.body.content
  };
  publications.push(objectpublish);
  res.redirect("/")
})
app.get("/posts/:topic",function(req,res){
  var check = _.lowerCase(req.params.topic);
  publications.forEach(function(objectpublish){
    var titl =_.lowerCase(objectpublish.titles)
    if(check === titl){
      var newh =  objectpublish.titles;
      var newb =  objectpublish.contents;

      res.render("post",{head:newh,bod:newb});
    }
    else{
      console.log("Not founf");
  }
  })

})







app.listen(3000,function(){
  console.log("Server Started.......!");
})














































// const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
// const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
// const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
// //
// //jshint esversion:6
//
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
//
//
// const app = express();
//
// app.set('view engine', 'ejs');
//
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
//
//
//
//
//
//
// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });
