function orderFood(list) {
    let ret = { 'standard': 0, 'vegetarian': 0, 'vegan': 0, 'diabetic': 0, 'gluten-intolerant': 0 }
    list.forEach(element => {
        for (property in element) {
            if (property == "meal")
                ret[element[property]]++
        }
    });

    for (meal in ret) {
        if (ret[meal] == 0)
            delete ret[meal]
    }

    return ret
}


let list1 = [
    {
        firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian'
    },
]

console.log(orderFood(list1))
