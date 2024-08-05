const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 1");
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("Promise Consumed")
});



new Promise(function(resolve, reject){
setTimeout(function(){
    console.log("Async Task 2");
    resolve();
},1000)
}).then(function(){
    console.log("Promise two Consumed")
});



const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Three");
        resolve({username: "Kunal", email: "kdagur36@gmail.com"});
    }, 1000)
})

promiseThree.then(function(data){
    console.log(data);
});


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true;
        if(!error){
            console.log("Async 4")
            resolve({username: "Kunal", email: "kdagur36@gmail.com"});
        }else{
            reject("ERROR: Something Went Wrong");
        }
    }, 1000);
});

promiseFour.then(function(data){
    console.log(data);
    return data.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("The promise is either rejected or resolved!");
})



const promiseFive = new Promise(function(reject, resolve){
    setTimeout(function() {
        let error = true;
        if(!error){
            console.log("Async 4")
            resolve({Course: "JS", email: "kdagur36@gmail.com"});
        }else{
            reject("ERROR: JS learning Went Wrong");
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const reponse = await promiseFive;
        console.log(reponse);
        
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();