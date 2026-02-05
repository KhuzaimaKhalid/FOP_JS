class insertionSort{
    InsertionSort(arr){
        let n = arr.length
        for (let i = 1; i < n; i++) {
            let key = arr[i]
            let j = i-1
            while(j >= 0 && arr[j] > key){
                arr[j+1] = arr[j]
                j = j-1
            }
            arr[j+1] = key
        }
    }

    printArray(arr){
        let n = arr.length
        for (let i = 0; i < n; i++) {
            console.log(arr[i]+" ")
             document.getElementById("is").textContent += arr[i] + " "
        }
    }
}

i = new insertionSort()
console.log("Insertion Sort")
let arr2 = [42,33,23,74,44]
i.InsertionSort(arr2)
i.printArray(arr2)