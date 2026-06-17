//главный файл приложения

//глобальные переменные
let lastUserData = null
let lastKBJUData = null
const formElement = document.getElementById("dietForm")

//обработчик отправки формы
function handleFormSubmit(event) {
    event.preventDefault()
    
    const ageValue = Number(document.getElementById("age").value)
    const weightValue = Number(document.getElementById("weight").value)
    const heightValue = Number(document.getElementById("height").value)
    
    //проверка на пустые поля
    if (!ageValue || !weightValue || !heightValue) {
        showMessage("Введите числа", false)
        return
    }
    
    const genderValue = document.getElementById("gender").value
    const goalValue = document.getElementById("goal").value
    const activityValue = document.getElementById("activity").value
    
    const kbjuResult = calculateKBJU(ageValue, weightValue, heightValue, genderValue, activityValue, goalValue)
    displayResult(kbjuResult)
    
    lastUserData = { 
        age: ageValue, 
        weight: weightValue, 
        height: heightValue, 
        gender: genderValue, 
        goal: goalValue, 
        activity: activityValue 
    }
    lastKBJUData = kbjuResult
    
    console.log("Расчёт выполнен:", lastUserData, lastKBJUData)
}

//сохранение профиля
function handleSaveProfile() {
    if (lastUserData && lastKBJUData) {
        const saved = saveProfile(lastUserData, lastKBJUData)
        if (saved) {
            showMessage("Сохранено", true)
        } else {
            showMessage("Ошибка сохранения", false)
        }
    } else {
        showMessage("Сначала сделайте расчёт", false)
    }
}

//загрузка профиля
function handleLoadProfile() {
    const profile = loadProfile()
    
    if (profile) {
        document.getElementById("age").value = profile.user.age
        document.getElementById("weight").value = profile.user.weight
        document.getElementById("height").value = profile.user.height
        document.getElementById("gender").value = profile.user.gender
        document.getElementById("goal").value = profile.user.goal
        document.getElementById("activity").value = profile.user.activity
        
        displayResult(profile.kbju)
        showMessage("Профиль загружен", true)
        
        lastUserData = profile.user
        lastKBJUData = profile.kbju
    } else {
        showMessage("Нет сохранённого профиля", false)
    }
}

//генерация меню
function handleGenerateMenu() {
    if (!lastKBJUData) {
        showMessage("Сначала сделайте расчёт", false)
        return
    }
    
    const menuData = generateDayMenu(lastKBJUData)
    displayMenu(menuData)
}

//обновление меню
function handleRefreshMenu() {
    if (!lastKBJUData) {
        showMessage("Сначала сделайте расчёт", false)
        return
    }
    
    const menuData = generateDayMenu(lastKBJUData)
    displayMenu(menuData)
}

//закрытие меню
function handleCloseMenu() {
    closeMenuBlock()
}

//инициализация приложения
function initializeApp() {
    formElement.addEventListener("submit", handleFormSubmit)
    
    const saveButton = document.getElementById("saveBtn")
    if (saveButton) {
        saveButton.addEventListener("click", handleSaveProfile)
    }
    
    const loadButton = document.getElementById("loadTopBtn")
    if (loadButton) {
        loadButton.addEventListener("click", handleLoadProfile)
    }
    
    const menuButton = document.getElementById("dayMenuBtn")
    if (menuButton) {
        menuButton.addEventListener("click", handleGenerateMenu)
    }
    
    const refreshButton = document.getElementById("refreshMenuBtn")
    if (refreshButton) {
        refreshButton.addEventListener("click", handleRefreshMenu)
    }
    
    const closeButton = document.getElementById("closeMenuBtn")
    if (closeButton) {
        closeButton.addEventListener("click", handleCloseMenu)
    }
    
    console.log("Приложение запущено")
}

//запуск приложения после загрузки страницы
document.addEventListener("DOMContentLoaded", initializeApp)