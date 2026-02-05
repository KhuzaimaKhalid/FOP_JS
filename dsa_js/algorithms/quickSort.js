class quickSort{
    QuickSort(arr,left,right){
        let index = this.partition(arr,left,right)
        if(left < index-1){
            this.QuickSort(arr,left,index-1)
        }
        if(right > index){
            this.QuickSort(arr,index,right)
        }
    }

    partition(arr,left,right){
        let i = left
        let j = right
        let temp

        let pivot = arr[Math.floor((left+right)/2)]
        while(i <= j){
            while(arr[i] < pivot){
                i++
            }
            while(arr[j] > pivot){
                j--
            }
            if(i <= j){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                i++
                j--
            }
        }
        return i
    }

    printArray(arr){
        let n = arr.length
        for (let i = 0; i < n; i++) {
            console.log(arr[i]+" ")
             document.getElementById("qs").textContent += arr[i] + " "
        }
    }
}

q = new quickSort()
console.log("Quick Sort")
let arr3 = [78,21,14,97,87,62,74,85,76,45,84,22]
q.QuickSort(arr3,0,arr3.length-1)
q.printArray(arr3)