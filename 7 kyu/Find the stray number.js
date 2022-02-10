function stray(numbers) {
    numbers = numbers.sort(function (a, b) {
        return a - b
    })
    let index = Math.floor(numbers.length / 2)
    return numbers[0] == numbers[index] ? numbers[numbers.length - 1] : numbers[0]
}

console.log(stray([1, 1, 2]))
