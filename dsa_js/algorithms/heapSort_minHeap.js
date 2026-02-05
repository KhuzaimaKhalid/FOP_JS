class heapSort_minHeap{
    heapify(arr,n,i){
        let smallest = i
        let l = 2*i+1
        let r = 2*i+2

        if(l < n && arr[l] < arr[smallest]){
            smallest = l
        }

        if(r < n && arr[r] < arr[smallest]){
            smallest = r
        }

        if(smallest != i){
            let temp = arr[i]
            arr[i] = arr[smallest]
            arr[smallest] = temp
            this.heapify(arr,n,smallest)
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
             document.getElementById("hsmin").textContent += arr[i] + " "
        }
    }
}

h = new heapSort_minHeap()
console.log("Heap Sort - Min Heap")
let arr7 = [9, 4, 3, 8, 10, 2, 5]
h.heapSort(arr7)
h.printArray(arr7)