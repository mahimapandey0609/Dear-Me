const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const homestartingcontent = "Donec pharetra interdum erat a porttitor. Etiam consectetur convallis lectus sit amet interdum. Morbi sit amet eros tempus, commodo enim sed, tempus massa. In id tincidunt mi. Maecenas pretium efficitur tellus, vitae porta felis aliquet eu. Duis consectetur eros eget enim auctor hendrerit. Proin in enim ullamcorper, vulputate enim et, efficitur leo. Pellentesque tincidunt rhoncus dignissim. Vestibulum egestas, purus eu malesuada faucibus, tellus justo consequat turpis, at aliquam erat arcu sed erat. Duis auctor vitae purus nec maximus. Nulla placerat convallis ultrices. Mauris faucibus ligula at mi aliquet, at pretium lacus luctus. Nulla maximus magna ut ultrices maximus. Mauris ligula tortor, consectetur sed vehicula sit amet, rutrum id lectus. Donec nulla lorem, dapibus ultrices posuere id, lobortis ut magna. Aliquam at sem et mauris semper auctor eget et orci.";
const aboutcontent = " Etiam consectetur convallis lectus sit amet interdum. Morbi sit amet eros tempus, commodo enim sed, tempus massa. Donec pharetra interdum erat a porttitor.In id tincidunt mi. Maecenas pretium efficitur tellus, vitae porta felis aliquet eu. Duis consectetur eros eget enim auctor hendrerit. Proin in enim ullamcorper, vulputate enim et, efficitur leo. Pellentesque tincidunt rhoncus dignissim. Vestibulum egestas, purus eu malesuada faucibus, tellus justo consequat turpis, at aliquam erat arcu sed erat. Duis auctor vitae purus nec maximus. Nulla placerat convallis ultrices. Mauris faucibus ligula at mi aliquet, at pretium lacus luctus. Nulla maximus magna ut ultrices maximus. Mauris ligula tortor, consectetur sed vehicula sit amet, rutrum id lectus. Donec nulla lorem, dapibus ultrices posuere id, lobortis ut magna. Aliquam at sem et mauris semper auctor eget et orci.";
const contactcontent = " Morbi sit amet eros tempus, commodo enim sed, tempus massa. In id tincidunt mi. Maecenas pretium efficitur tellus, vitae porta felis aliquet eu.Donec pharetra interdum erat a porttitor. Etiam consectetur convallis lectus sit amet interdum. Duis consectetur eros eget enim auctor hendrerit. Proin in enim ullamcorper, vulputate enim et, efficitur leo. Pellentesque tincidunt rhoncus dignissim. Vestibulum egestas, purus eu malesuada faucibus, tellus justo consequat turpis, at aliquam erat arcu sed erat. Duis auctor vitae purus nec maximus. Nulla placerat convallis ultrices. Mauris faucibus ligula at mi aliquet, at pretium lacus luctus. Nulla maximus magna ut ultrices maximus. Mauris ligula tortor, consectetur sed vehicula sit amet, rutrum id lectus. Donec nulla lorem, dapibus ultrices posuere id, lobortis ut magna. Aliquam at sem et mauris semper auctor eget et orci.";
let posts =[];

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function(req,res){

    res.render("home" , {paragraph : homestartingcontent , postHead: posts});
   
});



app.get("/about",function(req,res){
    res.render("about",{paragraphabout : aboutcontent});
});
app.get("/contact",function(req,res){
    res.render("contact",{contactDeatils: contactcontent});
});
app.get("/compose",function(req,res){
    res.render("compose");
});
app.post("/compose", function(req,res){
    let obj ={
        composebody : req.body.composeText,
        textbody : req.body.textput
    };
    
    posts.push(obj);
    // console.log(posts.values());
   res.redirect("/");
})
app.get("/posts/:topic", function(req, res){
    let posTitle = _.lowerCase(req.params.topic);
    // console.log(posTitle);
    posts.forEach(function(element){
       let storedtitle = _.lowerCase(element.composebody);
        if(storedtitle === posTitle){
           res.render("post", {
            title : element.composebody,
            content : element.textbody
           });
        }
       
        
    });
   
});




app.listen(3000 , function(){
    console.log("this port is ready to use");
});