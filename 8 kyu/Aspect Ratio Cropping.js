function aspectRatio(x,y){
    return [Math.round(y*16/9), y]
}

console.log(aspectRatio(1920, 1440))
