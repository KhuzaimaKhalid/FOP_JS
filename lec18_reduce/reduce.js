let prices = [10,5,50,100,25];

const total = prices.reduce(sum)

function sum (accumulator, num){
    return accumulator + num;
}

console.log(total); 

let grades = [90, 98, 89, 70, 70, 86, 94];

function getMax(accumulator, num){
    return Math.max(accumulator, num);
}

function getMin(accumulator, num){
    return Math.min(accumulator, num);
}

const max = grades.reduce(getMax);
const min = grades.reduce(getMin);
console.log(max)
console.log(min)