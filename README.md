# op-promise
learing about promise and write promise

## 1.Promise含义
所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。
Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。

## 2.Promise基本用法
```javascript
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
```

promise对象实现ajax操作
详见index.js

## 3.Promise方法
1. then
它的作用是为 Promise 实例添加状态改变时的回调函数then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。
2. catch
用于指定发生错误时的回调函数。
3. finally
用于指定不管 Promise 对象最后状态如何，都会执行的操作。
4. Promise.all()
Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
```javascript
const p = Promise.all([p1, p2, p3]);
```
5. Promise.race()
```javascript
const p = Promise.race([p1, p2, p3]);
```
只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

6. Promise.any()
该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

## 4.手写一个promise