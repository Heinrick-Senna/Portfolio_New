const express = require('express');
const app = require('./config/express')();
const session = require('express-session');
const exphbs = require('express-handlebars');
const ip = require('ip');
require("dotenv-safe").config();




// Config Sessão
	app.use(session({
		secret: process.env.AUTH ,
		resave: true,
		saveUninitialized: true
		}));

	// Static para os arquivos da pasta /public
	app.use(express.static(__dirname + '/public'));
	app.use(express.static(__dirname + '/views'));

	app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
	app.set('view engine', 'hbs');


// iniciando Servidor
app.listen(app.get('port'), () => {
	console.log('http://' + ip.address() + ':' + app.get('port'));
});   

// Primeiro Diretório
app.get('/', function(req, res) {
	res.render('Home');
});

// Erro 404
app.use((req, res, next) => {
	res.status(404).redirect('/');
})