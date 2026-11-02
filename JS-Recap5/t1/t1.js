'use strict';

const API_KEY = 'reqres-free-v1';
const url = 'https://reqres.in/api/users/1';
const settings = {
  method: 'GET',
  headers: {
    'x-api-key': API_KEY,
  },
};

async function fetchUserData() {
  const response = await fetch(url, settings);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  console.log(data.data);
}

fetchUserData();
