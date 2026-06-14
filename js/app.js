/* global showMessage, calculateKBJU, displayResult, saveProfile, loadProfile, generateDayMenu, displayDayMenu, closeMenuBlock */

//главный файл приложения - инициализация и обработчики событий

//глобальные переменные для хранения текущих данных
let lastUserData = null
let lastKBJU = null

//получение элементов dom
const form = document.getElementById("dietForm")

//инициализация приложения
function initApp() {
    console.log("приложение запущено")
}

//обработчик отправки формы
function handleFormSubmit(event) {
    event.preventDefault()
    
    const age = parseInt(document.getElementById("age").value)
    const weight = parseFloat(document.getElementById("weight").value)
    const height = parseInt(document.getElementById("height").value)
    const gender = document.getElementById("gender").value
    const goal = document.getElementById("goal").value
    const activity = document.getElementById("activity").value
    
    if (!age || age < 1 || age > 120) {
        showMessage("Введите возраст от 1 до 120 лет", false)
        return
    }
    
    if (!weight || weight < 20 || weight > 250) {
        showMessage("Введите вес от 20 до 250 кг", false)
        return
    }
    
    if (!height || height < 100 || height > 250) {
        showMessage("Введите рост от 100 до 250 см", false)
        return
    }
    
    const kbju = calculateKBJU(age, weight, height, gender, activity, goal)
    const userData = { age, weight, height, gender, goal, activity }
    
    displayResult(kbju)
    
    //сохраняем в глобальные переменные
    lastUserData = userData
    lastKBJU = kbju
    
    console.log("Расчёт выполнен, данные сохранены:", lastUserData, lastKBJU)
}

//обработчик кнопки сохранения
function handleSaveProfile() {
    console.log("Сохранение, lastUserData:", lastUserData)
    
    if (lastUserData && lastKBJU) {
        saveProfile(lastUserData, lastKBJU)
        showMessage("Профиль сохранён", true)
    } else {
        showMessage("Сначала сделайте расчёт", false)
    }
}

//обработчик кнопки загрузки профиля
function handleLoadProfile() {
    console.log("Загрузка профиля")
    
    const profile = loadProfile()
    console.log("Загруженный профиль:", profile)
    
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
        lastKBJU = profile.kbju
    } else {
        showMessage("Нет сохранённого профиля", false)
    }
}

//обработчик кнопки меню на день
function handleDayMenu() {
    if (!lastKBJU) {
        showMessage("Сначала сделайте расчёт", false)
        return
    }
    
    const menuData = generateDayMenu(lastKBJU)
    displayDayMenu(menuData)
}

//обработчик кнопки обновления меню
function handleRefreshMenu() {
    if (!lastKBJU) {
        showMessage("Сначала сделайте расчёт", false)
        return
    }
    
    const menuData = generateDayMenu(lastKBJU)
    displayDayMenu(menuData)
}

//обработчик кнопки закрытия меню
function handleCloseMenu() {
    closeMenuBlock()
}

//регистрация всех обработчиков событий
function bindEvents() {
    form.addEventListener("submit", handleFormSubmit)
    
    const saveBtn = document.getElementById("saveBtn")
    if (saveBtn) saveBtn.addEventListener("click", handleSaveProfile)
    
    const loadTopBtn = document.getElementById("loadTopBtn")
    if (loadTopBtn) loadTopBtn.addEventListener("click", handleLoadProfile)
    
    const dayMenuBtn = document.getElementById("dayMenuBtn")
    if (dayMenuBtn) dayMenuBtn.addEventListener("click", handleDayMenu)
    
    const refreshMenuBtn = document.getElementById("refreshMenuBtn")
    if (refreshMenuBtn) refreshMenuBtn.addEventListener("click", handleRefreshMenu)
    
    const closeMenuBtn = document.getElementById("closeMenuBtn")
    if (closeMenuBtn) closeMenuBtn.addEventListener("click", handleCloseMenu)
}

//запуск приложения
document.addEventListener("DOMContentLoaded", () => {
    initApp()
    bindEvents()
})