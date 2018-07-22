var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));

app.get('/', function(req,res){
	res.render('index');
});

app.get('/contact',function(req,res){
	res.render('contact');
});

app.get('/about',function(req,res){
	res.render('about');
});

app.get('/blog',function(req,res){
	res.render('blog');
});

app.listen(3000);