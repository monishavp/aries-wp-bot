const { Client, LegacySessionAuth } = require('./index');
const client = new Client({
    authStrategy: new LegacySessionAuth({
        session: sessionData
    })
});

client.initialize();

client.on('qr', (qr) => {
    // NOTE: This event will not be fired if a session is specified.
    console.log('QR RECEIVED', qr);
});

client.on('authenticated', () => {
    console.log('AUTHENTICATED');
});

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessful
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
    console.log('READY');
});

client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);
    if (msg.body === 'Hi') {
        // Send a new message as a reply to the current one
        msg.reply('Hi!,How are you? How can I help you?')

    } 
}
)