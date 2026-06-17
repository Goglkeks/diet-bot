//модуль генерации меню и рецептов

//база рецептов
const recipes = [
    { 
        id: 1, 
        name: "Овсяная каша с ягодами", 
        type: "breakfast", 
        calories: 320, 
        proteins: 12, 
        fats: 8, 
        carbs: 52,
        portion: "250 г",
        ingredients: "овсяные хлопья 50г, молоко 150мл, ягоды 30г, мёд 10г",
        instruction: "Залить овсянку молоком. Варить 5 минут. Добавить ягоды и мёд." 
    },
    { 
        id: 2, 
        name: "Омлет с овощами", 
        type: "breakfast", 
        calories: 280, 
        proteins: 18, 
        fats: 15, 
        carbs: 15,
        portion: "180 г",
        ingredients: "яйца 3шт, помидор 50г, перец 30г, зелень",
        instruction: "Взбить яйца. Добавить нарезанные овощи. Жарить 5-7 минут." 
    },
    { 
        id: 3, 
        name: "Творог с фруктами", 
        type: "breakfast", 
        calories: 250, 
        proteins: 20, 
        fats: 5, 
        carbs: 30,
        portion: "200 г",
        ingredients: "творог 150г, банан 50г, ягоды 30г, грецкие орехи 10г",
        instruction: "Смешать творог с нарезанным бананом и ягодами. Посыпать орехами." 
    },
    { 
        id: 4, 
        name: "Гречневая каша с молоком", 
        type: "breakfast", 
        calories: 300, 
        proteins: 10, 
        fats: 6, 
        carbs: 50,
        portion: "270 г",
        ingredients: "гречка 60г, молоко 200мл, масло сливочное 5г",
        instruction: "Сварить гречку на молоке. Добавить масло." 
    },
    { 
        id: 5, 
        name: "Сырники из творога", 
        type: "breakfast", 
        calories: 350, 
        proteins: 22, 
        fats: 14, 
        carbs: 32,
        portion: "200 г",
        ingredients: "творог 200г, яйцо 1шт, мука 30г, сахар 10г",
        instruction: "Смешать ингредиенты. Сформировать сырники. Жарить до золотистой корочки." 
    },
    { 
        id: 6, 
        name: "Куриная грудка с гречкой", 
        type: "lunch", 
        calories: 450, 
        proteins: 35, 
        fats: 12, 
        carbs: 45,
        portion: "350 г",
        ingredients: "куриная грудка 150г, гречка 100г, овощи 100г",
        instruction: "Отварить гречку. Запечь курицу с приправами. Подавать с овощами." 
    },
    { 
        id: 7, 
        name: "Суп-пюре из брокколи", 
        type: "lunch", 
        calories: 220, 
        proteins: 8, 
        fats: 10, 
        carbs: 25,
        portion: "300 мл",
        ingredients: "брокколи 200г, картофель 100г, сливки 50мл, сухарики 10г",
        instruction: "Отварить брокколи и картофель. Измельчить блендером. Добавить сливки." 
    },
    { 
        id: 8, 
        name: "Рис с рыбой на пару", 
        type: "lunch", 
        calories: 420, 
        proteins: 30, 
        fats: 10, 
        carbs: 50,
        portion: "320 г",
        ingredients: "рыба белая 150г, рис 100г, лимон, зелень",
        instruction: "Сварить рис. Приготовить рыбу на пару 15 минут. Полить лимонным соком." 
    },
    { 
        id: 9, 
        name: "Паста с тунцом", 
        type: "lunch", 
        calories: 480, 
        proteins: 28, 
        fats: 15, 
        carbs: 55,
        portion: "320 г",
        ingredients: "паста 80г, тунец 80г, томаты 70г, оливки 20г",
        instruction: "Сварить пасту. Смешать с тунцом и томатами." 
    },
    { 
        id: 10, 
        name: "Запечённая индейка с овощами", 
        type: "lunch", 
        calories: 400, 
        proteins: 32, 
        fats: 8, 
        carbs: 35,
        portion: "350 г",
        ingredients: "индейка 150г, кабачки 50г, перец 50г, помидоры 50г",
        instruction: "Нарезать овощи. Запекать с индейкой 30 минут." 
    },
    { 
        id: 11, 
        name: "Салат Цезарь с курицей", 
        type: "dinner", 
        calories: 350, 
        proteins: 25, 
        fats: 18, 
        carbs: 20,
        portion: "250 г",
        ingredients: "курица 100г, салат 80г, сыр 20г, сухарики 20г, соус 30г",
        instruction: "Нарезать салат и курицу. Добавить сыр, сухарики и соус." 
    },
    { 
        id: 12, 
        name: "Запечённый лосось с овощами", 
        type: "dinner", 
        calories: 400, 
        proteins: 32, 
        fats: 22, 
        carbs: 15,
        portion: "280 г",
        ingredients: "лосось 150г, кабачки 50г, помидоры 50г, лимон, специи",
        instruction: "Запекать лосось 15 минут. Отдельно запечь овощи." 
    },
    { 
        id: 13, 
        name: "Овощное рагу", 
        type: "dinner", 
        calories: 200, 
        proteins: 6, 
        fats: 8, 
        carbs: 30,
        portion: "350 г",
        ingredients: "баклажаны 100г, кабачки 80г, перец 50г, томаты 70г, морковь 50г",
        instruction: "Нарезать овощи. Тушить 20 минут с томатным соусом." 
    },
    { 
        id: 14, 
        name: "Творожная запеканка", 
        type: "dinner", 
        calories: 280, 
        proteins: 22, 
        fats: 10, 
        carbs: 25,
        portion: "200 г",
        ingredients: "творог 200г, яйцо 1шт, манка 20г, изюм 20г",
        instruction: "Смешать всё. Выпекать 30 минут при 180°C." 
    },
    { 
        id: 15, 
        name: "Гречка с грибами", 
        type: "dinner", 
        calories: 310, 
        proteins: 12, 
        fats: 8, 
        carbs: 48,
        portion: "300 г",
        ingredients: "гречка 80г, шампиньоны 100г, лук 50г, сметана 20г",
        instruction: "Отварить гречку. Обжарить грибы с луком. Смешать." 
    },
    { 
        id: 16, 
        name: "Греческий йогурт с гранолой", 
        type: "snack", 
        calories: 180, 
        proteins: 10, 
        fats: 6, 
        carbs: 22,
        portion: "200 г",
        ingredients: "йогурт греческий 150г, гранола 20г, мёд 10г, ягоды 20г",
        instruction: "Смешать йогурт с гранолой. Добавить мёд и ягоды." 
    },
    { 
        id: 17, 
        name: "Протеиновый коктейль", 
        type: "snack", 
        calories: 150, 
        proteins: 25, 
        fats: 3, 
        carbs: 8,
        portion: "300 мл",
        ingredients: "протеин 30г, молоко 200мл, банан 70г",
        instruction: "Смешать все ингредиенты в блендере до однородности." 
    },
    { 
        id: 18, 
        name: "Яблоко с арахисовой пастой", 
        type: "snack", 
        calories: 200, 
        proteins: 5, 
        fats: 12, 
        carbs: 20,
        portion: "180 г",
        ingredients: "яблоко 150г, арахисовая паста 20г",
        instruction: "Нарезать яблоко. Подавать с арахисовой пастой." 
    },
    { 
        id: 19, 
        name: "Горсть орехов и сухофруктов", 
        type: "snack", 
        calories: 220, 
        proteins: 6, 
        fats: 15, 
        carbs: 18,
        portion: "50 г",
        ingredients: "грецкие орехи 20г, миндаль 10г, курага 10г, финики 10г",
        instruction: "Смешать орехи и сухофрукты." 
    },
    { 
        id: 20, 
        name: "Смузи из зелени и яблока", 
        type: "snack", 
        calories: 120, 
        proteins: 3, 
        fats: 2, 
        carbs: 25,
        portion: "250 мл",
        ingredients: "шпинат 50г, яблоко 100г, сельдерей 30г, имбирь 5г",
        instruction: "Измельчить в блендере." 
    }
]

//типы приёмов пищи
const mealTypes = { 
    breakfast: "Завтрак", 
    lunch: "Обед", 
    dinner: "Ужин", 
    snack: "Перекус" 
}

//порядок приёмов пищи
const mealOrder = ["breakfast", "lunch", "dinner", "snack"]

//генерация меню на день
function generateDayMenu(kbju) {
    const menu = {}
    
    //для каждого типа пищи выбираем случайный рецепт
    mealOrder.forEach(function(type) {
        const filteredRecipes = recipes.filter(function(recipe) {
            return recipe.type === type
        })
        menu[type] = filteredRecipes.length > 0 
            ? filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)] //NOSONAR
            : null
    })
    
    //считаем сумму калорий
    let totalCalories = 0
    const menuValues = Object.values(menu)
    for (let i = 0; i < menuValues.length; i++) {
        const recipe = menuValues[i]
        if (recipe !== null) {
            totalCalories = totalCalories + recipe.calories
        }
    }
    
    //считаем отклонение от нормы
    const targetCalories = kbju.calories
    const diffPercent = Math.abs(totalCalories - targetCalories) / targetCalories * 100
    
    //возвращаем результат
    return {
        menu: menu,
        total: totalCalories,
        target: targetCalories,
        diff: diffPercent
    }
}