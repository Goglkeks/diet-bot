//модуль генерации меню и рецептов

//база рецептов на русском с кбжу (21 рецепт)
const recipesDB = [
    { id: 1, name: "Овсяная каша с ягодами", type: "breakfast", calories: 320, proteins: 12, fats: 8, carbs: 52, ingredients: "овсяные хлопья, молоко, ягоды, мёд", instruction: "Смешать овсянку с молоком, варить 5 минут. Добавить ягоды и мёд." },
    { id: 2, name: "Омлет с овощами", type: "breakfast", calories: 280, proteins: 18, fats: 15, carbs: 15, ingredients: "яйца 3шт, помидоры, перец, зелень", instruction: "Взбить яйца. Добавить нарезанные овощи. Жарить на сковороде 5-7 минут." },
    { id: 3, name: "Творог с фруктами", type: "breakfast", calories: 250, proteins: 20, fats: 5, carbs: 30, ingredients: "творог 200г, банан, ягоды, грецкие орехи", instruction: "Смешать творог с нарезанным бананом и ягодами. Посыпать орехами." },
    { id: 4, name: "Гречневая каша с молоком", type: "breakfast", calories: 300, proteins: 10, fats: 6, carbs: 50, ingredients: "гречка, молоко, сливочное масло", instruction: "Сварить гречку на молоке. Добавить масло." },
    { id: 5, name: "Сырники из творога", type: "breakfast", calories: 350, proteins: 22, fats: 14, carbs: 32, ingredients: "творог 250г, яйцо, мука, сахар", instruction: "Смешать ингредиенты. Сформировать сырники. Жарить до золотистой корочки." },
    { id: 6, name: "Куриная грудка с гречкой", type: "lunch", calories: 450, proteins: 35, fats: 12, carbs: 45, ingredients: "куриная грудка 200г, гречка 150г, овощи", instruction: "Отварить гречку. Запечь курицу с приправами. Подавать с овощами." },
    { id: 7, name: "Суп-пюре из брокколи", type: "lunch", calories: 220, proteins: 8, fats: 10, carbs: 25, ingredients: "брокколи 300г, картофель, сливки, сухарики", instruction: "Отварить брокколи и картофель. Измельчить блендером. Добавить сливки и сухарики." },
    { id: 8, name: "Рис с рыбой на пару", type: "lunch", calories: 420, proteins: 30, fats: 10, carbs: 50, ingredients: "рыба белая 200г, рис 150г, лимон", instruction: "Сварить рис. Приготовить рыбу на пару 15 минут. Полить лимонным соком." },
    { id: 9, name: "Паста с тунцом", type: "lunch", calories: 480, proteins: 28, fats: 15, carbs: 55, ingredients: "паста 150г, тунец консервированный 100г, томаты", instruction: "Сварить пасту. Смешать с тунцом и томатами." },
    { id: 10, name: "Запечённая индейка с овощами", type: "lunch", calories: 400, proteins: 32, fats: 8, carbs: 35, ingredients: "индейка 200г, кабачки, перец, помидоры", instruction: "Нарезать овощи. Запекать с индейкой 30 минут." },
    { id: 11, name: "Борщ постный", type: "lunch", calories: 180, proteins: 6, fats: 4, carbs: 30, ingredients: "свёкла, капуста, морковь, картофель, томатная паста", instruction: "Нарезать овощи. Варить 40 минут. Подавать с зеленью." },
    { id: 12, name: "Салат Цезарь с курицей", type: "dinner", calories: 350, proteins: 25, fats: 18, carbs: 20, ingredients: "курица 150г, салат, сыр, сухарики, соус", instruction: "Нарезать салат и курицу. Добавить сыр, сухарики и соус." },
    { id: 13, name: "Запечённый лосось с овощами", type: "dinner", calories: 400, proteins: 32, fats: 22, carbs: 15, ingredients: "лосось 200г, кабачки, помидоры, лимон", instruction: "Запекать лосось 15 минут. Отдельно запечь овощи." },
    { id: 14, name: "Овощное рагу", type: "dinner", calories: 200, proteins: 6, fats: 8, carbs: 30, ingredients: "баклажаны, кабачки, перец, томаты, морковь", instruction: "Нарезать овощи. Тушить 20 минут с томатным соусом." },
    { id: 15, name: "Творожная запеканка", type: "dinner", calories: 280, proteins: 22, fats: 10, carbs: 25, ingredients: "творог 250г, яйца, манка, изюм", instruction: "Смешать всё. Выпекать 30 минут." },
    { id: 16, name: "Гречка с грибами", type: "dinner", calories: 310, proteins: 12, fats: 8, carbs: 48, ingredients: "гречка, шампиньоны, лук, сметана", instruction: "Отварить гречку. Обжарить грибы с луком. Смешать." },
    { id: 17, name: "Греческий йогурт с гранолой", type: "snack", calories: 180, proteins: 10, fats: 6, carbs: 22, ingredients: "йогурт 150г, гранола, мёд, ягоды", instruction: "Смешать йогурт с гранолой. Добавить мёд и ягоды." },
    { id: 18, name: "Протеиновый коктейль", type: "snack", calories: 150, proteins: 25, fats: 3, carbs: 8, ingredients: "протеин 30г, молоко 200мл, банан", instruction: "Смешать в блендере до однородности." },
    { id: 19, name: "Яблоко с арахисовой пастой", type: "snack", calories: 200, proteins: 5, fats: 12, carbs: 20, ingredients: "яблоко, арахисовая паста 20г", instruction: "Нарезать яблоко. Подавать с пастой." },
    { id: 20, name: "Горсть орехов и сухофруктов", type: "snack", calories: 220, proteins: 6, fats: 15, carbs: 18, ingredients: "грецкие орехи, миндаль, курага, финики", instruction: "Смешать орехи и сухофрукты." },
    { id: 21, name: "Смузи из зелени и яблока", type: "snack", calories: 120, proteins: 3, fats: 2, carbs: 25, ingredients: "шпинат, яблоко, сельдерей, имбирь", instruction: "Измельчить в блендере." }
]

const mealTypes = {
    breakfast: "Завтрак",
    lunch: "Обед",
    dinner: "Ужин",
    snack: "Перекус"
}

const mealOrder = ["breakfast", "lunch", "dinner", "snack"]

//получить случайные рецепты по типу приёма пищи
function getRecipesByType(type, count = 1) {
    const filtered = recipesDB.filter(r => r.type === type)
    if (filtered.length === 0) return []
    
    const shuffled = [...filtered]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) // NOSONAR
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled.slice(0, count)
}

//генерация меню на день
function generateDayMenu(kbjuTarget) {
    const menu = {}
    
    for (const mealType of mealOrder) {
        const recipes = getRecipesByType(mealType, 1)
        if (recipes.length > 0) {
            menu[mealType] = recipes[0]
        }
    }
    
    let totalCalories = 0
    for (const mealType of mealOrder) {
        if (menu[mealType]) {
            totalCalories += menu[mealType].calories
        }
    }
    
    const targetCalories = kbjuTarget.calories
    const diffPercent = Math.abs(totalCalories - targetCalories) / targetCalories * 100
    
    return { menu, diffPercent, totalCalories, targetCalories }
}