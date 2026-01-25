let marks = window.prompt("enter your marks = ")
let grade

switch (true) {
    case marks >= 90 && marks <= 100:
        grade = "A"
        break;
    case marks >= 80:
        grade = "B"
        break;
    case marks >= 70:
        grade = "C"
        break;
    case marks >= 60:
        grade = "D"
        break;
    default:
        grade = "F"    
}

console.log(`you marks = ${marks} , your grade = ${grade}`)