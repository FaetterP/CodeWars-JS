function eachCons(array, n) {
	let ret = []
    for(let i=0; i<array.length-n+1;i++)
    {
    ret.push([])
    for(let j=0;j<n;j++)
    ret[i].push(array[i+j])
    }

    return ret
}

console.log(eachCons([1,2,3,4,5], 2))