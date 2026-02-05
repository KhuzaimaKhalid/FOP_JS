class stackUsingArray{

    constructor(size){
        this.top = -1
        this.arr = new Array(size)
    }

    push(data){
        if(this.top === this.arr.length - 1){
            console.log("Stack Overflow")
            return
        } else{
            this.arr[++this.top] = data
        }
    }

    pop(){
        if(this.top < 0){
            console.log("Stack Underflow")
            return -1
        } else{
            return this.arr[this.top--]
        }
    }

    print() {
        const h2 = document.getElementById("suah2")
        h2.textContent = ""

        for (let i = this.top; i >= 0; i--) {
            console.log(this.arr[i])
            h2.textContent += this.arr[i] + " "
        }
    }
}

s = new stackUsingArray(5)
console.log("Stack Using Array")
s.push(5)
s.push(4)
s.push(3)
s.push(2)
s.push(1)
s.print()
s.push(9)
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())
console.log(s.pop())