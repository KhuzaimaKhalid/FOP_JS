class stackUsingLinkedList {
    Node = class {
        constructor(data) {
            this.next = null
            this.data = data
        }
    }

    constructor() {
        this.count = 0
        this.top = null
    }

    push(data) {
        let newNode = new this.Node(data)

        if (this.top == null) {
            newNode.next = null
        } else {
            newNode.next = this.top
        }

        this.top = newNode
        this.count++
    }

    pop() {

        if (this.count == 0) {
            console.log("Stack Underflow")
            return -1
        } else {
            let current = this.top.data
            this.top = this.top.next
            this.count--
            return current
        }
    }

    display() {
        const h2 = document.getElementById("sulh2")
        h2.textContent = ""

        let temp = this.top

        while (temp !== null) {
            console.log(temp.data)
            h2.textContent += temp.data + " "
            temp = temp.next
        }
    }

}

s = new stackUsingLinkedList()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.display()
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()