const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/' ,{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
	console.log('Conectado Ao Banco de Dados!');
});

mongoose.connection.on('error', (err) => {
	console.log('Erro Na Conexão' + err);
});

mongoose.connection.on('disconnect', () => {
	console.log('Desconectado :(');
});