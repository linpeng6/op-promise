//promise基本结构
let p = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(1)
    },1000)
})

p.then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})


//promise对象实现ajax操作
const ajaxPromise = function(url){
    const promise = new Promise(function(resolve, reject){
        const handler = function(){
            if(this.readyState !== 4){
                return;
            }
            if(this.status = 200){
                resolve(this.response);
            }else{
                reject(new Error(this.statusText));
            }
        }
        const client = new XMLHttpRequest();//创建异步对象
        client.open("GET",url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader("Accept", "application/json");
        client.send();
    })
    return promise;
}

ajaxPromise('/posts.json').then(res=>{
    console.log(res)
},err=>{
    console.log(err)
})