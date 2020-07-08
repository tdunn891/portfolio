$(document).ready(function () {
	$('.button-collapse').sideNav();
	// Send Notification from EmailJS
	emailjs
		.send('portfolio_gmail_notification', 'portfolio_visitor_template')
		.then(
			function (response) {
				console.log('EmailJS: SUCCESS!', response.status, response.text);
			},
			function (error) {
				console.log('EmailJS: FAILED...', error);
			}
		);
});
