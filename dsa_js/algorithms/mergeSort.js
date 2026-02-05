class mergeSort{
    merge(left,right){
        let result = new Array(left.length+right.length)
        let i = 0, j = 0, k = 0
        while(i < left.length && j < right.length){
            if(left[i] <= right[j]){
                result[k++] = left[i++]
            } else{
                result[k++] = right[j++]
            }
        }

        while (i < left.length) {
            result[k++] = left[i++]
        }
        while (j < right.length) {
            result[k++] = right[j++]
        }

        return result
    }

    MergeSort(arr){
        let n = arr.length
        if(n < 2){
            return arr
        }
        let mid = Math.floor(n/2)

        let left = arr.slice(0, mid)
        let right = arr.slice(mid,n)

        return this.merge(this.MergeSort(left),this.MergeSort(right))
    }

    printArray(arr){
        let n = arr.length
        for (let i = 0; i < n; i++) {
            console.log(arr[i]+" ")
             document.getElementById("ms").textContent += arr[i] + " "
        }
    }
}

m = new mergeSort()
console.log("Merge Sort")
let arr4 = [18,26,32,6,43,15,9,1,22,26,19,55,37,43,99,5]
let sort = m.MergeSort(arr4)
m.printArray(sort)