let userData = window.localStorage.getItem('chat-tipo-login');

let chatbotTOKEN = '98f023f52kljnmco2431o452aasgfsd585';
let hostURL = 'https://cronchatcronapp.cronapp.io/get-chat?token=';

let chatbotURL = `${hostURL}${chatbotTOKEN}&extraparam=${userData}`;

let scriptHTML = document.createElement("script");
scriptHTML.src = chatbotURL;
scriptHTML.type = 'text/javascript'
document.body.appendChild(scriptHTML);