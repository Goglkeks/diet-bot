//модуль расчёта кбжу

//класс пользователя (объектная модель по требованию п.2.1)
class User {
    constructor(age, weight, height, gender, activity, goal) {
        this.age = age
        this.weight = weight
        this.height = height
        this.gender = gender
        this.activity = activity
        this.goal = goal
    }
}

//коэффициенты активности
const activityFactors = {
    low: 1.2,
    moderate: 1.375,
    high: 1.55
}

//коэффициенты целей
const goalFactors = {
    weight_loss: 0.85,
    maintain: 1.0,
    muscle_gain: 1.15
}

//расчёт базового обмена веществ по формуле миффлина-сан жеора
function calculateBMR(age, weight, height, gender) {
    if (gender === "male") {
        return 10 * weight + 6.25 * height - 5 * age + 5
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161
    }
}

//расчёт суточной нормы калорий
function calculateDailyCalories(bmr, activity, goal) {
    let calories = bmr * activityFactors[activity]
    calories = calories * goalFactors[goal]
    return Math.round(calories)
}

//расчёт бжу в граммах
function calculateMacros(calories, goal) {
    let proteinPercent, fatPercent, carbPercent
    
    if (goal === "weight_loss") {
        proteinPercent = 0.35
        fatPercent = 0.25
        carbPercent = 0.40
    } else if (goal === "muscle_gain") {
        proteinPercent = 0.30
        fatPercent = 0.25
        carbPercent = 0.45
    } else {
        proteinPercent = 0.25
        fatPercent = 0.30
        carbPercent = 0.45
    }
    
    const protein = Math.round((calories * proteinPercent) / 4)
    const fat = Math.round((calories * fatPercent) / 9)
    const carbs = Math.round((calories * carbPercent) / 4)
    
    return { protein, fat, carbs }
}

//главная функция расчёта кбжу (принимает либо параметры, либо объект User)
function calculateKBJU(age, weight, height, gender, activity, goal) {
    //если передан объект User
    if (typeof age === "object" && age !== null) {
        const user = age
        return calculateKBJU(user.age, user.weight, user.height, user.gender, user.activity, user.goal)
    }
    
    const bmr = calculateBMR(age, weight, height, gender)
    const calories = calculateDailyCalories(bmr, activity, goal)
    const macros = calculateMacros(calories, goal)
    
    return {
        calories: calories,
        protein: macros.protein,
        fat: macros.fat,
        carbs: macros.carbs,
        bmr: Math.round(bmr)
    }
}