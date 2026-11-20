// This module creates one shared mock database in memory.
const foods = [
  { name: 'Apple', price: 1.25 },
  { name: 'Banana', price: 0.75 },
  { name: 'Carrot', price: 0.90 },
  { name: 'Bread', price: 3.50 },
  { name: 'Yogurt', price: 2.25 }
];

// Return the full list of foods and their prices.
function getAll() {
  return foods;
}

module.exports = { getAll };
