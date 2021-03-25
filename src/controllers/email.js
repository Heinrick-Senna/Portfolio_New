const nodemailer = require('nodemailer');
	require("dotenv-safe").config();

	let emailController = {};

	const transporter = nodemailer.createTransport({
		host: 'smtp.umbler.com',
		port: 587,
		secure: false,
		auth: {
			user: process.env.AUTH,
			pass: process.env.SECRET
		}
	});

	emailController.newEmail = (req, res) => {
		transporter.sendMail({
		from: req.body.name +' '+ process.env.AUTH,
		to: process.env.TO,
		subject: req.body.email,
		text: req.body.text
		}).then(message => {
			res.redirect('/');
		}).catch(error => {
			res.send(error);
		})
	}

	module.exports = emailController;

	module.exports = (app) => {
		app.route('/marceloheinrick.com.br')
			.post(emailController.newEmail);
	}