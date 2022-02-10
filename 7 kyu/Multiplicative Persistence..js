function per(n) {
    if(n<10)
    return[]

    let ret=[]
    while(n>=10){
        let temp = n
        let num = 1
        while(temp>=10){
            num*=temp%10
            temp=Math.floor(temp/10)
        }
        n = num*temp
        ret.push(n)
    }
    return ret
}

console.log(per(277777788888899))
