const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");

const NameGenerator=require("indian-name-generator");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.listen(process.env.PORT || 8888,function(){
	console.log("server");
}); 


app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");

});


app.post("/",function(req,res){

	if(req.body.gender=="m")
{
	var random=NameGenerator.femaleMarathi();
	res.render("out",{name:random});
	res.sendFile(__dirname+"/views/out.ejs");


}
if(req.body.gender=="f")
{
	var random=NameGenerator.maleMarathi();
  res.render("out",{name:random});
	res.sendFile(__dirname+"/views/out.ejs");

}

});

