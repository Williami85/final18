var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 3000));
app.use(express.static(__dirname + "/public"));

var server = app.listen(app.get("port"), function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%$:%$", host, app.get("port"));
});