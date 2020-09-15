const fadeAnimation = item => {
	item.style.opacity = 0;
	const itemTransition = setInterval(() => {
		const itemOpasity = getComputedStyle(item);

		if (itemOpasity.opacity < 1) {
			item.style.opacity = +item.style.opacity + 0.25;
		}

		if (item.style.opacity === 1) {
			clearInterval(itemTransition);
		}
	}, 80);
};

export default fadeAnimation;
