const nodemailer = require('nodemailer');
require("dotenv-safe").config();
let emailController = {};

	const transporter = nodemailer.createTransport({
		host: 'smtp-mail.outlook.com',
		port: 25,
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