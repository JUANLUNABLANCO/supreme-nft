$(document).ready(function () {
	let count = 0;
	let posterVideo = $('#posterVideo');
	let clipVideo = $('#clipVideo');

	let widthDevice = window.innerWidth;

	window.onscroll = function () {
		var y = window.scrollY;
		console.log(y);
		console.log(count);
		if (widthDevice <= 740) {
			if (y < 230 && count == 0) {
				posterVideo.addClass('none');
				count++;
			} else if (y > 230) {
				posterVideo.removeClass('none');
				count = 0;
			}
		}
		if (widthDevice > 740 && widthDevice <= 1000) {
			if (y < 184 && count == 0) {
				posterVideo.addClass('none');
				clipVideo.addClass('none');
				count++;
			} else if (y > 184) {
				posterVideo.removeClass('none');
				clipVideo.removeClass('none');
				count = 0;
			}
		}
	};
});
