'use strict';

const API_KEY = 'reqres-free-v1';
const url = 'https://reqres.in/api/unknown/23';
const settings = {
  method: 'GET',
  headers: {
    'x-api-key': API_KEY,
  },
};

async function fetchUserData() {
  try {
    const response = await fetch(url, settings);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    console.log('JSON data:', json);
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
}
fetchUserData();
