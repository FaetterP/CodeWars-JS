function validateWord(s) {
    s = s.toLowerCase()
    let numbers = [...getCount(s).values()]
    numbers = numbers.sort(function (a, b) {
        return a - b
    })

    return numbers[0] == numbers[numbers.length - 1]
}

function getCount(s) {
    let ret = new Map()
    for (let i = 0; i < s.length; i++) {
        if (ret.has(s[i]))
            ret.set(s[i], ret.get(s[i]) + 1)
        else
            ret.set(s[i], 1)
    }
    return ret
}

console.log(validateWord("Abc:abc:"))
console.log(validateWord("Abc:abc"))
