function woodCut(woods,n){
    let sr = Math.floor(woods.reduce((a,b)=>a+b)/n)
    let min = woods.reduce((a,b)=>Math.min(a,b))
    if(sr>min)
    return min

    for(let i =0;i<Number.MAX_VALUE;i++){
        let test = sr-i;
        let count=0
        woods.forEach(element => {
            count+=Math.floor(element/test)
        });
        if(count>=n)
        return test
    }
}

console.log(woodCut([232, 124, 456], 20))
console.log(woodCut([232, 124, 456], 1))
