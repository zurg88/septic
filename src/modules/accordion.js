const accordion = () => {
	const accordion = document.getElementById('accordion'),
		accordionItems = accordion.querySelectorAll('.panel'),
		panelCollapse = accordion.querySelectorAll('.panel-collapse');

	accordionItems.forEach(item => {
		item.addEventListener('click', event => {
			const collapse = item.querySelector('.panel-collapse'),
				target = event.target;

			if (collapse.classList.contains('in')) {
				collapse.classList.remove('in');
				return;
			}
			collapse.classList.add('in');

			panelCollapse.forEach(elem => {
				if (elem !== collapse) {
					elem.classList.remove('in');
				}
			});

		});
	});
};

export default accordion;
