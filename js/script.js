
var a = parseFloat(prompt('Please enter the "a" value', '0')),
	b = parseFloat(prompt('Please enter the "b" value', '0')),
	value = (a * a) - (2 * a * b) + (b * b);


alert('The computed value is ' + value);
console.log('The computed value is ' + value);




if (value > 0) {
	console.log('The value is a positive number.');
} else if (value < 0) {
	console.log('The value is a negative number.');
} else {
	console.log('The value equals 0.');
}


var isValueZero = value == 0 ? 'The value equals 0.' : 'The value is not 0.';
console.log(isValueZero);
