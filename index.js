const qrcode = require('qrcode-terminal');
const { Client} = require('whatsapp-web.js');
// Path where the session data will be stored
//const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
//sessionData = 'ASENA;;;eyJjbGllbnRJRCI6IkluVGU5cm4zblBlR25WcGlKMElGeGc9PSIsInNlcnZlclRva2VuIjoiMUBSS1lCb0hpN0dQVG9ib29BMDF4dCt6Rjd2ckxVYnJnaFhqZDJ6TFdJZnFaOE1lLzZGNHdyVENxZytmMHlLVW95MFNRZjl5TUdGdlg4UFE9PSIsImNsaWVudFRva2VuIjoiOEQ4ZG9OZ1htSlZCRUtQVUdNZnpGM1Bza2tsWTRjZDNlMzNUN2srTDdJZz0iLCJlbmNLZXkiOiJiakJXSVU4dlJ6T3JaRTNieTZ3bnpXNGJlaHNCSjVpMFBId0k0UGRlVGFFPSIsIm1hY0tleSI6IkJsa0pjL0I5ZkhRNVpqeCsydytNZVBmMUdWRjFWbzAxaHFGVFFVMTNNSkE9In0=';
/*(if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}*/
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});



client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('authenticated', (session) => {   
    console.log(session); 
});



client.initialize();

client.on('message', message => {
    console.log(message.from+":"+message.body);
    let body = message.body
    body = body.trim()
	if(body === 'Hi' ||  body === 'hi' || body === 'Hai' ||  body === 'hai') {
		message.reply('hi, How are you?, How Can I help You');
	}
    if(body === 'Hello') {
		message.reply('Yes,How Can I help You?');
	}
    if(body == 'Hello, I have visited your website and I need to know more about your services and features.') {
		message.reply("Thank you for contacting Aries Group, to make it easier! let us know which of the below available services you are looking for.?\r\nFor our services details, type *#S*\r\n For our Training details, Type *#T* \r\nFor career related inquiry, Type *#C*");
	}
    if(body === '#S' || body === '#s') {
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
        strData = 'Thank you for your interest, our representative will revert back to you soon, alternatively you can reach him in below mentioned email ID\r\n'

        strData += 'Nidhin K V (General Manager)\r\n *offshoredesign@ariesgroup.ae*'
        message.reply(strData);

    }
    
    if(body==='3' || body==='4' || body==='5' || body==='6' || body==='7'|| body==='11' || body==='12' || body==='13' || body==='14'|| body==='15' || body==='16' || body==='17') {
        strData = 'Thank you for your interest, our representative will revert back to you soon, alternatively you can reach him in below mentioned email ID\r\n'

        strData += '*inspectiontechsupport@ariesmar.com*'
        message.reply(strData);
    }
    if(body === '#T' || body === '#t') {
        strData = 'Thank you for your interest, our representative will revert back to you soon, alternatively you can reach him in below mentioned \r\n'
        strData += '*training@ariesmar.com*'
        message.reply(strData);
    }
    if(body === '#C' || body === '#c') {
        strData = 'Thank you for your interest, please email your CV to below mentioned email ID\r\n'
        strData += '*career@ariesgroup.ae*'
        message.reply(strData);
    }
});