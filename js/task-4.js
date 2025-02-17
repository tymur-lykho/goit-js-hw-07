const form = document.querySelector('.login-form');
const inputs = form.querySelectorAll('input');
const sendBtn = form.querySelector('button');
const email = inputs[0];
const password = inputs[1];

form.addEventListener('submit', (event) => { 
	event.preventDefault();
	if (email.value === '' || password.value === '') {
		alert('All form fields must be filled in');
	} else {
		const userData = {
			[email.name]: email.value.trim(),
			[password.name]: password.value.trim()
		};
		form.reset();
		console.log(userData);
	}
}
)
