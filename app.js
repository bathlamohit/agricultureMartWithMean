var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

var register = require('D:\\agricultureApplication\\public\\js\\register');
//var reptiles = require('D:\\Node.js-zenrys\\NodeApp\\reptiles');


var urlencodedParser = bodyParser.urlencoded({ extended: false }) 

//app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/public/html/" + "index.html" );
});


//To use router function

app.use('/register',register);
//app.use('/reptiles',reptiles);

//call the api using  http://127.0.0.1:8080/birds/about

app.get('/login',function(req,res){
debugger;
//console.log(req.url);
res.json({"message":"Welcome to Node.js session"});
});



app.post('/process_login',urlencodedParser,function (req, res) {
   // Prepare output in JSON format
   //console.log("email"+req.query.emailid);
   response = {
      usrname:req.body.usrname,
      passwd:req.body.passwd
   };
   console.log(response);
   
   res.end("Welcome, "+response.usrname+" you have successfully logged innn.");
});



var server = app.listen(9003,'0.0.0.0',function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})


/*
"dependencies": {
    "body-parser": "~1.12.4",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.12.4",
    "jade": "~1.9.2",
    "morgan": "~1.5.3",
    "serve-favicon": "~2.2.1",
    "mongodb": "^1.4.4",
    "monk": "^1.0.1"
}
*/