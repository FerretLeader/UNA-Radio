var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const express = require('express');
var mongojs = require('mongojs');

const app = express();

app.get('/', function(request, response) {  response.sendfile(__dirname + "/index.html");});  //index.html is a seperate file

app.listen(8080);

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
	
	//GET a song
	app.get( '/song/', function(req, response)  {
		try{
			db.db("music").collection("track").aggregate([
                {
                    $sample: { 
						size: 1 
					},
                },
				{
					$project: {
						_id: 0
					}
				}
            ]).toArray(function(err, results) {
                if (err) response.send(err);
                else response.send(results[0].filename);
            });
		}
		catch(err){
			response.send("ERROR: " + err);
		}
		
		
		
	});
	
	
});