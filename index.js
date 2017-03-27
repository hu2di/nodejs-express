var express = require('express'),
	http = require('http');
var app = express();

//app.use(express.bodyParser());
/*app.use(express.bodyParser.urlencoded({extended: false}));
app.use(express.bodyParser.json());*/

app.set('port', process.env.PORT || 8080);

app.use('/img', express.static(__dirname + '/public/img'));

app.get('/about', function(req, res) {
	//res.send('Hello. I am Void. Welcome to Express!');
	res.sendfile(__dirname + '/public/about.html');
});

app.get('/login', function(req, res) {
	res.sendfile(__dirname + '/public/login.html');
});

app.post('/login', function(req, res) {
	account = {
		username : 'hungdh',
		password : '123456'
	}
	var username = req.body.username;
	var password = req.body.password;
	if (username == account.username && password == account.password) {
		res.send('Hello ' + username);
	} else {
		res.send('Sorry, login wrong!');
	}
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Start successfully');
});