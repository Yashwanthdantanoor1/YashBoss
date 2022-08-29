const express = require("express");
const Bodyparser = require("body-parser");
const http = require("https");
const app = express();
const day = require(__dirname + "/day.js")
const mongoose = require("mongoose");

// var newlists = [];
// var worklist = [];
app.use(Bodyparser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
mongoose.connect("mongodb://localhost:27017/todlistDB", {useNewUrlParser: true});

const ItemsSchema = new mongoose.Schema({
  name: String,
  type: String
});


const Item = mongoose.model('Item',ItemsSchema);
const Item1 = new Item({
  name : "welcome to your todo list",
  type: 'normal'
})
const Item2 = new Item({
  name : "welcome to your todo list work",
  type: 'work'
})

const lists = [Item1, Item2]

app.get("/", function(req, res) {
  Item.find({type:"normal"},function(err,foundItems){
    if(foundItems.length==0){
      Item.insertMany(lists, function(err){
        if(err){
          console.log(err);
        }
        else{
          console.log("updated");
        }
      });
    }
    else{
      res.render("list", {
        listTitle: day.day(),
        addlist: foundItems,
        Date: day.date()
      })
    }

  })
})


app.get("/work", function(req, res) {
  Item.find({type:"work"},function(err,workItems){
    if(workItems.length==0){
      Item.insertMany(lists, function(err){
        if(err){
          console.log(err);
        }
        
      });
    }

    else{
      res.render("work", {
        worktitle: "work",
        addlist:workItems,
        Date: day.date()
      })
    }


})
})




app.post("/", function(req, res) {


  if (req.body.submit == "work") {
    const itemname = req.body.addnewlist;
    const newitem = new Item({
      name: itemname,
      type: 'work'
    })
    newitem.save();
    res.redirect("/work");
  } else if (req.body.submit == day.day()) {
    const itemname = req.body.addnewlist;
    const newitem = new Item({
      name: itemname,
      type: 'normal'
    })
    newitem.save()
    res.redirect("/");
  } else if (req.body.newworkpage == "") {
    res.redirect("/work")
  } else if (req.body.Homepage == "") {
    res.redirect("/")
  }
})

app.post("/deletehome",function(req,res){
  const checkedid = req.body.checkbox;
  Item.deleteOne({_id: checkedid}, function(err){
    if(err){
      console.log(err);
    }
    else{
        res.redirect("/")
    }
  })
})
app.post("/deletework",function(req,res){
  const checkedid = req.body.checkbox;
  Item.deleteOne({_id: checkedid}, function(err){
    if(err){
      console.log(err);
    }
    else{
        res.redirect("/work")
    }
  })
})






app.listen(3000, function() {
  console.log("Server Started...!");
})





// Item.insertMany(lists, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("updated");
//   }
// });

// Item.deleteMany({name: "hit the button to add new list"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("succesfull");
//   }
// })
