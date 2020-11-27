const express = require('express');
const path = require('path');

module.exports = () => {
	const app = express();
	
	app.set('port', (process.env.PORT || 3001));
	return app;
}