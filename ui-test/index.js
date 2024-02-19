export default () => {
	const emailInput = document.querySelector('#email');
	const emailErrorBlock = document.querySelector('.email-error');

	const usernameInput = document.querySelector('#username');
	const usernameErrorBlock = document.querySelector('.username-error');

	const passwordInput = document.querySelector('#password');
	const passwordErrorBlock = document.querySelector('.password-error');

	const submitButton = document.querySelector('#submit');
	const form = document.querySelector('form');

	const isPasswordValid = (password) => {
		return password.length !== 0 && password.length > 5;
	};

	const isUsernameValid = (username) => {
		return username.length !== 0 && username.length > 4;
	};

	const isEmailValid = (email) => {
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		return regex.test(email);
	};

	emailInput.addEventListener('input', (e) => {
		const currentValue = e.target.value;

		const isValid = isEmailValid(currentValue);

		if (isValid) {
			emailInput.classList.remove('input-error');
			emailErrorBlock.classList.add('d-none');
		} else {
			if (currentValue.length === 0) {
				emailErrorBlock.textContent = 'Email не может быть пустым';
			} else {
				emailErrorBlock.textContent = 'Введите корректный email';
			}
			emailInput.classList.add('input-error');
			emailErrorBlock.classList.remove('d-none');
		}
	});

	passwordInput.addEventListener('input', (e) => {
		const currentValue = e.target.value;

		const isValid = isPasswordValid(currentValue);

		if (isValid) {
			passwordInput.classList.remove('input-error');
			passwordErrorBlock.classList.add('d-none');
		} else {
			if (currentValue.length === 0) {
				passwordErrorBlock.textContent = 'Пароль не может быть пустым';
			} else {
				passwordErrorBlock.textContent = 'Пароль не может быть короче 6-и символов';
			}
			passwordInput.classList.add('input-error');
			passwordErrorBlock.classList.remove('d-none');
		}
	});

	usernameInput.addEventListener('input', (e) => {
		const currentValue = e.target.value;

		const isValid = isUsernameValid(currentValue);

		if (isValid) {
			usernameInput.classList.remove('input-error');
			usernameErrorBlock.classList.add('d-none');
		} else {
			if (currentValue.length === 0) {
				usernameErrorBlock.textContent = 'Имя не может быть пустым';
			} else {
				usernameErrorBlock.textContent = 'Имя не может быть короче 5-и символов';
			}
			usernameInput.classList.add('input-error');
			usernameErrorBlock.classList.remove('d-none');
		}
	});

    form.addEventListener('input', (e) => {
		const email = form.querySelector('#email').value;
		const password = form.querySelector('#password').value;
		const username = form.querySelector('#username').value;


		if (isEmailValid(email) && isPasswordValid(password) && isUsernameValid(username)) {
			submitButton.disabled = false;
		} else {
			submitButton.disabled = true;
		}
	});
};
