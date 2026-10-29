const restaurants = []

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

const fetchData = async () => {
    const response = await fetch(apiUrl + '/restaurants');
    const data = await response.json();
    console.log(data);
    return data;
};

fetchData();

// your code here
const tableElem = document.querySelector('table');

// get ref to dialog element
const dialog = document.querySelector('dialog');
dialog.addEventListener('click', (event) => {
  dialog.close();
});

for (const restaurant of restaurants) {
  const tableRow = document.createElement('tr');
  const nameCell = document.createElement('td');
  const addressCell = document.createElement('td');
  
  // add content to the cells
  nameCell.textContent = restaurant.name;
  addressCell.textContent = restaurant.address;

  tableRow.appendChild(nameCell);
  tableRow.appendChild(addressCell);
  tableElem.appendChild(tableRow);

  tableRow.addEventListener('click', (event) => {
    dialog.innerHTML = ''; // Clear previous content
    const title = document.createElement('h2');
    const details = document.createElement('p');

    title.textContent = restaurant.name;
    details.textContent = `${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}, ${restaurant.phone}`;

    dialog.appendChild(title);
    dialog.appendChild(details);
    dialog.showModal();
  });
}

 /* Alternative solution using forEach method
restaurants.forEach((restaurant) => {
  const tableRow = document.createElement('tr');
  const nameCell = document.createElement('td');
  const addressCell = document.createElement('td');
  
  nameCell.textContent = restaurant.name;
  addressCell.textContent = restaurant.address;

  tableRow.appendChild(nameCell);
  tableRow.appendChild(addressCell);
  tableElem.appendChild(tableRow);
});*/