var express= require('express');
var bodyParser=require('body-parser');
var router=express.Router();
var mongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/user";
var urlencodeParser=bodyParser.urlencoded({extended:false});
router.post('/about',urlencodeParser,function(req,res){
	//console.log(req.body);
	response={
		name:req.body.usernme,
		word:req.body.passwd
	}
	
	console.log(response);
	mongoClient.connect(url,function(err,db){
		db.collection("customers").insertOne(response,function(err,res){
		if(err) throw err;
		console.log("1 document inserted");
		db.close();
		});
	});
res.end("welcome, "+response.name+" you have succesfully registerd");
});

module.exports=router;
