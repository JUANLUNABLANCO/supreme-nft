/* ********** ContactForm ********** */
((d) => {
	const $form = d.querySelector('.contact-form'),
		$loader = d.querySelector('.contact-form-loader'),
		$response = d.querySelector('.contact-form-response');

	$form.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log('formulario enviandose');
		$loader.classList.remove('none');
		fetch('https://formsubmit.co/ajax/c85ae19dbf44e915b6ffc22abcd39af7', {
			method: 'POST',
			body: new FormData(e.target),
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((json) => {
				console.log(json.message);
				location.hash = '#gracias';
				$form.reset();
			})
			.catch((err) => {
				console.log(err);
				let message = err.statusText || 'Ocurrió un error al enviar, intenta nuevamente';
				$response.querySelector('h3').innerHTML = `Error ${err.status}: ${message}`;
			})
			.finally(() => {
				$loader.classList.add('none');
				setTimeout(() => {
					location.hash = '#close';
				}, 3000);
			});
	});
})(document);
