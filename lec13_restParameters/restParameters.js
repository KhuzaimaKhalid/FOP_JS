function sum(...numbers){
    let result = 0
    for (const number of numbers) {
        result += number
    }
    return result
}
function average(...numbers){
    let result = 0
    for(const number of numbers){
        result += number
    }
    return result/ numbers.length
}

console.log(sum(1,2,3,4,5))
console.log(average(1,2,3,4,5))


function combineStrings(...string){
    return string.join(" ")
}
console.log(combineStrings("Mr","Khuzaima","Khalid"))