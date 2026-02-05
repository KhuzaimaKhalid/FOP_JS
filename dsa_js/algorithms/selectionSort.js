class selectionSort{
    SelectionSort(arr){
        let n = arr.length

        for (let i = 0; i < n; i++) {
            let min_idx = i
            for (let j = i+1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                    min_idx = j
                } 
            }

            let temp = arr[min_idx]
            arr[min_idx] = arr[i]
            arr[i] = temp
            
        }
    }

    printArray(arr){
        let n = arr.length
        for (let i = 0; i < n; i++) {
            console.log(arr[i]+" ")
             document.getElementById("ss").textContent += arr[i] + " "
        }
    }
}

s = new selectionSort()
console.log("Selection Sort")
let arr1 = [64, 25, 12, 22, 11]
s.SelectionSort(arr1)
s.printArray(arr1)