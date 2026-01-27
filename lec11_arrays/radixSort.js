function getMax(arr, n){
    let max = arr[0]
    for(let i = 0; i < n; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

function countingSort(arr, n, exp){
    let output = new Array(n)
    let count = new Array(10).fill(0)

    for(let i = 0; i < n; i++){
        let digit = Math.floor((arr[i]/exp) % 10)
        count[digit]++
    }
    for(let i = 1; i < 10; i++){
        count[i] = count[i] + count[i-1]
    }
    for(let i = n-1; i >= 0; i--){
        let digit = Math.floor((arr[i]/exp) % 10)
        output[count[digit]-1] = arr[i]
        count[digit]--
    }
    for(let i = 0; i < n; i++){
        arr[i] = output[i]
    }
}

function radixSort(arr, n){
    let m = getMax(arr,n)
    for(let exp = 1; Math.floor(m/exp) > 0; exp *= 10){
        countingSort(arr,n,exp)
    }
}

let arr = [170, 45, 75, 90, 802, 24, 2, 66]
let n = arr.length

radixSort(arr,n)

for (let i = 0; i < n; i++) {
    console.log(arr[i])
}

function binarySearch(arr,target){
    let low = 0
    let high = arr.length-1

    while(low <= high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid] < target){
            low = mid+1
        } else if(arr[mid] > target){
            high = mid-1
        } else if(arr[mid] === target){
            return mid
        }
    }
    return -1
}

console.log(binarySearch(arr,75))