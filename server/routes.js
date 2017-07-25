var _ = require('lodash');
var Data = require('./models/data');
var User = require('./models/user');
var jwt    = require('jsonwebtoken');
var sg = require('sendgrid')('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');

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
        if (user.password !== req.body.password) {
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

  // SEND MAIL
  app.post('/contact-form', function(req, res) {
    var helper = require('sendgrid').mail;

    from_email = new helper.Email(req.body.email, req.body.name);
    to_email = new helper.Email("artside2017@gmail.com");

    subject = req.body.subject;
    content = new helper.Content("text/plain", req.body.content);

    mail = new helper.Mail(from_email, subject, to_email, content);
    //
    // email = new helper.Email("test2@example.com")
    // mail.personalizations[0].addTo(email)


    var requestBody = mail.toJSON();
    var emptyRequest = require('sendgrid-rest').request;
    var requestPost = JSON.parse(JSON.stringify(emptyRequest));
    requestPost.method = 'POST';
    requestPost.path = '/v3/mail/send';
    requestPost.body = requestBody;
    sg.API(requestPost, function (error, response) {
      res.send("Email Sent OK!!!!");
    });
  });



  // application ======================================================================
  app.get('*', function(req, res) {
    res.sendfile('dist/index.html');
  });
};