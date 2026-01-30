function createCounter(){
    let count = 0
    
    function increaseCounter() {
        count++;
        console.log(count)
    }

    function decreaseCounter() {
        count--;
        console.log(count)
    }

    function getCounter(){
        return count
    }
    return {increaseCounter,decreaseCounter,getCounter}
}
const c = createCounter()
c.increaseCounter() 
c.increaseCounter()
console.log(c.getCounter())
c.decreaseCounter()
console.log(c.getCounter())
c.decreaseCounter()
console.log(c.getCounter())
for(let i=0;i<10;i++){
    c.increaseCounter()
}
for(let i=0;i<5;i++){
    c.decreaseCounter()
}
console.log(c.getCounter())

function createGame(){
    let score = 0

    function increaseScore(){
        score += 1
        console.log(`Your score is ${score}`)
    }

    function decreaseScore(){
        score -= 1
        console.log(`Your score is ${score}`)
    }

    function getScore(){
        return score
    }
    return {increaseScore,decreaseScore,getScore}
}

const game = createGame()
game.increaseScore()
game.increaseScore()
game.decreaseScore()
for (let i = 0; i < 20; i++) {
    game.increaseScore()
}
for (let i = 0; i < 8; i++) {
    game.decreaseScore()
}
console.log(game.getScore())