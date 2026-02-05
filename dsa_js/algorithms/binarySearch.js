class binarySearch{
    BinarySearch(arr,target){
        let low = 0
        let high = arr.length - 1

        while(low <= high){
            let mid = Math.floor((low+high)/2)
            if(target < arr[mid]){
                high = mid - 1
            } else if(target > arr[mid]){
                low = mid + 1
            } else if(target === arr[mid]){
                return mid
            }
        }
        return -1
    }

    printArray(arr){
        let n = arr.length
        for (let i = 0; i < n; i++) {
            console.log(arr[i]+" ")
             document.getElementById("bss").textContent += arr[i] + " "
        }
    }
}

b = new binarySearch()
console.log("Binary Search")
let arr9 = [2,4,9,11,13]
let y = b.BinarySearch(arr9,9)
console.log(y)
console.log("Printing Array")
b.printArray(arr9)
document.getElementById("bsd").textContent = `element found = ${y}`