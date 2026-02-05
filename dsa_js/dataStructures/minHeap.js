class minHeap{
    constructor(n){
        this.capacity = n
        this.heapArray = new Array(this.capacity)
        this.current_capacity_size = 0
    }

    swap(arr,a,b){
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }

    parent(key){
        return (key-1)/2
    }

    leftChild(key){
        return 2 * key+1
    }

    rightChild(key){
        return 2 * key+2
    }

    insert(key){
        if(this.capacity == this.current_capacity_size){
            return false
        }
        let i = this.current_capacity_size
        this.heapArray[i] = key
        this.current_capacity_size++

        while (i != 0 && this.heapArray[i] < this.heapArray[this.parent(i)]) {
            this.swap(this.heapArray,i,this.parent(i))
            i = this.parent(i)
        }

        return true
    }

    printHeap(){
        for (let i = 0; i < this.current_capacity_size; i++) {
            console.log(" "+this.heapArray[i])
            document.getElementById("minh").textContent += this.heapArray[i] + " "
        }
    }
}

m = new minHeap()
console.log("Binary Heap - Min Heap")
m.insert(10)
m.insert(5)
m.insert(20)
m.insert(3)
m.insert(8)
m.printHeap()