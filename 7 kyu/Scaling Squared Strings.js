function scale(strng, k, n) {
    let ret = ""
    let strings = strng.split('\n')

    strings.forEach(element => {
        let added = ""
        for(let i=0;i<element.length;i++){
            for(let j=0;j<k;j++){
                added+=element[i]
            }
        }
        
        for(let i=0;i<n;i++)
        ret+=added+'\n'
    });

    return ret.trim()
}

console.log(scale("abcd\nefgh\nijkl\nmnop", 2, 3))
