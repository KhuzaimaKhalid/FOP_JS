// let username = window.prompt("Enter your name: ")
// console.log(username)

let username

document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("myText").value 
    console.log(username)
    document.getElementById("myh1").textContent = `Hello ${username}`
}