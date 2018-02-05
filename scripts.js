var a = 2;
var b = 3;
var value = (a * a) - (2 * a * b) - (b * b);

if (value > 0) {
	console.log('The result is positive', value);
}
if (value < 0) {
	console.log('The result is negative', value);
}
if (value === 0) {
	console.log('The result is equal ', value);
}