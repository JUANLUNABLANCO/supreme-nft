$(document).ready(function () {
	setTimeout(function () {
		const $neon = $('.neon-off');

		$neon.addClass('neon').fadeIn(600);
		setTimeout(function () {
			$neon.removeClass('neon').fadeIn(800);
			setTimeout(function () {
				$neon.addClass('neon').fadeIn(1200);
				setTimeout(function () {
					$neon.removeClass('neon').fadeIn(1800);
					setTimeout(function () {
						$neon.addClass('neon').fadeIn(2200);
						setTimeout(function () {
							$neon.removeClass('neon').fadeIn(2800);
							if ($neon.hasClass('post-neon-on')) $neon.addClass('post-neon');
						}, 300);
					}, 100);
				}, 200);
			}, 100);
		}, 100);
	}, 3000);
});
