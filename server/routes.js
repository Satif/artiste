// server/routes.js

// load the abouts model
var _ = require('lodash');
var Data = require('./models/data');
// var About = require('./models/About');

// expose the routes to our app with module.exports
module.exports = function(app) {
  // application -------------------------------------------------------------

  // api ---------------------------------------------------------------------
  // get all data
  app.get('/api/data', function(req, res) {

    // use mongoose to get all todos in the database
    Data.find(function(err, data) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err) {
        return res.send(err);
      }

      res.json(data); // return all todos in JSON format
    });
  });


  // create todo and send back all todos after creation
  app.post('/api/data', function (req, res) {
    var newData = new Data(req.body);
    newData.save(function(err, data) {
      if (err) {
        return res.send(err);
      }

      res.json(data);
    });
  });


  app.put('/api/data/:id', function (req, res) {
    // var dataId = res.body._id;
    // console.log(req.params.id)
    // console.log(req)

    Data.findById(req.params.id, function (err, data) {
      // Handle any possible database errors
      if (err) {
        return res.send(err);
      } else {
        var updated = _.merge(data, req.body);
        // if(req.body._id) { delete req.body._id; }
        // var newData = new Data(req.body);

        updated.save(function(err) {
          if (err) {
            return res.send(err);
          }

          res.json(data);
        });
      }
    });


    // var data = req.body;
    // // var dataEntry = new Data(data);
    //
    //
    // Data.findById(req.params.id, function(err, p) {
    //   if (!p)
    //     return next(new Error('Could not load Document'));
    //   else {
    //     // do your updates here
    //     p.modified = new Date();
    //
    //     p.save(function(err) {
    //       if (err)
    //         console.log('error')
    //       else
    //         console.log('success')
    //     });
    //   }
    // });

    // create a todo, information comes from AJAX request from Angular
    // Data.create(data, function (err, todo) {
    //   if (err)
    //     res.send(err);
    //
    //   // get and return all the todos after you create another
    //   // getTodos(res);
    // });

    // dataEntry.save(function(err) {
    //   if (err) {
    //     console.log(err);
    //
    //     return res.send(400);
    //   }
    //
    //   return res.send(200);
    // });

  });


  // // get all data
  // app.get('/api/about', function(req, res) {
  //
  //   // use mongoose to get all todos in the database
  //   About.find(function(err, data) {
  //
  //     // if there is an error retrieving, send the error. nothing after res.send(err) will execute
  //     if (err)
  //       res.send(err);
  //
  //     res.json(data); // return all todos in JSON format
  //   });
  // });


  // app.post('/api/about', function(req, res) {
  //   About.create({
  //     name: req.body.data.name,
  //     percent: req.body.data.percent
  //   }, function(err, about) {
  //     if (err) {
  //       res.send(err);
  //     }
  //
  //     Data.create({
  //       title: 'test',
  //       description: 'test',
  //       abouts: about._id
  //     })
  //
  //     // Data.find({})
  //     //   .populate('abouts')
  //     //   .exec(function(error, posts) {
  //     //     console.log(JSON.stringify(posts, null, "\t"));
  //     //   });
  //
  //     // get and return all the todos after you create another
  //     About.find(function(err, todos) {
  //       if (err)
  //         res.send(err)
  //       res.json(todos);
  //     });
  //   });
  //
  // });
  //
  // // delete a todo
  // app.delete('/api/todos/:todo_id', function(req, res) {
  //   Todo.remove({
  //     _id : req.params.todo_id
  //   }, function(err, todo) {
  //     if (err)
  //       res.send(err);
  //
  //     // get and return all the todos after you create another
  //     Todo.find(function(err, todos) {
  //       if (err)
  //         res.send(err)
  //       res.json(todos);
  //     });
  //   });
  // });




// application ======================================================================
  app.get('*', function(req, res) {
    res.sendfile('./dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
};