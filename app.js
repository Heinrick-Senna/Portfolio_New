const express = require('express');
const app = require('./config/express')();
const session = require('express-session');
const engines = require('consolidate');
require("dotenv-safe").config();


// Config
	// Sessão
		app.use(session({
	        secret: process.env.AUTH ,
	        resave: true,
	        saveUninitialized: true
   		 }));






// Static para os arquivos da pasta /public
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.engine('html', engines.mustache);
app.set('view engine', 'html');


// iniciando Servidor
app.listen(app.get('port'), () => {
	console.log('Servidor rodando na porta 3001...');
});

   

// Primeiro Diretório
app.get('/marceloheinrick.com.br/', function(req, res) {
	res.render('Home');
});

// Erro 404
// app.use((req, res, next) => {
// 	res.status(404).render('notfound');
// })