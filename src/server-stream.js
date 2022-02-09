const path = require('path');
const { createReadStream } = require('fs');
const { createServer } = require('http');

// configuramos con una variable de entorno el puerto
require('dotenv').config();
const PORT = process.env.PORT;

// diferentes mimetypes
// var mime = {
// 	html: 'text/html',
// 	txt: 'text/plain',
// 	css: 'text/css',
// 	gif: 'image/gif',
// 	jpg: 'image/jpeg',
// 	png: 'image/png',
// 	svg: 'image/svg+xml',
// 	js: 'application/javascript',
// };
const HTML_CONTENT_TYPE = 'text/html';
const CSS_CONTENT_TYPE = 'text/css';
const JS_CONTENT_TYPE = 'text/javascript'; // 'application/javascript'
const JPG_CONTENT_TYPE = 'image/jpeg';
const PNG_CONTENT_TYPE = 'image/png';
const SVG_CONTENT_TYPE = 'image/svg+xml';
const GIF_CONTENT_TYPE = 'image/gif';

const PUBLIC_FOLDER = path.join(__dirname, 'public');
// creamos un requestListener para pasarle a nuestro servidor
const requestListener = (req, res) => {
	const { url } = req;
	let statusCode = 200;
	let contentType = HTML_CONTENT_TYPE;
	let stream;

	// si estamos pidiendo la ruta principal, devolvemos el contenido del index.html
	if (url === '/') {
		stream = createReadStream(`${PUBLIC_FOLDER}/index.html`);
	} else if (url === '/faqs.html') {
		stream = createReadStream(`${PUBLIC_FOLDER}/faqs.html`);
	} else if (url.match('.css$')) {
		// para los archivos CSS
		contentType = CSS_CONTENT_TYPE;
		stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
	} else if (url.match('.js$')) {
		// para los archivos JavaScript
		contentType = JS_CONTENT_TYPE;
		stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
	} else if (url.match('.jpg$')) {
		// para los archivos jpg
		contentType = JPG_CONTENT_TYPE;
		stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
	} else if (url.match('.png$')) {
		// para los archivos jpg
		contentType = PNG_CONTENT_TYPE;
		stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
	} else if (url.match('.gif$')) {
		// para los archivos jpg
		contentType = GIF_CONTENT_TYPE;
		stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
	} else if (url.match('.svg$')) {
		// para los archivos jpg
		contentType = SVG_CONTENT_TYPE;
		stream = createReadStream(`${PUBLIC_FOLDER}${url}`);
	} else {
		// si llegamos aquí, es un 404
		statusCode = 404;
	}

	// escribimos las cabeceras de la respuesta dependiendo de la request
	res.writeHead(statusCode, { 'Content-Type': contentType });
	// si tenemos un stream, lo enviamos a la respuesta
	if (stream) stream.pipe(res);
	// si no, devolvemos un string diciendo que no hemos encontrado nada
	else {
		return res.end('Not found');
		// stream = createReadStream(`${PUBLIC_FOLDER}/index.html`);
		// contentType = HTML_CONTENT_TYPE;
		// res.writeHead(statusCode, { 'Content-Type': contentType });
		// stream.pipe(res);
	}
};

// creamos un servidor con el requestListener
const server = createServer(requestListener);

// hacemos que el servidor escuche el puerto configurado
server.listen(PORT, () => {
	console.log('server listening in PORT: ', PORT);
});
