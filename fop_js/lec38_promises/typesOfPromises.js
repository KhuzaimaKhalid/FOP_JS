const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "King");
  });

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Queen");
  });

Promise.all([myPromise1, myPromise2]).then((values)=>{
    values.forEach((x)=>{
        console.log(x)
    })
})

function getData(){
    let {promise,resolve} = Promise.withResolvers()

    setTimeout(()=>{
        resolve("Data received successfully")
    },2000)

    return {promise,resolve}
}
const {promise,resolve} = getData()
promise.then((value)=>{
    console.log(value)
})