class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }

    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth
        } else{
            console.error("Width must be positive")
        }
    }
    set height(newheight){
        if(newheight > 0){
            this._height= newheight
        } else{
            console.error("height must be positive")
        }
    }
    get width(){
        return this._width
    }
    get height(){
        return this._height
    }
    get area(){
        return this.width * this.height
    }
}
let rect = new Rectangle(10,20)
console.log(rect.area) 
