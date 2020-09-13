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

const closeItem = (item, itemClass) => {
	item.classList.remove(itemClass);
};

const showItem = (item, itemClass) => {
	item.classList.add(itemClass);
};

export { closeItem, showItem };

export default callMeBtn;
