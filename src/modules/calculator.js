const calculator = () => {
	const myonoffswitch = document.getElementById('myonoffswitch'),
		wellFloorCheckbox = document.getElementById('myonoffswitch-two'),
		secondWell = document.querySelector('.second-well'),
		calcResult = document.getElementById('calc-result'),
		firstWellDiameter = document.getElementById('first-well-diameter'),
		secondWellDiameter = document.getElementById('second-well-diameter'),
		firstWellQuantity = document.getElementById('first-well-quantity'),
		secondWellQuantity = document.getElementById('second-well-quantity');

	let count1 = 1,
		count2 = 0,
		count3 = 1;

	calcResult.value = 13000;

	const result = calcResult => {
		console.log(calcResult.value);
		return;
	};

	const calcWellCheckbox = (checkbox, count, elem) => {
		elem.style.display = 'none';
		checkbox.addEventListener('click', () => {
			count++;
			if (count % 2 === 0) {
				elem.style.display = 'block';
				calcResult.value = +calcResult.value + 11000;
			} else {
				elem.style.display = 'none';
				calcResult.value = +calcResult.value - 11000;
			}
			result(calcResult);
			return count;
		});
	};

	const ringsDiameterCalc = (sumResult, select, param1, sum1, param2, sum2) => {
		select.addEventListener('change', () => {
			if (select.value === param1) {
				sumResult.value = +sumResult.value + +sum1;
			} else if (select.value === param2) {
				sumResult.value = +sumResult.value - +sum2;
			}
			result(calcResult);
		});
	};

	const ringsQuantityCalc = (sumResult, select, sum) => {
		const options = select.querySelectorAll('option');
		select.addEventListener('change', () => {
			for (let index = 0; index < options.length; index++) {

				if (select.value === options[index].value) {

					if (count2 > index) {
						sumResult.value = +sumResult.value - Number(sum * (count2 - index));
						count2 = index;
					} else if (index > 0 && index > count2) {
						sumResult.value = +sumResult.value + Number(sum * (index - count2));
						count2 = index;
					}

				}
			}
			result(calcResult);
		});
	};

	const wellFloor = () => {
		wellFloorCheckbox.addEventListener('click', () => {
			count3++;
			if (count3 % 2 === 0) {
				calcResult.value = +calcResult.value + 1000;
			} else {
				calcResult.value = +calcResult.value - 1000;
			}
		});
	};

	wellFloor();
	ringsQuantityCalc(calcResult, firstWellQuantity, 3000);
	ringsQuantityCalc(calcResult, secondWellQuantity, 4500);

	ringsDiameterCalc(calcResult, firstWellDiameter, '2 метра', '2000', '1.4 метра', '2000');
	ringsDiameterCalc(calcResult, secondWellDiameter, '2 метра', '3000', '1.4 метра', '3000');

	calcWellCheckbox(myonoffswitch, count1, secondWell);

};

export default calculator;
