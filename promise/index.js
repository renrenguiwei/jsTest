// let p1 = new Promise((resolve, reject) => {
//   // foo.bar()
//   resolve('Claus Wong')
// })
//
// let p2 = Promise.resolve('Claus Wong')
// let p3 = Promise.resolve(p2)
//
// console.log(p3 === p2)

// p
//   .then(res => console.log(res))
//   .catch(err => console.log('error: ' + err))

// p
//   .then(
//     function fulfilled(res) {
//       foo.bar()
//       console.log(res)
//     },
//     function rejected(err) {
//       console.log('error2: ' + err)
//     }
//   )
//   .catch(err => console.log('catch error: ' + err))

// let p = {
//   then: function (cb, errcb) {
//     cb(42)
//     errcb('Death Wink')
//   }
// }
//
// Promise.resolve(p)
//   .then(
//     function fulfilled(val) {
//       console.log(val)
//     },
//     function rejected(err) {
//       console.log(err)
//     }
//   )

// p
//   .then (
//     function fulfilled(val) {
//       console.log(val)
//     },
//     function rejected(err) {
//       console.log(err)
//     }
//   )

// var p = Promise.resolve(21)
// var p2 = p.then(function (v) {
//   console.log(v)
//   return v * 2
// })
//
// p2.then(function (v) {
//   console.log(v)
// })

// p
//   .then(v => v * 2)
//   .then(v => console.log(v))

// p
//   .then(v => {
//     console.log(v)
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(v * 2)
//       }, 1000)
//     })
//   })
//   .then(v => console.log(v))

/**
 * @作用
 * 1. time 值约束
 * 2. return promise
 * 3. 执行resolve，不带参数
 */
/*
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, time)
  })
}

delay(1000)
  .then(() => {
    console.log('step2 (after 1000ms)')
    return delay(1000)
  })
  .then(() => {
    console.log('step3 (after 1000ms)')
    return delay(1000)
  })
  .then(() => {
    console.log('step4 (after 1000ms)')
    return delay(1000)
  })
  .then(() => {
    console.log('step5 (after 1000ms)')
  })
  .catch((e) => {
    console.log(e + ' result')
  })
 */

// var p = new Promise((resolve, reject) => {
//   // foo.bar()
//   resolve(42)
// })

// p
//   .then(
//     function fulfilled() {
//       console.log('success')
//     },
//     function rejected(e) {
//       console.log('rejected: ' + e)
//     }
  // (val) => {
  //   console.log(val)
  // },
  // (e) => {
  //   console.log(e)
  // }
// )
  // .catch((e) => {
  //   console.log('catch: ' + e)
  // })

// 假的thenable对象
// var rejectedTh = {
//   then: function(resolved, rejected) {
//     rejected('Oops')
//   }
// }

// var rejectedPr = Promise.resolve(rejectedTh)

// var rejectedPr = new Promise( function(resolve,reject){
//   // 用一个被拒绝的promise完成这个promise
//   resolve( Promise.reject( "Oops" ) ); } );
//
// rejectedPr.then(
//   function fulfilled(){
//     // 永远不会到达这里
//   },
//   function rejected(err){
//     console.log( err ); // "Oops"
//   }
// );

// function foo() {
//   setTimeout(() => {
//     bar.foo()
//   }, 1000)
// }
//
// try {
//   foo()
// } catch (err) {
//   console.log('err: ' + err)
// }

// function foo(cb) {
//   try {
//     var x = biz.bar()
//     cb(null, x) // 成功
//   } catch(err) {
//     cb(err)
//   }
// }
// foo(function (err, val) {
//   if (err) {
//     console.log('err: ' + err)
//   } else {
//     console.log('val: ' + val)
//   }
// })

// var p = new Promise((resolve, reject) => {
//   resolve(42)
// })
//
// p
//   .then(
//     function fulfilled(msg) {
//       console.log(msg.toLowerCase())
//     },
//     function rejected(err) {
//       console.log(err)
//     }
//   )
//   .catch((err) => {
//     console.log('catch err: ' + err)
//   })


/**
 * @promise 变体
 * 1. Promise.all
 */

// 1. Promise.all
let async1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('3000ms后返回的msg')
    reject('3000ms后返回的msg')
  }, 3000)
})
let async2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('4000ms后返回的msg')
  }, 4000)
})

Promise.all([async1, async2])
  .then(msg => {
    console.log(msg)
  })
  .catch(err => {
    console.log('catch err: ' + err)
  })












