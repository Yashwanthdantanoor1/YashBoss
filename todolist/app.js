const express = require("express");
const Bodyparser = require("body-parser");
const http = require("https");
const app = express();
const day= require(__dirname + "/day.js")
var newlists = [];
var worklist = [];
app.use(Bodyparser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("list", {
    listTitle: day.day(),
    addlist: newlists
  })
})


app.post("/", function(req, res) {
  let newlist = req.body.addnewlist;
  console.log(req.body);
  if (req.body.submit == "work") {
    worklist.push(newlist);
    res.redirect("/work");
  } else if(req.body.submit == day.day() ) {
    newlists.push(newlist);
    res.redirect("/");
  }
  else if (req.body.newworkpage == "") {
    res.redirect("/work")
  }
  else if (req.body.Homepage == "") {
    res.redirect("/")
  }
})

app.get("/work", function(req, res) {
  res.render("work", {
    worktitle: "work",
    addlist: worklist
  })
})




app.listen(3000, function() {
  console.log("Server Started...!");
})
