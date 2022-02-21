function partsSums(ls) {
    let ret = []
    ret[ls.length] = 0

    for (let i = ls.length - 1; i >= 0; i--)
        ret[i] = ret[i + 1] + ls[i]

    return ret;
}

console.log(partsSums([0, 1, 3, 6, 10]))
