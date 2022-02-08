function remove(string) {
    if(string[string.length-1]=='!')
    string = string.slice(0, string.length-1)
    
    return string;
  }

console.log(remove("!Hi!!"))
