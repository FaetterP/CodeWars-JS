function decode(string) {
    let dc = new Map()
    dc = dc.set(1,9).set(9,1)
    dc = dc.set(2,8).set(8,2)
    dc = dc.set(3,7).set(7,3)
    dc = dc.set(4,6).set(6,4)
    dc = dc.set(5,0).set(0,5)

    let ret = ""

    for (let i = 0; i < string.length; i++)
    ret+=dc.get(Number(string[i]))

    return ret
}

console.log(decode("1234567890"))
