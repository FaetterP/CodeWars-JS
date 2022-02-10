function positiveToNegative(b) {
    b = reverse(b)
    return plusOne(b)
}

function reverse(b) {
    let ret = []
    b.forEach(element => {
        ret.push(element ? 0 : 1)
    });
    return ret
}

function plusOne(b) {
    for (let i = b.length - 1; i >= 0; i--) {
        let temp = b[i]
        b[i] = b[i] ? 0 : 1

        if (temp == 0)
            break
    }
    return b
}

console.log(positiveToNegative([0, 1, 0, 0, 1]))
console.log(positiveToNegative([0, 0, 0, 0, 0]))
