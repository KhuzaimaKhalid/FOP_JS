class queueUsingCircularArray{
    constructor(){
        this.front = -1
        this.rear = -1
        this.count = 0
        this.arr = new Array(10)
    }

    enqueue(data){
        if(this.front == -1){
            this.front++
        }
        if(this.count + 1 == this.arr.length){
            console.log("Queue Overflow")
            return
        }

        this.rear = (this.rear+1) % this.arr.length
        this.arr[this.rear] = data
        this.count++

    }

    dequeue(){
        let temp = this.arr[this.front]
        this.front = (this.front+1) % this.arr.length
        this.count--
        return temp
    }

    print() {
        const h2 = document.getElementById("qucah2")
        h2.textContent = ""

        if (this.count === 0) {
            console.log("Queue is empty")
            return
        }

        let i = this.front
        let printed = 0

        while (printed < this.count) {
            console.log(this.arr[i])
            h2.textContent += this.arr[i] + " "
            i = (i + 1) % this.arr.length
            printed++
        }
    }
}

q = new queueUsingCircularArray()
console.log("circular array queue")
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.print()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()