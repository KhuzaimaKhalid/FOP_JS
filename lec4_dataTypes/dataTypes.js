let age = window.prompt("Enter your age: ")
age = Number(age)
age += 1

console.log(age)

let x = "pizza"
let y = "pizza"
let z = "pizza"

x = Number(x)
y = String(y)
z = Boolean(z)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

let radius;
const PI = 3.14159
let circumference

document.getElementById("mybtn").onclick = function() {
    radius = document.getElementById("mytext").value 
    radius = Number(radius)
    circumference = 2 * PI * radius
    console.log(`Circumference =  ${circumference}`)
    document.getElementById("myh3").textContent = circumference + " cm"
}

