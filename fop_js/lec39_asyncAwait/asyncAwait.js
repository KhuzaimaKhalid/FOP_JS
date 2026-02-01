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

async function result(){
    try{
        const walk = await walkDog()
        console.log(walk);
        const sleep = await sleeping()
        console.log(sleep)
        const eat = await eating()
        console.log(eat)
    } catch(error){
        console.error(error)
    }
    console.log("All tasks are done!")
}
result()

async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest()
      req.open('GET', "large.docx")
      req.responseType = "arraybuffer" 
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response)
        } else {
          resolve("File not Found")
        }
      };
      req.send()
    });
    let response = await myPromise
    let result = await mammoth.extractRawText({arrayBuffer: response})
    document.getElementById("myp1").textContent = result.value
  }
  
  getFile();