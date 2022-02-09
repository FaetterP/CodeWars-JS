const removeConsecutiveDuplicates = s =>
{
    let ret =[]
    let arr = s.split(' ')
    let last = ""

    arr.forEach(element => {
        if(last!=element)
        {
            last=element
            ret.push(element)
        }
    });

    return ret.reduce((a,b) => a+" "+b)
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
