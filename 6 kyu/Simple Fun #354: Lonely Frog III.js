function jumpTo2(x, y) {
    if (x + 1 == y || x * 2 == y)
        return 1

    if (x > y)
        return 1000

    console.log(x + " " + y)

    return Math.min(1 + jumpTo(x * 2, y), 1 + jumpTo(x + 1, y))

}


function jumpTo___(x, y) {
    for (let l = 1; l < Number.MAX_VALUE; l++) {
        getKeys(l).forEach(key => {
            let temp_x = x
            for (let i = 0; i < l; i++) {
                if (key[i] == 0)
                    temp_x = temp_x + 1
                else
                    temp_x = temp_x * 2

                if (temp_x > y)
                    break
            }

            if (temp_x == y) {
                console.log(key + " " + temp_x)
                return
            }
        });
    }
}

function jumpTo(x, y) {
    for (let l = 1; l < Number.MAX_VALUE; l++) {
        let keys = getKeys(l)
        for (let k = 0; k < keys.length; k++) {
            let key = keys[k]
            let temp_x = x
            for (let i = 0; i < l; i++) {
                if (key[i] == 0)
                    temp_x = temp_x + 1
                else
                    temp_x = temp_x * 2

                if (temp_x > y)
                    break
            }

            if (temp_x == y) {
                console.log(key + " " + temp_x)
                return l
            }
        }
    }
}

function getKeys(length) {
    let ret = []
    for (let i = 0; i < 2 ** length; i++) {
        ret.push(i.toString(2).padStart(length, 0))
    }
    return ret
}

console.log(jumpTo(1, 8))
console.log(jumpTo(3, 16))
console.log(jumpTo(6, 74322))
console.log(jumpTo(3, 89694))
