var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var path       = require('path');
var user	   = require('./models/user');

var router     = express.Router();
var app        = express();

var index      = './routes/index';
var tasks      = './routes/tasks';

//connect to  mongoose
mongoose.connect('mongodb://naide:12345@ds059316.mlab.com:59316/hackpr-demo');
var db = mongoose.connection;

//set port and view directory to find main page 
app.set('port', process.env.PORT || 3000);

//middelwares for body parser and express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));''

app.use(express.static(path.join(__dirname + 'client')));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});

app.use('/user', function(req, res, next){
	user.userSchema;
});

app.use(function(req, res, next){
	res.status(404).send("Page not found :(");
});

//This is a test comment to commit
//GET
app.get('/views/user', function(req, res){
	user.getUser(function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

app.listen(app.get('port'), function(){
	console.log("Server is up and running....");

});





