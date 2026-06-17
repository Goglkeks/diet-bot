//модуль работы с localstorage

//сохранение профиля
function saveProfile(user, kbju) {
    try {
        localStorage.setItem("dietProfile", JSON.stringify({ 
            user: user, 
            kbju: kbju, 
            savedAt: new Date().toLocaleString() 
        }))
        return true
    } catch(error) { 
        return false 
    }
}

//загрузка профиля
function loadProfile() {
    try {
        const saved = localStorage.getItem("dietProfile")
        return saved ? JSON.parse(saved) : null
    } catch(error) { 
        return null 
    }
}

//удаление профиля
function clearProfile() {
    localStorage.removeItem("dietProfile")
}

//проверка наличия сохранённого профиля
function hasSavedProfile() {
    return localStorage.getItem("dietProfile") !== null
}