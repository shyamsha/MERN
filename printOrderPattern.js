function printOrderPattern(num) {
	let pattern = "";
	for (let i = 1; i <= num; i++) {
		let str = "";
		for (let j = 1; j <= i; j++) {
			str += j;
		}
		pattern = str;
		console.log(pattern);
	}
	return pattern;
}
printPattern(5);
