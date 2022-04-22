const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
let client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: false
    }
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

client.on('message', async message => {
    console.log(message.from+":"+message.body);
    let body = message.body
    body = body.trim()
    body = body.toLowerCase()
    let data = "Thank you for contacting Aries Group, to make it easier! let us know which of the below available services you are looking for.?"
    data += "\r\nFor our services details, type *Services*"
    data += "\r\n For our Training details, Type *Training*"
    data += "\r\nFor career related inquiry, Type *Careers*"
	if(body === 'Hi' ||  body === 'hi' || body === 'Hai' ||  body === 'hai') {
		message.reply('Hi, How are you?\r\n'+data);
	}
    if(body === 'Hello' || body === 'hello') {
		message.reply('Hi, How are you?\r\n'+data);
	}
    if(body === 'hello, i have visited your website and i need to know more about your services and features.') {
		message.reply(data);
	}
    if(body === 'service' || body === 'services' || body === 's') {
        let strData = 'Which services you would like to know more details! Type the number\r\n';
         strData += '*1* Naval Architecture & Engineering Consultancy\r\n';
         strData += '*2* Project Management\r\n';
         strData += '*3* Rope Access Services\r\n';
         strData += '*4* NDT Inspection\r\n';
         strData += '*5* Lifting Inspection\r\n';
         strData += '*6* Thickness Measurement Services\r\n';
         strData += '*7* Audit & Documentation\r\n';
         strData += '*8* 3D Scanning & Detailed Engineering\r\n';
         strData += '*9* Marine Warranty Services\r\n';
         strData += '*10* Electrical, Instrumentation and Telecom\r\n';
         strData += '*11* Mechanical Testing Lab\r\n';
         strData += '*12* QA/QC TPI Services\r\n';
         strData += '*13* Calibration Services\r\n';
         strData += '*14* Advanced NDT Services\r\n';
         strData += '*15* Tank Inspection Services\r\n';
         strData += '*16* Corrosion Control Services\r\n';
         strData += '*17* Predictive Maintenance Survey\r\n';
		message.reply(strData);
	}

    if(body==='1'||body==='2' || body==='8' || body==='9' || body==='10') {
        strData = 'Thank you for your interest, please share your email ID for further communication, alternatively you may reach our team in below email ID\r\n'

        strData += '*enquiry@ariesmar.com*'
        message.reply(strData);

    }
    
    if(body==='3' || body==='4' || body==='5' || body==='6' || body==='7'|| body==='11' || body==='12' || body==='13' || body==='14'|| body==='15' || body==='16' || body==='17') {
        strData = 'Thank you for your interest, please share your email ID for further communication, alternatively you may reach our team in below email ID\r\n'

        strData += '*enquiry@ariesmar.com*'
        message.reply(strData);
    }
    if(body === 'training' || body === 't' || body === 'trai') {
        strData = 'Thank you for your interest, you may reach our team in below email ID with your details requirements\r\n'
        strData += '*aimri@ariesgroup.ae*'
        message.reply(strData);
    }
    if(body === 'careers' ||body === 'career' || body === 'car') {
        strData = 'Thank you for your interest to work Aries Group, please email your CV to below mentioned email ID\r\n'
        strData += '*careers@ariesgroup.ae*'
        message.reply(strData);
    } 
}
)
