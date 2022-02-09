function abbrevName(name){
    name = name.toUpperCase()
    let words = name.split(' ')
    return words[0][0]+'.'+words[1][0]
}

console.log(abbrevName("sam Harris"))
