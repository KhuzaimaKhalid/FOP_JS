function car(name,model,year,color) {
    this.name = name
    this.model = model
    this.year = year
    this.color = color
    this.drive = function(){
        console.log(`You drive the car: ${this.name}`)
    }
}
const car1 = new car("BMW","X5",2020,"Black")
const car2 = new car("Audi","A6",2019,"White")
const car3 = new car("Lamborghini","Huracan",2021,"Yellow")
console.log(car1)
console.log(car1.name)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
console.log(car2)
car2.drive()
console.log(car3)