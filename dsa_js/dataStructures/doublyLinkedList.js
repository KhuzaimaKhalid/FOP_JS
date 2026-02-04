class dll{
    Node = class{
        constructor(data){
            this.data = data
            this.next = null
            this.prev = null
        }
    }

    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    insertFirst(data){
        const newNode = new this.Node(data)

        if(this.head == null){
            newNode.next = null
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    insertLast(data){
        const newNode = new this.Node(data)
        
        if(this.tail == null){
            newNode.prev = null
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    insertPosition(data, pos){
        let temp = this.head
        let j = 0
        while(j < pos-1){
            if(temp.next == null || pos < 0){
                console.log("list size is less than pos")
            }
            temp = temp.next
            j++
        }
        const newNode = new this.Node(data)
        newNode.next = temp.next
        newNode.prev = temp
        if (temp.next !== null) {
            temp.next.prev = newNode
        } else {
            this.tail = newNode
        }
    
        temp.next = newNode
        this.size++
    }

    deleteFirst(){
        if(this.head == null){
            console.log("Can't delete: list empty")
            return
        }
        this.head = this.head.next
        if(this.head != null){
            this.head.prev = null
        } else{
            this.tail = null
        }
    }

    deleteLast(){
        if(this.tail == null){
            console.log("Can't delete: list empty")
            return
        }
        this.tail = this.tail.prev
        if(this.tail != null){
            this.tail.next = null
        } else{
            this.head = null
        }
    }

    deletePosition(pos){
        let temp = this.head
        let j = 0
        while(j < pos-1){
            temp = temp.next
            j++
        }

    temp.prev.next = temp.next
    temp.next.prev = temp.prev

    this.size--
    }

    printList(){
        let temp = this.head
        let res = ""
        while(temp != null){
            res += temp.data + " "
            temp = temp.next
        }
        console.log(res)
        document.getElementById("dllh2").textContent = res
    }

    search(data){
        let pos = -1
        if(this.head == null){
            console.log("List is empty")
            return pos
        }
        pos = 0
        let currNode = this.head
        while (currNode != null) {
            if(data == currNode.data){
                console.log("data found at pos = "+pos)
                return pos
            }
            currNode =currNode.next
            pos++
        }
        console.log("Data not in list")
        return pos
    }
}

dll = new dll()
dll.insertLast(10)
dll.insertLast(20)
dll.insertLast(30)
dll.insertFirst(5)
dll.insertPosition(15, 2)
dll.printList()
dll.deleteFirst()
dll.printList()
dll.deleteLast()
dll.printList()
dll.deletePosition(2)
dll.printList()