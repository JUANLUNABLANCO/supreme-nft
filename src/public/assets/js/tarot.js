$(document).ready(function () {
	var count = 0;

	$('.tarot-card').click(function () {
		var card = $(this);
		if (count < 4) {
			$(this).removeClass('top-card').addClass('bottom-card');

			count++;
		}
		if (count == 4) {
			$('div').removeClass('bottom-card');

			count = 0;
		}
		shuffle(card);
	});
});

function shuffle(card) {
	TweenLite.fromTo(
		card,
		0.8,
		{
			x: 310,
			y: -15,
			ease: Expo.easeOut,
		},
		{
			x: 0,
			y: 0,
			ease: Expo.easeIn,
		}
	);
}
