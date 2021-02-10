const emailController = require('../controllers/email');

module.exports = (app) => {
	app.route('/marceloheinrick.com.br')
		.post(emailController.newEmail);
}