// $(document).ready(function () {
// 	let countS = 0;
// 	let countB = 0;
// 	let posterVideo = $('#posterVideo');

// 	let widthDevice = window.innerWidth;

// 	window.onscroll = function () {
// 		var y = window.scrollY;
// 		console.log(y);
// 		console.log(countS);
// 		if (widthDevice < 1024 && countS == 0) {
// 			console.log(`small:  y: ${y} count 0: ${countS}`);
// 			posterVideo.addClass('none');
// 			countS++;
// 		} else if (widthDevice >= 1024) {
// 			if (y > 50 && countB == 0) {
// 				console.log(`Big:  y: ${y} count: ${countB}`);
// 				posterVideo.addClass('none');
// 				countB++;
// 			} else if (y <= 50) {
// 				console.log(`Big:  y: ${y} count: ${countB}`);
// 				if (posterVideo.hasClass('none')) {
// 					posterVideo.removeClass('none');
// 					countB = 0;
// 				}
// 			}
// 		} else {
// 			console.log(`small:  y: ${y} count 1: ${countS}`);
// 		}
// 	};
// });
