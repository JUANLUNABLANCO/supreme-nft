const questions = document.querySelectorAll('.questions .container-question');
questions.forEach((question) => {
	question.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('active');

		const answer = question.querySelector('.answer');
		const alturaRealanswer = answer.scrollHeight;

		if (!answer.style.maxHeight) {
			// Si esta vacio el maxHeight entonces ponemos un valor.
			answer.style.maxHeight = alturaRealanswer + 'px';
		} else {
			answer.style.maxHeight = null;
		}

		// [Opcional] Reiniciamos las demas questions
		questions.forEach((elemnt) => {
			// Solamente queremos ejecutar el codigo para las questions que no
			// sean la question a la que le dimos click.
			if (question !== elemnt) {
				elemnt.classList.remove('active');
				elemnt.querySelector('.answer').style.maxHeight = null;
			}
		});
	});
});
