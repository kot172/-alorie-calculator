// Функция для обновления данных в localStorage
function updateLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
  }