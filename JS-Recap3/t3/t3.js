'use strict';

// Get the user agent data
const useragentdata = navigator.userAgent;
console.log(useragentdata);

let browserName = 'Unknown Browser';

if (useragentdata.includes('Chrome')) {
  browserName = 'Chrome';
} else if (useragentdata.includes('Firefox')) {
  browserName = 'Firefox';
} else if (useragentdata.includes('Safari')) {
  browserName = 'Safari';
} else {
  console.log('Unknown browser');
}

console.log(`You are using ${browserName}`);
const eka = useragentdata.split('Chrome/');
const toka = eka[1].split('.');
const version = toka[0];
console.log(`Version: ${version}`);

let osName = 'Unknown OS';

if (useragentdata.includes('Windows')) {
  osName = 'Windows';
} else if (useragentdata.includes('Macintosh')) {
  osName = 'Macintosh';
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

// KESKEN
