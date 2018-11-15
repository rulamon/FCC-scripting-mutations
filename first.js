function mutation(arr) {
	let testArr = arr[1].toLowerCase().split("");
	for (let i = 0; i < testArr.length; i++) {
		if (!arr[0].toLowerCase().includes(testArr[i])) {
			return false;
		}
	}
	return true;
}

console.log(mutation(["hello", "Hallo"]));