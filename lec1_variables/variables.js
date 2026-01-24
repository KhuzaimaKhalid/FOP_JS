let x;
x=4
console.log(x)

let heading = "FOP JS"
let name = "Khuzaima"
let Food = "Biryani"
let gpa = 3.2

console.log(`Name = ${name}, favourite food = ${Food}, gpa = ${gpa}`)
console.log("Type of Name = " +typeof(name) + "  and Type of Favourite food = "+typeof(Food)+"and type of x = "+typeof(x)+" and type of gpa = "+typeof(gpa))
 
let isOnline = false;
console.log("Is Khuzaima Online ? = "+isOnline)

document.getElementById("myh1").textContent =  heading
document.getElementById("p1").textContent = `Name = ${name}`
document.getElementById("p2").textContent = `Favourite food = ${Food}`
document.getElementById("p3").textContent = `Is Khuzaima Online ? = ${isOnline}`
document.getElementById("p4").textContent = `GPA = ${gpa}`
