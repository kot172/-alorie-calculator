// Функция для рендеринга диаграммы
function renderChart() {
    const totalCalories = products.reduce((total, product) => total + product.calories, 0);
    const targetCalories = parseInt(targetCaloriesElement.textContent);
    const percentage = Math.min((totalCalories / targetCalories) * 100, 100);
    chartBar.style.width = `${percentage}%`;
  }