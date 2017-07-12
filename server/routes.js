var _ = require('lodash');
var Data = require('./models/data');

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

// application ======================================================================
  app.get('*', function(req, res) {
    res.sendfile('dist/index.html');
  });
};