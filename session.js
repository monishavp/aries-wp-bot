const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const fs = require('fs');

const session = function (number) {

	console.log('number', number);

	let session_file;
	if (fs.existsSync('./${number}.json')) {
		session_file = require('./${number}.json');
		console.log('session_file', session_file);
	}

	const client = new Client({
		puppeteer: {
			headless: false,
			userDataDir: __dirname + '/${number}',
			args: ['--no-sandbox']
		},
		session: session_file
	});

	client.initialize();

	client.on('qr', (qr) => {
        
		console.log('qr', qr);
	});

	client.on('authenticated', (session) => {
		if (!fs.existsSync('./${number}.json')) {
			fs.writeFile('./${number}.json', JSON.stringify(session), function (err) {
				if (err) console.log(err);
				else console.log('Session stored');
			});
		}
	});

	client.on('auth_failure', (msg) => {
		console.log('auth_failure', msg);
	});

	client.on('ready', () => {
		console.log('ready');
	});

	client.on('message', async msg => {
		console.log('message', msg)
	});

	client.on('disconnected', (reason) => {
		console.log('disconnected', reason);
	});


};

new session('971559880307');