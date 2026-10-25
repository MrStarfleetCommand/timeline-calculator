const form = document.querySelector('form');
const daysElapsedBy = [
	0,
	0,
	31,
	31 + 28,
	31 + 28 + 31,
	31 + 28 + 31 + 30,
	31 + 28 + 31 + 30 + 31,
	31 + 28 + 31 + 30 + 31 + 30,
	31 + 28 + 31 + 30 + 31 + 30 + 31,
	31 + 28 + 31 + 30 + 31 + 30 + 31 + 31,
	31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30,
	31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31,
	31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30,
];

form.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(form);
	const qualification = formData.get('qualification');
	const diff = formData.get('diff');
	const step = formData.get('step');
	const dir = formData.get('dir');
	const year = formData.get('year');
	const month = formData.get('month');
	const day = formData.get('day');
	const startingPoint = year + ((daysElapsedBy[month] + day) / 365);
	let low;
	let high;

	console.log(qualification);
	console.log(diff);
	console.log(step);
	console.log(dir);
	console.log(year);
	console.log(month);
	console.log(day);
	console.log(startingPoint);

	if (dir === 'before') {
		if (step === 'years') {
			if (qualification === 'unqualified') {
				low = startingPoint - diff - 1 + (1 / 365);
				high = startingPoint - diff + 0.5;
			} else if (qualification === 'approximately') {
				low = startingPoint - diff - 0.5;
				high = startingPoint - diff + 0.5;
			} else if (qualification === 'nearly') {
				low = startingPoint - diff + (1 / 365);
				high = startingPoint - diff + 0.5;
			} else if (qualification === 'more-than') {
				low = startingPoint - diff - (1 / 365);
				high = startingPoint - diff - 1 + (1 / 365);
			} else {
				low = startingPoint - diff;
				high = low;
			}
		} else if (step === 'months') {
			
		} else {
			
		}
	} else {
		
	}
});
