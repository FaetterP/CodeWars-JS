function digitize(n) {
    let ret =[]
    let str = n.toString()

    for (let i = 0; i < str.length; i++)
    ret.push(Number(str[i]))

    return ret
}

console.log(digitize(123))
