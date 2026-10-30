'use strict';

// Get the user agent data
const useragentdata = navigator.userAgent;
console.log(useragentdata);

let browserName = 'Unknown Browser';
let browserTag = 'Unknown Tag';
if (useragentdata.includes('Edg/')) {
  browserName = 'Microsoft Edge';
  browserTag = 'Edg/';
} else if (useragentdata.includes('OPR/')) {
  browserName = 'Opera';
  browserTag = 'OPR/';
} else if (useragentdata.includes('Chrome/')) {
  browserName = 'Chrome';
  browserTag = 'Chrome/';
} else if (useragentdata.includes('Firefox/')) {
  browserName = 'Firefox';
  browserTag = 'Firefox/';
} else if (useragentdata.includes('Safari/')) {
  browserName = 'Safari';
  browserTag = 'Safari/';
} else {
  console.log('Unknown browser');
}

console.log(`You are using ${browserName}`);

let version = 'Unknown Version';

if (browserTag !== 'Unknown Tag') {
  version = useragentdata.split(browserTag)[1].split('.')[0];
}

console.log(`Version: ${version}`);

let osName = 'Unknown OS';

if (useragentdata.includes('Windows')) {
  osName = 'Windows';
} else if (useragentdata.includes('Macintosh')) {
  osName = 'Macintosh';
} else if (useragentdata.includes('Android')) {
  osName = 'Android';
} else if (useragentdata.includes('Linux')) {
  osName = 'Linux';
} else {
  console.log('Unknown OS');
}

console.log(`You are using ${osName}`);

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
console.log(screenWidth, screenHeight);

const screenAvailWidth = window.screen.availWidth;
const screenAvailHeight = window.screen.availHeight;
console.log(screenAvailWidth, screenAvailHeight);

const date = new Date().toLocaleDateString('fi-FI', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

console.log(date);

const time = new Date().toLocaleTimeString('fi-FI', {
  hour: 'numeric',
  minute: 'numeric',
});
console.log(time);

const rows = [
  `browser: ${browserName} ${version}`,
  `os: ${osName}`,
  `screen: ${screenWidth} x ${screenHeight}`,
  `available screen: ${screenAvailWidth} x ${screenAvailHeight}`,
  `date: ${date}`,
  `time: ${time}`,
];

const target = document.querySelector('#target');

rows.forEach((row) => {
  const p = document.createElement('p');
  p.textContent = row;
  target.appendChild(p);
});
