
// Функция для добавления продукта
function addProduct() {
    const productName = productNameInput.value;
    const calories = parseInt(caloriesInput.value);
  
    if (productName && calories) {
      const product = { name: productName, calories: calories };
      products.push(product);
      updateLocalStorage();
      renderProducts();
      renderChart();
      productNameInput.value = '';
      caloriesInput.value = '';
    }
  }
  
  // Функция для рендеринга списка продуктов
  function renderProducts() {
    productsList.innerHTML = '';
  
    products.forEach((product, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${product.name} - ${product.calories} калорий`;
      productsList.appendChild(li);
    });
  
    updateTotalCalories();
  }
  
  // Функция для обновления общего количества калорий
  function updateTotalCalories() {
    const totalCalories = products.reduce((total, product) => total + product.calories, 0);
    totalCaloriesElement.textContent = totalCalories;
  
    checkTargetCalories(totalCalories);
  }
  
  // Функция для проверки превышения целевых калорий
  function checkTargetCalories(totalCalories) {
    const targetCalories = parseInt(targetCaloriesElement.textContent);
  
    if (totalCalories > targetCalories) {
      alert('Превышен дневной лимит калорий!');
    }
  }
  
  // Функция для фильтрации продуктов по названию
  function filterProducts() {
    const filterValue = filterInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filterValue));
    renderFilteredProducts(filteredProducts);
  }
  
  // Функция для рендеринга отфильтрованных продуктов
  function renderFilteredProducts(filteredProducts) {
    productsList.innerHTML = '';
  
    filteredProducts.forEach((product, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${product.name} - ${product.calories} калорий`;
      productsList.appendChild(li);
    });
  }
  
  // Функция для сортировки продуктов по калориям
  function sortProducts() {
    const sortedProducts = [...products].sort((a, b) => a.calories - b.calories);
    renderSortedProducts(sortedProducts);
  }
  
  // Функция для рендеринга отсортированных продуктов
  function renderSortedProducts(sortedProducts) {
    productsList.innerHTML = '';
  
    sortedProducts.forEach((product, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${product.name} - ${product.calories} калорий`;
      productsList.appendChild(li);
    });
  }
  
  // Функция для очистки данных
  function clearData() {
    products = [];
    updateLocalStorage();
    renderProducts();
    renderChart();
  }