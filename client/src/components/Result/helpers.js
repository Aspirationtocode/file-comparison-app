export const getDiffIndexes = (arr1, arr2) => {
	const diffIndexes = [];
	for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
		if (arr1[i] !== arr2[i]) {
			diffIndexes.push(i);
		}
	}
	return diffIndexes;
};
