class sll {
    Node = class {
        constructor(data) {
            this.data = data
            this.next = null
        }
    }

    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.head === null
    }

    insertAtBeginning(data) {
        const newNode = new this.Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    insertAtEnd(data) {
        const newNode = new this.Node(data)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let temp = this.head
            while (temp.next !== null) {
                temp = temp.next
            }
            temp.next = newNode
        }
        this.size++
    }

    insertAtPosition(data, pos) {
        if (this.isEmpty()) {
            console.log("list is Empty!")
            return;
        }
        if (pos < 0 || pos > this.size) {
            console.log("Invalid Position!")
            return;
        }

        let temp = this.head
        let j = 0
        while (j < pos - 1) {
            temp = temp.next
            j++;
        }
        const newNode =  new this.Node(data)
        newNode.next = temp.next
        temp.next = newNode
    }

    deleteFirst() {
        if (this.isEmpty()) {
            console.log("list is Empty!")
            return;
        }
        this.head = this.head.next
    }

    deleteLast() {
        if (this.isEmpty()) {
            console.log("list is Empty!")
            return;
        }
        if (this.head.next === null) {
            console.log("Only one Node")
            this.head = null
            return;
        }

        let temp = this.head
        while (temp.next.next != null) {
            temp = temp.next;
        }

        temp.next = null
    }

    search(data) {
        if (this.isEmpty()) {
            console.log("list is empty!")
            return;
        }
        let temp = this.head
        let pos = 0
        while (temp.next != null) {
            if (temp.data === data) {
                console.log("data found at position = " + pos)
                return;
            }
            temp = temp.next
            pos++;
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log("list is Empty!")
            return
        }
    
        const h2 = document.getElementById("sllh2")
        if (!h2) return
    
        h2.textContent = ""
        let node = this.head
        while (node !== null) {
            console.log(node.data)
            h2.textContent += node.data + " "
            node = node.next
        }
    }
    

}

sll = new sll()
console.log("Singly Linked List")
sll.insertAtEnd(10)
sll.insertAtEnd(20)
sll.insertAtBeginning(5)
sll.insertAtPosition(15, 2)
sll.display()
sll.search(15)
console.log("*************")
sll.deleteFirst()
sll.display()
console.log("*************")
sll.deleteLast()
sll.display()