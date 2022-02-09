function countPositivesSumNegatives(input) {
    if(input == null)
    return []
    
    let sum = 0
    let count = 0

    input.forEach(element => {
        if(element>0)
        count+=1

        else if(element<0)
        sum+=element
    });

    if(sum==0 && count==0)
    return[]

    return[count, sum]
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData))
