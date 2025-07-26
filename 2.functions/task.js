function getArrayParams(...arr) {
	let max = arr[0];
	let min = arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}


function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let max = arr[0];
	let min = arr[0];
	let diffMaxMin;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		} else if (arr[i] < min) {
			min = arr[i];
		}
	}
	diffMaxMin = max - min
	return diffMaxMin;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let diffEvenOdd;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else if (arr[i] % 2 === 1) {
			sumOddElement += arr[i];
		}
	}
	diffEvenOdd = sumEvenElement - sumOddElement
	return diffEvenOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let averageEven;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	averageEven = sumEvenElement / countEvenElement;
	return averageEven;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const resultOfFunc = func(...arrOfArr[i]);
		if (resultOfFunc > maxWorkerResult) {
			maxWorkerResult = resultOfFunc;
		}
	}
	return maxWorkerResult;
}