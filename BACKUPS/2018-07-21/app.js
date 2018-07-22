var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render(__dirname + '/index.html');
});

app.get('/contact',function(req,res){
	res.render(__dirname + '/contact/contact.html');
});

app.get('/about',function(req,res){
	res.render(__dirname + '/about/about.html');
});

app.get('/blog',function(req,res){
	res.render(__dirname + '/blog/blog.html');
});

app.get('/profile/:id',function(req,res){
	var data = {
		price: 2000,
		power: "electric"
	};
	res.render('profile', {
		brand: req.params.id,
		data: data
	});
});
app.listen(3000);