const express = require("express");
const {engine} = require("express-handlebars");
// const router = require("./router/index.router");
const path = require("path");
const app = express();

app.use(express.static(__dirname + '../../' + '/public'));

app.engine("handlebars", engine({
    defaultLayout: "main",
    // layoutsDir: path.join(__dirname, "views", "layouts")
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// app.use(router);
app.get("/",function(req, res){
    
      res.render('index')
   
   })
app.listen(5000, () => {
    console.log("Server is running on port 5000!");
});
