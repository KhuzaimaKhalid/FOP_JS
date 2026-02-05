class linearSearch{
    linearSearch(arr,index,data){
        if(index == arr.length-1){
            return -1
        }
        if(arr[index] == data){
            return index
        }
        return this.linearSearch(arr,index+1,data)
    }

    printArray(arr){
        let n = arr.length
        for (let i = 0; i < n; i++) {
            console.log(arr[i]+" ")
             document.getElementById("ls").textContent += arr[i] + " "
        }
    }
}

l = new linearSearch()
console.log("Linear Search")
let arr8 = [2,4,9,11,13]
let x = l.linearSearch(arr8,0,11)
console.log(x)
console.log("Printing Array")
l.printArray(arr8)
document.getElementById("lsd").textContent = `element found = ${x}`