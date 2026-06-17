//модуль расчёта кбжу

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

//главная функция расчёта кбжу
function calculateKBJU(age, weight, height, gender, activity, goal) {
    const bmr = calculateBMR(age, weight, height, gender)
    let calories = Math.round(bmr * activityFactors[activity] * goalFactors[goal])
    
    //распределение по цели
    const proteinPercent = goal === "weight_loss" ? 0.35 : goal === "muscle_gain" ? 0.30 : 0.25
    const fatPercent = goal === "weight_loss" ? 0.25 : goal === "muscle_gain" ? 0.25 : 0.30
    const carbPercent = 1 - proteinPercent - fatPercent
    
    return {
        calories: calories,
        protein: Math.round(calories * proteinPercent / 4),
        fat: Math.round(calories * fatPercent / 9),
        carbs: Math.round(calories * carbPercent / 4)
    }
}