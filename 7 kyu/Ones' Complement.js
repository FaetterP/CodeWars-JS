function onesComplement(n) {
    let ret = ""
    for (let i = 0; i < n.length; i++)
        ret += n[i] == true ? '0' : '1'
    return ret
}

console.log(onesComplement("1001"))
