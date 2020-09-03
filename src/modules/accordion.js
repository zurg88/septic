const accordion = () => {
	const accordion = document.getElementById('accordion'),
		panelCollapse = accordion.querySelectorAll('.panel-collapse'),
		panelHeading = accordion.querySelectorAll('.panel-heading'),
		constructBtn = accordion.querySelectorAll('.construct-btn');


	panelHeading.forEach(item => {
		item.addEventListener('click', () => {

			const collapse = item.nextElementSibling;
			collapse.classList.toggle('in');

			panelCollapse.forEach(elem => {
				if (elem !== collapse) {
					elem.classList.remove('in');
				}
			});

		});

		const accordionNextButton = () => {
			constructBtn.forEach(item => {
				item.addEventListener('click', () => {
					try {
						const parentCollapseElement = item.closest('.panel-collapse'),
							parentPanel = item.closest('.panel'),
							nextPanel = parentPanel.nextElementSibling,
							nextPanelCollapseElem = nextPanel.querySelector('.panel-collapse');

						parentCollapseElement.classList.remove('in');

						if (nextPanelCollapseElem.classList.contains('call-btn')) {
							return;
						}

						nextPanelCollapseElem.classList.add('in');
					} catch (error) {
						return;
					}

				});
			});
		};

		accordionNextButton();

	});
};

export default accordion;
