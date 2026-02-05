class queueUsingLinkedList{
    Node = class{
        constructor(data){
            this.next = null
            this.data = data
        }
    }

    constructor(){
        this.head = null
        this.tail = null
        this.count = 0
    }

    enqueue(data){
        let newNode = new this.Node(data)
        
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
            return
        } else{
            this.tail.next = newNode
            this.tail = newNode
            this.count++
        }
    }

    dequeue(){
        if(this.head == null){
            console.log("Queue Underflow")
            return -1
        }
        
        let temp = this.head.data
        if(this.head != null){
            this.head = this.head.next
        } else{
            this.head = null
            this.tail = null
        }
        this.count --
        return temp
    }

    print() {
        const h2 = document.getElementById("qulh2")
        h2.textContent = ""

        if (this.head === null) {
            console.log("Queue is empty")
            return
        }

        let temp = this.head
        while (temp !== null) {
            console.log(temp.data)
            h2.textContent += temp.data + " "
            temp = temp.next
        }
    }
}

q = new queueUsingLinkedList()
console.log("queue using linked list")
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.print()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()