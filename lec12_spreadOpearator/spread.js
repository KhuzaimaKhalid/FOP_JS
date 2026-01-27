let fruits = ["apple", "banana", "cherry"]
let vegetables = ["carrot", "broccoli", "spinach"]

let foods = [...fruits, ...vegetables, "eggs","milk"]
console.log(foods)

let num = [3, 5, 1, 8, 2]
console.log(...num)
console.log(Math.max(...num))
console.log(Math.min(...num))