$(document).ready(function () {
	console.log('controls-video');
	// var $player = $('#video01')[0];
	var $openModal = $('#openModalVideo');
	var $openModal2 = $('#openModalVideo2');
	var $close = $('#closeModal');

	var theVideo = $('#video01')[0];

	var playVideo = function () {
		theVideo.play();
		console.log('play');
	};

	var stopVideo = function () {
		theVideo.pause();
		theVideo.currentTime = 0;
		console.log('stop');
	};

	//When the play button is pressed...
	$openModal.click(function () {
		// showOverlay();
		setTimeout(function () {
			playVideo();
		}, 600);
	});
	$openModal2.click(function () {
		// showOverlay();
		setTimeout(function () {
			playVideo();
		}, 600);
	});

	//When the X button is pressed
	$close.click(function () {
		stopVideo();
		// hideOverlay();
	});

	//Hide the overlay when the video ends
	theVideo.addEventListener('ended', (event) => {
		setTimeout(function () {
			// hideOverlay();
			console.log('closeModal video Ended');
			window.location.href = '/#close';
		}, 400);
	});
});
