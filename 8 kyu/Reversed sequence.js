const reverseSeq = n => {
    let ret =[]
    
    for(let i=n;i>0;i--)
    ret.push(i)

    return ret
  };

console.log(reverseSeq(5))
