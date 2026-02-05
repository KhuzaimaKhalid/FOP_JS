class radixSort{
    getMax(arr,n){
        let max = arr[0]
        for (let i = 0; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
            
        }

        return max
    }

    countSort(arr,n,exp){
        let output = new Array(n)
        let count = new Array(10).fill(0)

        for (let i = 0; i < 10; i++) {
            let digit = Math.floor(arr[i]/exp) % 10
            count[digit]++
        }

        for (let i = 1; i < 10; i++) {
            count[i] = count[i] + count[i-1]
        }

        for(let i = n-1; i >= 0; i--){
            let digit = Math.floor(arr[i]/exp) % 10
            output[count[digit]-1] = arr[i]
            count[digit]--
        }

        for (let i = 0; i < n; i++) {
            arr[i] = output[i] 
        }
    }

    RadixSort(arr, n){
        let m = this.getMax(arr,n)
        for (let exp = 1; m/exp > 0; exp *= 10) {
            this.countSort(arr,n,exp)  
        }
    }

    printArray(arr){
        let n = arr.length
        for (let i = 0; i < n; i++) {
            console.log(arr[i]+" ")
             document.getElementById("rs").textContent += arr[i] + " "
        }
    }
}

r = new radixSort()
console.log("Radix Sort")
let arr5 = [170,45,75,90,802,24,2,66]
let n = arr5.length
r.RadixSort(arr5,n)
r.printArray(arr5)