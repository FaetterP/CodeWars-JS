function points(games) {
    let ret = 0

    games.forEach(element => {
        let xy = element.split(':')
        
        if(xy[0]>xy[1])
        ret+=3

        else if (xy[0]<xy[1])
        ret+=0

        else 
        ret+=1
    });

    return ret
  }

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))
