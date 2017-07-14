var _ = require('lodash');
var Data = require('./models/data');
var User = require('./models/user');
var jwt    = require('jsonwebtoken');

module.exports = function(app) {
  // api ---------------------------------------------------------------------
  // get all data
  app.get('/api/data', function(req, res) {
    Data.find(function(err, data) {
      if (err) {
        return res.send(err);
      }

      res.json(data);
    });
  });

  // create
  app.post('/api/data', function (req, res) {
    var newData = new Data(req.body);
    newData.save(function(err, data) {
      if (err) {
        return res.send(err);
      }

      res.json(data);
    });
  });

  // update
  app.put('/api/data/:id', function (req, res) {
    Data.findById(req.params.id, function (err, data) {
      if (err) {
        return res.send(err);
      } else {
        var updated = _.merge(data, req.body);

        updated.save(function(err) {
          if (err) {
            return res.send(err);
          }

          res.json(data);
        });
      }
    });
  });


  app.get('/setup', function(req, res) {

    // create a sample user
    var user = new User({
      name: 'artside',
      password: '4alman@8PS#'
    });

    // save the sample user
    user.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully');
      res.json({ success: true });
    });
  });

  // AUTH
  app.post('/authenticate', function (req, res) {
    User.findOne({
      name: req.body.name
    }, function(err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {

        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

          // if user is found and password is right
          // create a token
          var token = jwt.sign(user, app.get('superSecret'), {
            expiresIn: 60*60*24 // expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }

      }

    });
  });

// application ======================================================================
  app.get('*', function(req, res) {
    res.sendfile('/dist/index.html');
  });
};