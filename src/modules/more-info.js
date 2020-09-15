import fadeAnimation from './my-animation';

const moreInfo = () => {
	const sentenceSection = document.querySelector('.sentence'),
		moreInfoBtn = sentenceSection.querySelector('.add-sentence-btn'),
		hiddenBlock = sentenceSection.querySelectorAll('.hidden'),
		visibleSmBlock = sentenceSection.querySelector('.visible-sm-block');

	moreInfoBtn.addEventListener('click', () => {
		hiddenBlock.forEach(item => {
			item.classList.remove('hidden');
			fadeAnimation(item);
		});

		visibleSmBlock.classList.remove('visible-sm-block');
		fadeAnimation(visibleSmBlock);

		moreInfoBtn.style.display = 'none';
	});
};

export default moreInfo;
