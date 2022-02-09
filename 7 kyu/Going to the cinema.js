function movie(card, ticket, perc) {
    let sum=0
    for(let i=1; i<Number.MAX_VALUE; i++)
    {
        sum+=ticket*(perc**i)

        if(Math.ceil(card+sum)<ticket*i)
        return i
    }
}

console.log(movie(500, 15, 0.9))
