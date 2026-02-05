class bubbleSort{
    BubbleSort(arr,size){
        let temp
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            } 
        }
        for (let i = 0; i < size; i++) {
            console.log(arr[i]+" ")
            document.getElementById("bs").textContent += arr[i] + " "
        }
    }
}

b = new bubbleSort()
const arr = [5,1,4,2,8]
b.BubbleSort(arr,arr.length)