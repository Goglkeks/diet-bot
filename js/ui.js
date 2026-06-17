//модуль отображения интерфейса

//показать сообщение пользователю
function showMessage(text, isSuccess) {
    const messageElement = document.getElementById("message")
    messageElement.textContent = text
    messageElement.style.color = isSuccess ? "#4caf50" : "#f44336"
    setTimeout(function() {
        messageElement.textContent = ""
    }, 3000)
}

//отображение результата расчёта
function displayResult(data) {
    document.getElementById("calories").textContent = data.calories
    document.getElementById("protein").textContent = data.protein
    document.getElementById("fat").textContent = data.fat
    document.getElementById("carbs").textContent = data.carbs
    document.getElementById("result").classList.remove("hidden")
}

//отображение сгенерированного меню
function displayMenu(data) {
    const menuContentElement = document.getElementById("menuContent")
    
    //проверка на ошибки
    if (!data || !data.menu) {
        menuContentElement.innerHTML = "<div class='error'>Ошибка генерации меню</div>"
        document.getElementById("menuBlock").classList.remove("hidden")
        return
    }
    
    let htmlCode = ""
    
    //проходим по всем типам пищи
    for (let i = 0; i < mealOrder.length; i++) {
        const type = mealOrder[i]
        const recipe = data.menu[type]
        
        if (recipe !== null) {
            htmlCode = htmlCode + `
                <div class="meal-card">
                    <div class="meal-name">${recipe.name}</div>
                    <div class="meal-category">${mealTypes[type]} | Порция: ${recipe.portion}</div>
                    <div class="meal-nutrition">
                        ${recipe.calories} ккал | 
                        Белки: ${recipe.proteins}г | 
                        Жиры: ${recipe.fats}г | 
                        Углеводы: ${recipe.carbs}г
                    </div>
                    <div class="meal-ingredients">
                        Ингредиенты: ${recipe.ingredients}
                    </div>
                    <div class="meal-instructions">
                        Приготовление: ${recipe.instruction}
                    </div>
                </div>
            `
        } else {
            htmlCode = htmlCode + `
                <div class="meal-card">
                    <div class="meal-name">Нет рецепта</div>
                    <div class="meal-category">${mealTypes[type]}</div>
                </div>
            `
        }
    }
    
    //итоговая карточка
    htmlCode = htmlCode + `
        <div class="meal-card" style="background:#2e7d32">
            <div class="meal-name">Итого за день</div>
            <div class="meal-nutrition">
                ${data.total} ккал (норма: ${data.target} ккал)
            </div>
            <div class="meal-instructions">
                Отклонение: ${Math.round(data.diff)}% 
                ${data.diff > 15 ? "Рекомендуем скорректировать порции" : "Отличное меню!"}
            </div>
        </div>
    `
    
    menuContentElement.innerHTML = htmlCode
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