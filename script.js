const form = document.querySelector('form');
form.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(form);
	const qualification = formData.get('qualification');
	const diff = formData.get('diff');
	const step = formData.get('step');
	const dir = formData.get('dir');
	const startingPoint = formData.get('starting-point');

	console.log(qualification);
	console.log(diff);
	console.log(step);
	console.log(dir);
	console.log(startingPoint);
});
