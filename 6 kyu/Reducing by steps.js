function gcdi(x, y) {
    return y == 0 ? x : gcdi(y, x % y);
}
function lcmu(a, b) {
return Math.abs(a*b)/gcdi(a,b)
}
function som(a, b) {
    return a + b
}
function maxi(a, b) {
    return Math.max(a, b)
}
function mini(a, b) {
    return Math.min(a, b)
}
function operArray(fct, arr, init) {
    let ret = []
    ret.push(fct(arr[0], init))
    for (let i = 1; i < arr.length; i++) {
        ret.push(fct(arr[i], ret[i - 1]))
    }
    return ret
}

console.log(3%-3)
console.log(operArray(lcmu, [ 18, 69, -90, -78, 65, 40 ], 18))
console.log(gcdi(-2070, -78))
