function subscribe() {
	let name = prompt('What is your name?');
	let email = prompt('What is your email?');

	alert(`Thanks ${name}, we'll be in touch! We can't wait to see you in Alaska! 🥶`);
}

let button = document.querySelector('button');
button.addEventListener('click', subscribe);
