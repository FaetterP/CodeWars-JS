function differentiate(f) {
    f = f.replace(/-x/g, '-1x')
    if (f.startsWith("x"))
        f = "1" + f

    let ret = ""
    let arr = f.split('^')
    if (arr.length == 1) {
        let a = arr[0]
        if (a[a.length - 1] == "x") {
            let a = Number(arr[0].slice(0, arr[0].length - 1))
            return a
        }
        else
            return 0
    }
    else {
        let a = Number(arr[0].slice(0, arr[0].length - 1))
        let b = Number(arr[1])

        if (a * b == 1)
            ret += "x"
        else if (a * b == -1)
            ret += "-x"
        else
            ret = (a * b) + "x"
        if (b != 2)
            ret += "^" + (b - 1)
    }
    return ret
}

console.log(differentiate("-3x^2"))
console.log(differentiate("-3x^3"))
console.log(differentiate("x"))
console.log(differentiate("-x"))
console.log(differentiate("2"))
