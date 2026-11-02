'use strict';

const API_KEY = 'reqres-free-v1';
const url = 'https://reqres.in/api/users';
const settings = {
  method: 'POST',
  headers: {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    job: 'Software Engineer',
  }),
};

async function postUserData() {
  const response = await fetch(url, settings);
  const data = await response.json();
  console.log(data);
}

postUserData();
