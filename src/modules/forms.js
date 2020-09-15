import { closeItem, showItem } from './popup';
import { calculator } from './calculator';

const postData = body => fetch('./server.php', {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(body)
});

const clearInputData = input => {
	input.value = '';
};

const callMeForms = () => {
	const forms = document.querySelectorAll('form'),
		popupThanks = document.querySelector('.popup-thanks'),
		calcData = calculator(),
		formData = {};


	const thanksPopup = () => {
		showItem(popupThanks, 'show-popup');

		popupThanks.addEventListener('click', event => {
			const target = event.target;
			if (target.closest('.popup-close') || target.matches('.popup-thanks')) {
				closeItem(popupThanks, 'show-popup');
			}
		});
	};

	forms.forEach(item => {
		item.addEventListener('submit', event => {
			event.preventDefault();

			if (item.id === 'calcForm') {
				Object.assign(formData, calcData);
			}

			const formInput = item.querySelectorAll('input');
			formInput.forEach(elem => {
				formData[elem.name] = elem.value;
			});

			if (item.classList.contains('director-form')) {
				const directorFormInput = item.querySelector('input');
				clearInputData(directorFormInput);
				return;
			}

			postData(formData).then(response => {
				if (response.status !== 200) {
					throw new Error('status network not 200');
				}
			}).then(thanksPopup()).then(() => {
				formInput.forEach(input => {
					clearInputData(input);
				});
			}).then(() => {
				const activePopup = document.querySelector('.show-popup');
				closeItem(activePopup, 'show-popup');
			});
		});

	});

};

export default callMeForms;
