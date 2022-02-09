function lastDigit(n, d) {
    if(d<=0)
    return[]

    n = n.toString()

    d = Math.min(d, n.length)
    let ret = []

    for(let i=n.length-d; i<n.length; i++)
    ret.push(Number(n[i]))

    return ret
}

console.log(lastDigit(123767,4))
