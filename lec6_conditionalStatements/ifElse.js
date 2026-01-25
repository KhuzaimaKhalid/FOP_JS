const mytext = document.getElementById("mytext")
const mysubmit = document.getElementById("mysubmit")
const result = document.getElementById("result")

let age = 0

mysubmit.onclick = function(){
    age = mytext.value 
    age = Number(age)

    if(age >= 18 ){
        if(age >= 80){
            result.textContent = "you are senior citizen, you are not eligible to drive"
        } else{
        result.textContent = "you are eligible to drive"
        }
    } else if( age < 18 && age >= 12){
        result.textContent = "you are a teenager, you are not eligible to drive"
    } else if (age < 12 && age >= 0){
        result.textContent = "you are a child, you are not eligible to drive"
    }  else{
        result.textContent = "please enter a valid age"
    }
}