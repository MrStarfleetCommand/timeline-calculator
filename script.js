const form = document.querySelector('form');
const monthName = [
	undefined,
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const daysElapsedBy = [
	1,
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
	const diff = Number(formData.get('diff'));
	const step = formData.get('step');
	const dir = formData.get('dir');
	const year = Number(formData.get('year'));
	const month = Number(formData.get('month'));
	const day = Number(formData.get('day'));
	const startingPoint = year + ((daysElapsedBy[month] + day - 1) / 365);
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
			if (qualification === 'unqualified') {
				
			} else if (qualification === 'approximately') {
				
			} else if (qualification === 'nearly') {
				
			} else if (qualification === 'more-than') {
				
			} else {
				
			}
		} else {
			if (qualification === 'unqualified') {
				
			} else if (qualification === 'approximately') {
				
			} else if (qualification === 'nearly') {
				
			} else if (qualification === 'more-than') {
				
			} else {
				
			}
		}
	} else {
		if (step === 'years') {
			if (qualification === 'unqualified') {
				
			} else if (qualification === 'approximately') {
				
			} else if (qualification === 'nearly') {
				
			} else if (qualification === 'more-than') {
				
			} else {
				
			}
		} else if (step === 'months') {
			if (qualification === 'unqualified') {
				
			} else if (qualification === 'approximately') {
				
			} else if (qualification === 'nearly') {
				
			} else if (qualification === 'more-than') {
				
			} else {
				
			}
		} else {
			if (qualification === 'unqualified') {
				
			} else if (qualification === 'approximately') {
				
			} else if (qualification === 'nearly') {
				
			} else if (qualification === 'more-than') {
				
			} else {
				
			}
		}
	}

	if (low) {
		low = getDate(low);
		high = getDate(high);
		alert(`Sometime between ${low[2]} ${monthName[low[1]]} ${low[0]} and ${high[2]} ${monthName[high[1]]} ${high[0]}`);
	}
});

function getDate(yearStamp) {
	const dayOfYear = ((yearStamp - Math.floor(yearStamp)) * 365) + 1;
	let month;

	if (dayOfYear > daysElapsedBy[12]) {
		month = 12;
	} else if (dayOfYear > daysElapsedBy[11]) {
		month = 11;
	} else if (dayOfYear > daysElapsedBy[10]) {
		month = 10;
	} else if (dayOfYear > daysElapsedBy[9]) {
		month = 9;
	} else if (dayOfYear > daysElapsedBy[8]) {
		month = 8;
	} else if (dayOfYear > daysElapsedBy[7]) {
		month = 7;
	} else if (dayOfYear > daysElapsedBy[6]) {
		month = 6;
	} else if (dayOfYear > daysElapsedBy[5]) {
		month = 5;
	} else if (dayOfYear > daysElapsedBy[4]) {
		month = 4;
	} else if (dayOfYear > daysElapsedBy[3]) {
		month = 3;
	} else if (dayOfYear > daysElapsedBy[2]) {
		month = 2;
	} else {
		month = 1;
	}

	return [Math.floor(yearStamp), month, Math.floor(dayOfYear - daysElapsedBy[month])];
}
