const table = document.querySelector('#food-table');
const rows = document.querySelector('#food-rows');
const status = document.querySelector('#status');

async function loadFoods() {
  try {
    // Fetch the food list from the same server that serves this page.
    const response = await fetch('/foods');
    if (!response.ok) {
      throw new Error('Could not load the food list.');
    }
    const foods = await response.json();

    // Add one table row for each food returned by the API.
    for (const food of foods) {
      const row = rows.insertRow();
      row.insertCell().textContent = food.name;
      row.insertCell().textContent = `$${food.price.toFixed(2)}`;
    }

    status.hidden = true;
    table.hidden = false;
  } catch (error) {
    status.textContent = 'Could not load food prices. Please refresh to try again.';
    console.error(error);
  }
}

loadFoods();
