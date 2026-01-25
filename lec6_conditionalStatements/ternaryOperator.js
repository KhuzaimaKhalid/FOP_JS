let age1 = 12
let message = age1 > 18 ? "you are an adult" : "you are not an adult"
console.log(message)

let time = 9
let greeting = time < 12 ? "Good Morning" : "Good afternoon"
console.log(greeting)

let price = 120
let discount = price >= 100 ? 10 : 0
console.log(`Toal price = $${price - price * (discount/100)}`)

const mytext = document.getElementById("mytext")
const mysubmit = document.getElementById("mysubmit")
const result = document.getElementById("result")

let age = 0

mysubmit.onclick = function(){
    age = mytext.value 
    age = Number(age)

    let message = (age >= 18 && age <= 80) ? "you are eligibe to drive"
                : (age >= 80 ) ? "you are senior citizen, you are not eligible to drive"
                : (age >= 12 && age < 18) ? "you are a teenager, you are not eligible to drive"
                : (age >= 0 && age < 12) ? "you are a child, you are not eligible to drive"
                : "please enter a valid age"
                result.textContent = message
}

