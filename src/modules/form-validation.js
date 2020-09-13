import Inputmask from "inputmask";

const formValidation = () => {
	const inputNum = document.querySelectorAll('.phone-user'),
		inputWords = document.querySelectorAll('input[placeholder = "Ваше имя"]'),
		inputMassege = document.querySelector('input[placeholder = "Введите свой вопрос"]'),
		distanseToHome = document.getElementById('distanseToHome'),
		phoneMask = new Inputmask("+7(999)999-99-99");

	inputNum.forEach(item => {
		phoneMask.mask(item);
	});

	inputWords.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/[^а-яА-ЯёЁ\s]/ig, '');
		});
	});

	inputMassege.addEventListener('input', () => {
		inputMassege.value = inputMassege.value.replace(/[^!?.,а-яА-ЯёЁ\s]/ig, '');
	});

	distanseToHome.addEventListener('input', () => {
		distanseToHome.value = distanseToHome.value.replace(/[^\d]/g, '');
	});
};

export default formValidation;
