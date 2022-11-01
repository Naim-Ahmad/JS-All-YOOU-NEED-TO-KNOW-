'use strict'
let arr = [1, 2, 3]

// console.log(arr[Symbol.iterator])
// for (let i = 1; i <= arr.length; i++){
//   console.log(i)
// }

// for (let v of arr) {
//   console.log(v)
// }

// function iterator(everting) {
//   let currentValue = 0
//   return {
//     next() {
//       return {
//         done: currentValue >= everting.length,
//         value: everting[currentValue++]
//       }
//     }
//   }
// }


// let iterate = arr[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let obj = {
//   start: 1,
//   end: 5,
//   [Symbol.iterator]: function () {
//     let currentValue = 1
//     return {
//       next: () => {
//         return {
//           done: currentValue >= this.end,
//           value: currentValue > this.end ? undefined: currentValue++
//         }
//       }
//     }
//   }
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// let object = {
//   a: 10,
//   b: 20
// }

// let keys = Object.keys(object).length

// console.log(keys)


// let canIterateObj = {
//   name: 'Jasim',
//   age: 20,
//   [Symbol.iterator]: () => {
//     let currentValue = 0
//     let key = Object.keys(this)
//     return {
//       next: () => {
//         return {
//           done: currentValue>=key.length,
//           value: currentValue>key.length?undefined: canIterateObj['key']
//         }
//       }
//     }
//   }
// }

// let iterate = Object.keys(canIterateObj)
// console.log(iterate[0])
// for (v in canIterateObj) {
//   console.log(v)
// }


// let iterate = canIterateObj[Symbol.iterator]()
// console.log(iterate.next())

// let obj = {
//   start: 1,
//   end: 5,
//   [Symbol.iterator]: function* () {
//     let currentValue = this.start
//     while (currentValue <= this.end) {
//       yield currentValue++
//     }
//   }
// }

// let generate = obj[Symbol.iterator]()
// console.log(generate.next())
// console.log(generate.next())
// console.log(generate.next())
// console.log(generate.next())
// console.log(generate.next())
// console.log(generate.next())
// console.log(generate.next())


// function* generator(collection) {
//   yield 1
//   yield 2
//   yield 3
//   yield 4
//   yield 5
//   yield 6
// }

// let it = generator()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())


// function* loopIsIterate(collection) {
//   for (let i = 0; i <= collection.length; i++){
//     yield collection[i]
//   }
// }

// let lop = loopIsIterate([1, 2, 3, 4])
// console.log(lop.next())
// console.log(lop.next())
// console.log(lop.next())
// console.log(lop.next())
// console.log(lop.next())
// console.log(lop.next())
 
// set map

// let set = new Set([1, 2, 3, 4])
// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)
// set.add( ['hi', 'how', 'are', 'you'])
// console.log(set.size)
// console.log(set)
// set.clear()
// set.delete(1)
// let setEntries = set.entries()
// console.log(setEntries)

// console.log(set.has(3))
// let setIterator = set.keys()
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())
// console.log(setIterator.next())

// let map = new Map([
//   ['a', 10],
//   ['b', 20]
// ])
// map.set('fullName', 'Nayem Ahmad')
// // map.delete('fullName')
// console.log(map)

// map.forEach((value, key) => {
//   console.log(key, value)
// })

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// map.set({ name: 'hm hayem', age: 20 }, 'this is nayem vai')
// console.log(map)


// let s = new Set([1, 2, 3])

// s.add(null)

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   address = 'Jessore'
//   sleep = function() {
//     console.log(`${this.name} is sleeping....`)
//   }
//   eat() {
//     console.log(`${this.name} is Eating....`)
//   }
// }

// let sakib = new Person('sakib', 20)
// sakib.eat()

// let tamim = new Person('Tamim', 30)
// tamim.sleep()

// class Rect {
//   constructor(width, height) {
//     this.width = width
//     this.height = height
//   }

  // static drawing() {
  //    console.log(`My width is ${this.width}. And May height is ${this.height}`)
  // }
//   static drawing(obj) {
//     return `My width is ${obj.width}. and My height is ${obj.height}`
//   }
// }

// let rect1 = new Rect(10, 20)
// Rect.drawing()
// console.log(Rect.drawing(rect1))


// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   print() {
//     console.log(this.name, this.age)
//   }
//   static create(str) {
//     let person = JSON.parse(str)
//     return new Person(person.name, person.age)
//   }
// }

// let str = '{"name":"Nayem", "age": "20"}'

// let sakib = Person.create(str)
// console.log(sakib.print())


// function Shape() {
//   this.test = function () {
//     console.log(this)
//   }
// }

// let s1 = new Shape()
// let test = s1.test
// test()

// class ShapeClass {
//   test() {
//     console.log(this)
//   }
// }


// let sc = new ShapeClass()
// let testSC = sc.test
// testSC()
// const _width = Symbol()
// const _height = Symbol()
// const _print = Symbol()
// class Circle {
//   constructor(width, height, radius) {
//     this[_width] = width
//     this[_height] = height
//     this.radius = radius
//   }

//   [_print]() {
//     console.log(`My width is ${this.width}. My height is ${this.height}. My radius is ${this.radius}`)
//   }
// }

// let c1 = new Circle(100, 50, 25)
// console.log(Object.getOwnPropertySymbols(c1))
// console.log(Object.getOwnPropertyNames(c1))
// let key = Object.getOwnPropertySymbols(c1)[0]
// console.log(c1[key])
// console.log(c1.height)
// let test = Object.getOwnPropertySymbols(c1)[0]
// let key1 = Object.getOwnPropertySymbols(c1)[1]
// console.log(c1[test])
// console.log(c1[key1])

// let sym1 = Symbol('my identifier')
// let sym2 = Symbol('my identifier')

// console.log(sym1, sym2)
// console.log(sym1 === sym2)

// let obj = {}

// obj[sym1] = 'hasan'
// obj[sym2] = 'mahmud'
// console.log(obj[sym1])
// console.log(obj[sym2])
// console.log(obj[sym1])

// const _weakMap = new WeakMap()

// class Person {
//   constructor(name, email) {
//     _weakMap.set(name)
//     this.email = email
//   }

//   eat() {
//     console.log(_weakMap.get('name') + 'is eating....')
//   }
// }

// let habib = new Person('Habib', 'Habib@gmail.com')

// habib.eat()

// let map = new Map()

// map.set({ name: 'hasan' })
// console.log(map.get('name'))

// let object = {
//   value1: 1,
//   value2: 2,
//   value3: 3,
//   value4: 4,
//   value5: 5,
//   value6: 6,
// }
// // console.log(Object.entries(object).length)
// // console.log(Object.entries(object)) //[Array(2), Array(2), Array(2), Array(2), Array(2)]
// Object.prototype[Symbol.iterator] = function () {
//   let entries = Object.entries(this)
//   let count = entries.length + entries.length;
//   let index = 0;
//   return {
//     next() {
//       if (count > index) {
//         let result = { done: false, value: entries[index][1] }
//         count--;
//         index++;
//         return result
//       }
//       return {done: true}
//     }
//   }
// }
// for (let element of object) {
//   console.log(element)
// }

// let obj = {
//   a: 10,
//   b: 20,
//   c: 30,
// }

// Object.prototype[Symbol.iterator] = function () {
//   let entries = Object.entries(this)
//   let count = entries.length + entries.length
//   let index = 0

//   return {
//     next() {
//       if (count > index) {
//         let result = { done: false, value: entries[index][1] }
//         count--
//         index++
//         return result
//       }
//       return {done: true}
//     }
//   }
// }

// for (let Element of obj) {
//   console.log(Element)
// }
// console.log([...obj])


// class Shape{
//   constructor(color) {
//     this.color = color
//   }
//   common() {
//     console.log('I am common method')
//   }
// }


// class Circle extends Shape{
//   constructor(width, height, Green) {
//     super(Green)
//     this.width = width
//     this.height = height
//   }
//   print() {
//     console.log(this.width, this.height)
//   }
// }

// let c1 = new Circle(30, 50, 'Green')
// console.log(c1.color)

let object = {
  a: 10,
  b: 20,
  c: 30
}

// function* generator(obj) {
//   let entries = Object.entries(obj)
//   for (let element of entries) {
//     yield element[1]
//   }
// }

// let iterator = generator(object)

// for (let element of iterator) {
//   console.log(element)
// }
// console.log(iterator.next())

// function range(start, end, step) {
//   let counter = start
//   return {
//     [Symbol.iterator]: function () {
//       return {
//         next() {
//           if (counter <= end) {
//             const result = { done: false, value: counter }
//             counter += step
//             return result
//           }
//           return {done: true}
//         }
//       }
//     }
//   }
// }
// console.log([...range(1, 10, 2)])

// function* generator(start, end, step) {
//   const counter = start
//   for (let i = 0; i < end; i++){
//     yield counter+=step
//   }
// }

// console.log([...range(100, 10000, 2)])

// function* generator(a, b) {
//   let k = yield a + b
//   let l = yield a + b + k
//   let c = yield l + a + b

//   yield k + l + c
// }

// let gen = generator(10, 20)

// console.log(gen.next())
// console.log(gen.next(10))
// console.log(gen.next(100))
// console.log(gen.next(150))

// function displayed(some) {
//   console.log(some)
// }

// function sum(a, b, callback) {
//   let result = a + b
//   callback(result)
// }

// let sumOf = sum(10, 20)
// sum(10, 20, function (result) {
//   console.log(result)
// })

// let num = new Number(12345678)
// console.dir(num)
// let myFunc = num => Number(num)
// console.log()
// console.log(num.valueOf())
// let arrNum = Array.from(String(num), myFunc)
// console.log(arrNum)

// function iterator(n) {
//   let number = n.valueOf()
//   let myFunc = num => Number(num)
//   let numArr = Array.from(String(number), myFunc)
//   let counter = 0
//   console.log(numArr.length)
  
//   return Number.prototype[Symbol.iterator] = function () {
//   return {
//     next() {
//       if (counter <= numArr.length) {
//         let result = { done: false, value: numArr[counter] }
//         counter++
//         return result
//       }
//       return {done: true}
//     }
//   }
// }
// }
// let it = iterator(144676788)()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())