const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = () => {
	const app = express();

	app.set('port', (process.env.PORT || 3000));

	app.use(bodyParser.urlencoded({extended: false}));
	app.use(bodyParser.json());

	consign({cwd: 'src'})
		.include('models')
		.include('controllers')
		.include('routes')

		.into(app);
		
	return app;
}