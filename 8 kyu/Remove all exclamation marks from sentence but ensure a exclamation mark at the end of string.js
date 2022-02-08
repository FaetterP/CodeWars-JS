function remove (string) {
    string = string.replace(/!/g,'')
    return string+'!';
  }

console.log(remove("!Hi!!"))
