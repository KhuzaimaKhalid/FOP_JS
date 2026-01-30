function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Dog walked");
            const dogwalked = true
            if(dogwalked){
                resolve("dog walked successfully");
            } else{
                reject("dog walking failed");
            }
        },2000);
    })
}

function sleeping(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Sleeping....");
            const dogwalked = true
            if(dogwalked){
                resolve("Sleep successfully");
            } else{
                reject("sleep failed");
            }
        },2000);
    })
}

function eating(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Eating....");
            const dogwalked = true
            if(dogwalked){
                resolve("eating successfully");
            } else{
                reject("eating failed");
            }
        },2000);
    })
}

walkDog().then((value)=>{
    console.log(value)
    return sleeping()
})
.then((value)=>{
    console.log(value)
    return eating()
})
.then((value)=>{
    console.log(value)
    console.log("All tasks completed successfully");
})
.catch((error)=>{
    console.error(error)
})