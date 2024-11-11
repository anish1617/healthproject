var express = require("express");


var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.type('text/plain');
  res.send('this is thw homelage');
})

app.get('/about', function(req, res){
  res.type('text/plain');
  res.send('this is thw about section');
})

// custom 404 pages 
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
})
 
app.get('/admin', function(req, res){
  res.type('text/plain');
  res.send('welcome to admin panel');
});


// custom 500 pafe
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500- internal server error');

});

app.listen(app.get('port'), function(){
  console.log('Express server started on http://localhost:' 
    + app.get('port') + ': press ctrl + C to terminate.');
});


