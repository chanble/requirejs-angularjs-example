var express = require('express')
,app = express()
,port = 8000
app.use(express.static(__dirname+'/client'));
app.get('/', function(req, res){
	res.send(200, 'Please create index file in "client" directory');
});

app.listen(port);
console.log('Listening on port '+port);
