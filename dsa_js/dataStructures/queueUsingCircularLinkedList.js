class queueUsingCircularLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.count = 0
    }

    Node = class{
        constructor(data){
            this.next = null
            this.data = data
        }
    }

    enqueue(data){
        let newNode = new this.Node(data)

        if(this.head == null){
            this.head = newNode
            this.tail = newNode
            this.tail.next = this.head
            this.count++
        } else{
            this.tail.next = newNode
            this.tail = newNode
            this.tail.next = this.head
            this.count++
        }
    }

    dequeue(){
        if(this.head == null){
            console.log("Queue Underflow")
            return -1
        }

        let data = this.head.data

        if(this.head !== this.tail){
            this.head = this.head.next
            this.tail.next = this.head
        } else{
            this.head = null
            this.tail = null
        }

        this.count--
        return data
    }

    print() {
        const h2 = document.getElementById("quclh2")
        h2.textContent = ""

        if (this.head === null) {
            console.log("Queue is empty")
            return
        }

        let temp = this.head
        let printed = 0

        while (printed < this.count) {
            console.log(temp.data)
            h2.textContent += temp.data + " "
            temp = temp.next
            printed++
        }
    }
}

q = new queueUsingCircularLinkedList()
console.log("queue using circular linked list")
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.enqueue(60)
q.print()
console.log("*********")
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()