function seven(m) {
    let count = 0

    while(m>99){

        let x = Math.floor(m/10)
        let y = m%10

        count+=1
        m=x-2*y
    }

    return [m, count]
}

console.log(seven(1021))
