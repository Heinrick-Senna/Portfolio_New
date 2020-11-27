const express = require('express');
const app = require('./config/express')();
const session = require('express-session');
const engines = require('consolidate');
// require('./config/database');


// Config
	// Sessão
		app.use(session({
	        secret: 'MarceloHR',
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
app.get('/mhfrontend.com.br/', function(req, res) {
	res.render('Home');
});

// Outros diretórios
// app.get('/mhfrontend.com.br/', function(req, res) {
	
// });

// Erro 404
app.use((req, res, next) => {
	res.status(404).render('notfound');
})