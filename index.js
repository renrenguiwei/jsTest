// let _ = require('lodash');
// const foo = [
//   {b: 11},
//   {b: 22},
//   {b: 33}
// ]
//
// const obj_foo = {
//   a: {
//     time: new Date()
//   },
//   b: 22,
//   c: 33
// }
//
// function foo_fun() {}
//
// let new_fun = new foo_fun()
// // 构造函数的 prototype 是否存在 实例的原型上
// console.log(new_fun instanceof foo_fun)
// console.log('实例：' + new_fun)
// console.log('构造函数' + foo_fun)

// const obj_foo_copy = _.cloneDeep(obj_foo)
// const obj_foo_copy = JSON.parse(JSON.stringify(obj_foo))
//
// console.log(obj_foo)
// console.log(obj_foo_copy)
// console.log(typeof obj_foo.a.time)
// console.log(Object.prototype.toString.call(obj_foo_copy.a.time))

// const fooClone = clone(obj_foo)
//
// function clone(obj) {
//   let copy = {};
//   for (let attr in obj) {
//     copy[attr] = typeof(obj[attr]) === 'object' ? clone(obj[attr]) : obj[attr]
//   }
//   return copy
// }


// const fooClone = _.cloneDeep(foo)
// const fooClone = JSON.parse(JSON.stringify(foo))
// fooClone.a.d = 'claus'
// console.log(obj_foo);
// console.log(fooClone);
// console.log(obj_foo.a === fooClone.a);


// var objects = [{ 'a': 1 }, { 'b': 2 }, { 'c': 3 }];
// // var shallows = objects.slice(0);
// var shallows = objects.concat();
//
// objects.pop(); //移除最后一个元素
// objects[0].a = 11111; // 修改第一个元素值
//
// console.log(objects);
// console.log(shallows);

// function list () {
//   console.log('arguemnts' + arguments);
//   // return Array.prototype.slice.call(arguments)
//   return Array.from([...new Set(arguments)])
// }
// console.log(list(1, 2, 3));

// let foo1 = foo.slice()
// let foo1 = JSON.parse(JSON.stringify(foo))
// foo1[0].b = 5042
// console.log(foo);
// console.log(foo1);
// console.log('foo-b: ' + foo[0].b);
// console.log('foo1-b: ' + foo1[0].b);

// let item = a[0]
// let newItem = Object.assign({}, item)
// newItem.b = 22
// console.log(a)
// console.log(item)
// console.log(newItem)
// console.log(newItem === item)
// const foo1 = foo.concat()
// let foo = Array.from(foo1)
// let foo = [...foo1]
// foo1[0]['b'] = 222
// console.log(foo)
// console.log(foo1)
// console.log(foo === foo1)

// var a = [1]
// var b = a
// console.log(a === b)

// function foo(str) {
//   eval(str)
//   console.log(a)
// }
//
// foo("var a = 2")
// console.log(a)

// function compileCode(src) {
//   src = 'with (exposeObj) {'+ src +'}'
//   return new Function('exposeObj', src)
// }
//
// console.dir(compileCode(1+1))


// const array1 = [];
// const reducer = (accumulator, currentValue, currentIndex, sourceArray) => {
//   console.log(accumulator, currentValue, currentIndex, sourceArray)
//   return accumulator + currentValue;
// }
//
// // 1 + 2 + 3 + 4
// // console.log(array1.reduce(reducer));
// // expected output: 10
//
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));

// var maxCallback = ( acc, cur ) => {
//   console.log(acc, cur)
//   return Math.max( acc.x, cur.x );
// }
// var maxCallback2 = ( max, cur ) => {
//   console.log(max, cur)
//   return Math.max( max, cur );
// }

// reduce() 没有初始值
// console.log([ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback )); // NaN
// console.log([ { x: 2 }, { x: 22 }            ].reduce( maxCallback )); // 22
// console.log([ { x: 2 }                       ].reduce( maxCallback )); // { x: 2 }
// console.log([                                ].reduce( maxCallback )); // TypeError

// map/reduce; 这是更好的方案，即使传入空数组或更大数组也可正常执行
// [ { x: 22 }, { x: 42 } ].map( el => el.x ).reduce( maxCallback2, -Infinity );

// let total = [1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0)
// console.log(total)

// let initialValue = 0
// let sum = [{x:1},{x:1},{x:1},{x:1}].reduce((acc, cur) => acc + cur.x, initialValue)
// console.log(sum)

// let flattened = [[1, 2],[1, 2],[1, 2],[1, 2]].reduce((acc, curr) => {
//   acc.splice(acc.length, 0, ...curr)
//   return acc
// }, [])
// console.log(flattened)

// let obj = {a: 1, b: 2, c: 3}
// let arr = [1, 2, 3, 4]
// for (let key in obj){
//   console.log('key : ' + key)
// }
// for (let val of arr){
//   console.log('val : ' + val)
// }


// let name = ['claus', 'claus', 'cleo', 'cleo', 'joseph', 'alan']
// let sumCount = name.reduce((acc, curr) => {
//   // if (acc[curr]) {
//   if (curr in acc) {
//     acc[curr]++
//   } else {
//     acc[curr] = 1
//   }
//   return acc
// }, {})
//
// console.log(sumCount)


// let people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 }
// ];
//
// // 用年龄分类数组
// function groupByProperty (people, property) {
//   return people.reduce((acc, curr) => {
//     let key = curr[property]
//     if (!acc[key]) acc[key] = []
//     acc[key].push(curr)
//     return acc
//   }, {})
// }
//
// let sortBypropertyRes = groupByProperty(people ,'age')
// console.log(sortBypropertyRes)
// var people = {
//   '21': [{ name: 'Alice', age: 21 }],
//   '20': [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ]
// };

// let a = [1,2,3,4]
// let x = 0
// let res = a.map(item => x += item)
// console.log(res)
// console.log(a)
// console.log(x)

// let metaArr = [1, 2, 3, 4, 1, 3, 5, 99, 99]
// let resArr = Array.from(new Set(metaArr))
// console.log(metaArr)
// console.log(resArr)

// 利用reduce实现数组去重
// let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// let myArray = [1,2,1,2,3,5,4,5,3,4,4,4,4];
// let resArray = myArray.sort().reduce((acc, curr) => {
//   // if (acc.indexOf(curr) === -1) acc.push(curr) // 普通索引键值去重
//   if (acc.length === 0 || acc[acc.length - 1] !== curr) acc.push(curr) // 排序后去重，效率更高
//   return acc
// }, [])
// console.log(resArray)

// reduce 实现 promise 次序执行
/*
function runPromiseInSequence (arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input))
}

function p1(a) {
  return new Promise((resolve, reject) => resolve(a * 5))
}
function p2(a) {
  return new Promise((resolve, reject) => resolve(a * 2))
}
function f3(a) {
  return a * 3
}
function p4(a) {
  return new Promise((resolve, reject) => resolve(a * 4))
}

const promiseArr = [p1,p2,f3,p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)
*/

// let o = { then: function(){} };
//
// // 让v [[Prototype]]-link到o
// let v = Object.create( o );
// v.someStuff = "cool";
// v.otherStuff = "not so cool";
// console.log(v)
// console.log('then' in v);

function foo(delay) {
  return new Promise(function (resolve, reject){
    setTimeout(function () {
      resolve('Success!')
    }, delay)
  })
}
function timeoutPromise(delay) {
  return new Promise(function (resolve, reject){
    setTimeout(function () {
      reject('Timeout!')
    }, delay)
  })
}

Promise.race([foo(1000), timeoutPromise(3000)])
  .then(function (res) {
    console.log(res)
  })
  .catch(function (err) {
    console.log(err)
  })
































