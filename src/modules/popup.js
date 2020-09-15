import fadeAnimation from './my-animation';

const popup = (btn, popupItem) => {

	btn.addEventListener('click', () => {
		popupItem.classList.add('show-popup');
		fadeAnimation(popupItem);

	});

	popupItem.addEventListener('click', event => {
		const target = event.target;
		if (target.closest('.popup-close') || target.matches('.popup-dialog')) {
			popupItem.classList.remove('show-popup');
			popupItem.style.opacity = 0;
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

export default popup;
