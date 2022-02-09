function newAvg(arr, newavg) {
    let arrSum = 0
    arr.forEach(element => {
       arrSum+=element 
    });

    let ret = newavg*(arr.length+1)-arrSum
    if(ret<0)
    throw ""

    else 
    return Math.ceil(ret)
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90))
