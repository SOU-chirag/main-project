const form = document.querySelector('form');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = form.username.value;
	const password = form.password.value;
	if (username === '' || password === '') {
		error.textContent = 'Please fill in all fields';
	} else if (username !== 'username' || password !== 'password') {
		error.textContent = 'Invalid username or password';
	} else {
		alert('Login successful');
		form.reset();
	}
});
