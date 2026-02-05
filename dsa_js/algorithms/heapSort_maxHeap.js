class heapSort_maxHeap{
    heapify(arr,n,i){
        let largest = i
        let l = 2*i+1
        let r = 2*i+2

        if(l < n && arr[l] > arr[largest]){
            largest = l
        }

        if(r < n && arr[r] > arr[largest]){
            largest = r
        }

        if(largest != i){
            let temp = arr[i]
            arr[i] = arr[largest]
            arr[largest] = temp
            this.heapify(arr,n,largest)
        }
    }

    heapSort(arr){
        let n = arr.length

        for (let i = Math.floor(n/2)-1; i >= 0; i--) {
            this.heapify(arr,n,i)
        }

        for (let i = n-1; i > 0; i--) {
            let temp = arr[0]
            arr[0] = arr[i]
            arr[i] = temp
            this.heapify(arr,i,0)
        }
    }

    printArray(arr){
        let n = arr.length
        for (let i = 0; i < n; i++) {
            console.log(arr[i]+" ")
             document.getElementById("hsmax").textContent += arr[i] + " "
        }
    }
}

h = new heapSort_maxHeap()
console.log("Heap Sort - Max Heap")
let arr6 = [9, 4, 3, 8, 10, 2, 5]
h.heapSort(arr6)
h.printArray(arr6)