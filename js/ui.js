/* global mealOrder, mealTypes */

//модуль отображения интерфейса

//отображение результата расчёта на странице
function displayResult(data) {
    document.getElementById("calories").textContent = data.calories
    document.getElementById("protein").textContent = data.protein
    document.getElementById("fat").textContent = data.fat
    document.getElementById("carbs").textContent = data.carbs
    document.getElementById("result").classList.remove("hidden")
}

//показать сообщение пользователю
function showMessage(text, isSuccess = true) {
    const msgDiv = document.getElementById("message")
    msgDiv.textContent = text
    msgDiv.style.color = isSuccess ? "#4caf50" : "#f44336"
    setTimeout(() => {
        msgDiv.textContent = ""
    }, 3000)
}

//отображение меню на день
function displayDayMenu(menuData) {
    if (!menuData || !menuData.menu) {
        document.getElementById("menuContent").innerHTML = `<div class="error">Не удалось сгенерировать меню</div>`
        document.getElementById("menuBlock").classList.remove("hidden")
        return
    }
    
    const menu = menuData.menu
    const diffPercent = menuData.diffPercent
    const totalCalories = menuData.totalCalories
    const targetCalories = menuData.targetCalories
    
    let html = ""
    
    for (const mealType of mealOrder) {
        const recipe = menu[mealType]
        if (recipe) {
            html += `
                <div class="meal-card">
                    <div class="meal-name">${recipe.name}</div>
                    <div class="meal-category">${mealTypes[mealType]}</div>
                    <div class="meal-nutrition">
                        <span>${recipe.calories} ккал</span>
                        <span>Б: ${recipe.proteins}г</span>
                        <span>Ж: ${recipe.fats}г</span>
                        <span>У: ${recipe.carbs}г</span>
                    </div>
                    <div class="meal-ingredients">
                        <strong>Ингредиенты:</strong> ${recipe.ingredients}
                    </div>
                    <div class="meal-instructions">
                        <strong>Приготовление:</strong> ${recipe.instruction}
                    </div>
                </div>
            `
        } else {
            html += `
                <div class="meal-card">
                    <div class="meal-name">Нет рецепта</div>
                    <div class="meal-category">${mealTypes[mealType]}</div>
                    <div class="meal-instructions">Не удалось подобрать блюдо</div>
                </div>
            `
        }
    }
    
    html += `
        <div class="meal-card" style="background: #2e7d32">
            <div class="meal-name">Итого за день</div>
            <div class="meal-nutrition">
                <span>${totalCalories} ккал</span>
                <span>Норма: ${targetCalories} ккал</span>
                <span>Отклонение: ${Math.round(diffPercent)}%</span>
            </div>
            <div class="meal-instructions">
                ${diffPercent > 15 ? "Рекомендуем скорректировать порции." : "Отличное меню, соответствует вашей норме!"}
            </div>
        </div>
    `
    
    document.getElementById("menuContent").innerHTML = html
    document.getElementById("menuBlock").classList.remove("hidden")
}

//закрыть блок меню
function closeMenuBlock() {
    document.getElementById("menuBlock").classList.add("hidden")
}

//очистить сообщение
function clearMessage() {
    document.getElementById("message").textContent = ""
}