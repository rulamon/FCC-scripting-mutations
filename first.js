function mutation(arr) {
	//lowercase, splice, includes
	let testArr = arr[1].toLowerCase().split("");
	let i = 0
	while (i < testArr.length) {
		if (arr[0].toLowerCase().includes(testArr[i])) {
			i++;
		} else {
			return false;
		}
	}
	return true;
}

console.log(mutation(["hello", "Hello"]));