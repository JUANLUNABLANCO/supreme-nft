const categories = document.querySelectorAll('#categories .category');
const questionsContainer = document.querySelectorAll('.container-questions');
let categoryActive = null;

categories.forEach((category) => {
	category.addEventListener('click', (e) => {
		categories.forEach((elemnt) => {
			elemnt.classList.remove('active');
		});

		e.currentTarget.classList.toggle('active');
		categoryActive = category.dataset.category;

		// activemos el container de questions que corresponde
		questionsContainer.forEach((container) => {
			if (container.dataset.category === categoryActive) {
				container.classList.add('active');
			} else {
				container.classList.remove('active');
			}
		});
	});
});
