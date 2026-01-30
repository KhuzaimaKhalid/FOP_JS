// setTimeout(()=>{
//     console.log("Task 1")
// },3000)

// console.log("Task 2")
// console.log("Task 3")
// console.log("Task 4")

function f1(callback) {
    setTimeout(() => {
        console.log("Task 1")
        callback()
    }, 3000)
}

function f2() {
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
}
f1(f2)