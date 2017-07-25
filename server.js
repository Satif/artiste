// server.js

// set up ========================
var express  = require('express');
var app      = express();                        // create our app w/ express
var mongoose = require('mongoose');              // mongoose for mongodb
var cors = require('cors');
var jwt    = require('jsonwebtoken');

var morgan   = require('morgan');                // log requests to the console (express4)
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var conf = require('./gulp/conf');
var port = process.env.PORT || 8888;         // set the port

var mongoOption = {
  useMongoClient: true
};

mongoose.connect(conf.url.database, mongoOption, function(err, res) {
  if (err) {
    console.log('[DB] Connection failed to ' + conf.url.database + '. ' + err);
  } else {
    console.log('[DB] Successfully connected to: ' + conf.url.database);
  }
});

app.set('superSecret', conf.url.secret); // secret variable
app.use(cors());
app.use(express.static(__dirname + '/dist'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var apiRoutes = express.Router();
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
});

// routes ======================================================================
require('./server/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port : " + port);