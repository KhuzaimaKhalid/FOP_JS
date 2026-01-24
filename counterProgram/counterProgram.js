decreeasebtn = document.getElementById("decreaseBtn")
increasebtn = document.getElementById("increaseBtn")
reset = document.getElementById("resetBtn")
countLabel = document.getElementById("countLabel")
let count = 0;

decreeasebtn.onclick = function() {
    count -= 1
    countLabel.textContent = count
}

increasebtn.onclick = function(){
    count += 1
    countLabel.textContent = count
}

reset.onclick = function(){
    count = 0
    countLabel.textContent = count
}