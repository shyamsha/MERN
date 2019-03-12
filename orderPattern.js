let str = "";
for (let i = 1; i <= 5; i++) {
	for (let j = i; j <= 5; j++) {
		str = str + j;
	}
	console.log(str);
	str = "";
}
