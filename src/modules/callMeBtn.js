const callMeBtn = () => {
	const btnCollection = document.querySelectorAll('.call-btn'),
		popupCall = document.querySelector('.popup-call');

	btnCollection.forEach(item => {
		item.addEventListener('click', () => {
			popupCall.classList.add('show-popup');
		});
	});

	popupCall.addEventListener('click', (event) => {
		const target = event.target;
		if (target.closest('.popup-close') || target.matches('.popup-call')) {
			popupCall.classList.remove('show-popup');
		}
	});
};

export default callMeBtn;
