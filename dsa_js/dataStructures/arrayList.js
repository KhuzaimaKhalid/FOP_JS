class ArrayList{

    constructor(i=0){
        this.arr = []
        this.listSize = 0
    }


    indexOf(c){
        for (let i = 0; i < this.listSize; i++){
            if(this.arr[i] === c){
                return i
            }
        }
        return -1
    }

    erase(index){
        if(index < 0 || index >= this.listSize){
            console.log("error")
            return 'x'
        }
        let c = this.arr[index]
        for(let i = 0; i < this.listSize-1; i++){
            this.arr[i] = this.arr[i+1]
        }
        this.listSize--
        return c
    }

    insert(index,c){
        if(index < 0 || index > this.listSize){
            console.log("error")
            return
        }
        if(this.listSize + 1 == this.arr.length){
            this.sizeDouble()
            return
        }
        for (let i = this.listSize; i > index; i--) {
            this.arr[i] = this.arr[i-1]
        }
        this.arr[index] = c
        this.listSize++
    }

    sizeDouble(){
        let s = this.arr.length
        let newArr = new Array(s*2)
        for (let i = 0; i < this.arr.length; i++) {
            newArr[i] = this.arr[i]
        }
        this.arr = newArr
    }

    print() {
        const h2 = document.getElementById("myh2");
        h2.textContent = "";
    
        for (let i = 0; i < this.listSize; i++) {
            console.log(this.arr[i]);
            h2.textContent += this.arr[i] + " ";
        }
    }

}   

arr = new ArrayList()
arr.insert(0,5)
arr.insert(1,10)
arr.insert(2,15)
arr.insert(3,7)
arr.insert(4,17)
arr.insert(5,29)
arr.print()
console.log(arr.indexOf(15))
console.log("*********")
arr.erase(0)
arr.print()
arr.erase(1)
arr.print()
arr.erase(2)
arr.print()
arr.erase(3)
arr.print()
arr.erase(4)
arr.print()
arr.erase(2)
arr.print()
console.log(arr.indexOf(17))
console.log(arr.indexOf(100))
arr.erase(0)
arr.print()
arr.erase(0)
arr.print()
arr.erase(0)
arr.print()
arr.insert(0,50)
arr.insert(1,60)
arr.insert(2,33)
arr.insert(1,99)
arr.print()