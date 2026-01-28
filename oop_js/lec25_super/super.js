class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`${this.name} moved at speed: ${speed}`);
    }
}

class rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age)
        this.runspeed = runspeed
    }
    move(){
        super.move(this.runspeed)
    }
    run(){
        console.log(`${this.name} is running at speed: ${this.runspeed}`);
    }
}

class fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age)
        this.swimspeed = swimspeed
    }
    move(){
        super.move(this.swimspeed)
    }
    swim(){
        console.log(`${this.name} is swimming at speed: ${this.swimspeed}`);
    }
}

class hawk extends Animal{
    constructor(name,age,flyspeed){
        super(name,age)
        this.flyspeed = flyspeed
    }
    move(){
        super.move(this.flyspeed)
    }
    fly(){
        console.log(`${this.name} is flying at speed: ${this.flyspeed}`);
    }
}

let r1 = new rabbit("Bunny",2,10);
r1.move()
r1.run()
let f1 = new fish("Nemo",1,5);
f1.move()
f1.swim()
let h1 = new hawk("Eagle",4,20);
h1.move()
h1.fly()