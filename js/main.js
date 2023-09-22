// Получение элементов DOM
const productNameInput = document.getElementById('product-name');
const caloriesInput = document.getElementById('calories');
const addButton = document.getElementById('add-button');
const totalCaloriesElement = document.getElementById('total-calories');
const targetCaloriesElement = document.getElementById('target-calories');
const filterInput = document.getElementById('filter-input');
const sortButton = document.getElementById('sort-button');
const productsList = document.getElementById('products');
const clearButton = document.getElementById('clear-button');
const chartBar = document.getElementById('chart-bar');

// Инициализация данных из localStorage
let products = JSON.parse(localStorage.getItem('products')) || [];

// Обработчики событий
addButton.addEventListener('click', addProduct);
filterInput.addEventListener('input', filterProducts);
sortButton.addEventListener('click', sortProducts);
clearButton.addEventListener('click', clearData);

// Инициализация при загрузке страницы
renderProducts();
renderChart();
