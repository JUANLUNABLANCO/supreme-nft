'use strict';

$(document).ready(function () {
	var myState = {
		pdf: null,
		currentPage: 1,
		zoom: 0.7,
	};

	// canvasPdf
	var canvasPdf = document.getElementById('pdf_renderer');
	var ctx = canvasPdf.getContext('2d');

	var currentPageInput = document.getElementById('current_page');
	var goPreviousBtn = document.getElementById('go_previous');
	var goNextBtn = document.getElementById('go_next');
	var zoomInBtn = document.getElementById('zoom_in');
	var zoomOutBtn = document.getElementById('zoom_out');
	var currentZoomInput = document.getElementById('current_zoom');
	var pagesInput = document.getElementById('pages');
	var numMaxPages;

	// hacerlo para recibir cualquier pdf desde cualquier botón
	pdfjsLib.getDocument('./assets/documents/WHITEPAPER_CHRONOTOKEN.pdf').then((pdf) => {
		myState.pdf = pdf;
		numMaxPages = myState.pdf._pdfInfo.numPages;
		pagesInput.value += numMaxPages;
		render();
	});
	// pages control
	goPreviousBtn.addEventListener('click', (e) => {
		if (myState.pdf == null || myState.currentPage == 1) return;
		myState.currentPage -= 1;
		currentPageInput.value = myState.currentPage;
		render();
	});
	goNextBtn.addEventListener('click', (e) => {
		if (myState.pdf == null || myState.currentPage >= numMaxPages) return;

		myState.currentPage += 1;
		currentPageInput.value = myState.currentPage;
		render();
	});
	currentPageInput.addEventListener('change', (e) => {
		if (myState.pdf == null) return;

		var desiredPage = currentPageInput.valueAsNumber;

		if (desiredPage >= 1 && desiredPage <= numMaxPages) {
			myState.currentPage = desiredPage;
			currentPageInput.value = desiredPage;
			render();
		} else if (desiredPage > numMaxPages) {
			myState.currentPage = numMaxPages;
			currentPageInput.value = numMaxPages;
			render();
		} else {
			currentPageInput.value = 1;
			myState.currentPage = 1;
			render();
		}
	});
	// zoom control
	zoomInBtn.addEventListener('click', (e) => {
		if (myState.pdf == null || myState.zoom == 1) return;
		if (myState.zoom >= 0.9) {
			myState.zoom = 1;
			currentZoomInput.value = '100 %';
			return;
		} else {
			myState.zoom += 0.1;
			currentZoomInput.value = Math.round(myState.zoom * 100) + ' %';
			render();
		}
	});
	zoomOutBtn.addEventListener('click', (e) => {
		if (myState.pdf == null || myState.zoom == 0.3) return;
		if (myState.zoom <= 0.6) {
			myState.zoom = 0.5;
			currentZoomInput.value = '50 %';
			return;
		} else {
			myState.zoom -= 0.1;
			currentZoomInput.value = Math.round(myState.zoom * 100) + ' %';
			render();
		}
	});

	function render() {
		console.log('zoom ' + myState.zoom);
		myState.pdf.getPage(myState.currentPage).then((page) => {
			// zoom
			var viewport = page.getViewport(myState.zoom);
			// canvasPdf measures
			canvasPdf.width = viewport.width;
			canvasPdf.height = viewport.height;

			// render
			page.render({
				canvasContext: ctx,
				viewport: viewport,
			});
		});
	}
});
