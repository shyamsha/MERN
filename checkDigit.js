let num = "12352fghj";
// use regular exprassion
if (num.includes("-") || num.includes("+") || num.includes(".")) {
	console.log(false);
} else if (Number(num)) {
	console.log(true);
} else if (isNaN(num)) {
	console.log(false);
}
