let numbers = [1,2,3,4,5,6,7]

function even(n){
    return n % 2 === 0
}

function odd(n){
    return n%2 !== 0
}

let e = numbers.filter(even)
let o = numbers.filter(odd)
console.log(e)
console.log(o)

const ages = [32, 33, 16, 40];

function isAdult(age){
    return age >= 18
}

function isChile(age){
    return age < 18
}

let a = ages.filter(isAdult)
let b = ages.filter(isChile)
console.log(a)
console.log(b)

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange','pomegrante','coconut'];

function shortWords(f){
    return f.length <= 6
}

function longWords(f){
    return f.length > 6
}

let s = fruits.filter(shortWords)
let l = fruits.filter(longWords)
console.log(s)
console.log(l)