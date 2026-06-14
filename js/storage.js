//модуль работы с localstorage

//ключ для хранения в localstorage
const STORAGE_KEY = "dietProfile"

//сохранение профиля
function saveProfile(userData, kbjuData) {
    if (!userData || !kbjuData) {
        console.error("Нет данных для сохранения")
        return false
    }
    
    const profile = {
        user: userData,
        kbju: kbjuData,
        savedAt: new Date().toLocaleString()
    }
    
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
        console.log("Профиль сохранён:", profile)
        return true
    } catch(e) {
        console.error("Ошибка сохранения:", e)
        return false
    }
}

//загрузка профиля
function loadProfile() {
    const saved = localStorage.getItem(STORAGE_KEY)
    console.log("Данные из localStorage:", saved)
    
    if (!saved) {
        return null
    }
    
    try {
        const profile = JSON.parse(saved)
        console.log("Профиль загружен:", profile)
        return profile
    } catch(e) {
        console.error("ошибка загрузки:", e)
        return null
    }
}

//удаление профиля
function clearProfile() {
    localStorage.removeItem(STORAGE_KEY)
    console.log("Профиль удалён")
}

//проверка наличия сохранённого профиля
function hasSavedProfile() {
    return localStorage.getItem(STORAGE_KEY) !== null
}