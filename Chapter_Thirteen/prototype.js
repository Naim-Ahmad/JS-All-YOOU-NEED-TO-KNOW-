/*
inheritance কাকে বলে? 

একটি ক্লাসের কমন প্রপার্টি গুল নিজের মধ্যে ধারণ করাকে inheritance বলে। যেহেতু জাভাস্ক্রিপ্টে ক্লাস নেই তাই আমাদেরকে অবজেক্টকেই ক্লাস ধরে নিতে হচ্ছে। আর যেহেতু অবজেক্ট নিয়ে কাজ করতে হচ্ছে তাই এখানে আর একটি টার্ম চলে আসে তা হল প্রোটোটাইপ এবং prototypical inheritance । 

এখন বুঝতে হবে prototype কি?  prototype হল প্রত্যেকটি object এর প্যারেন্ট base এবং এই প্যারেন্ট base এর মাধ্যমে যেই inheritance টি ঘটান হয় সেটাকেই বলে prototypical inheritance । (JS all you need to know থেকে সংগৃহীত)

Prototype হল জাভাস্ক্রিপ্টের যেকোনো ফাংশনের একটি প্রোপার্টি যেটি একটি অবজেক্ট কে পয়েন্ট করে। (LWS থেকে সংগৃহীত)

Multy Level inheritance কি?
সাপস একটি অবজেক্ট সেটা ইনহারিট হয়েছে তার প্যারেন্ট থেকে এবং সেই অবজেক্ট টি inherit হয়েছে তার parnt থেকে । এটাকেই বলা হচ্ছে মুলটি লেভেল inheritance ।
*/

// Multi Level Inheritance

// function inherit(name) {
//     this.name = name
// }
// var multi = new inherit('Nayem')
// console.log(multy)

// let str = 'Imran'
// let str2 = new String('Hasan')

// console.log(str.__proto__ === str2.__proto__)
// console.log(Object.getPrototypeOf(str)===Object.getPrototypeOf(str2))


// let myConstructor = function (width, height) {
//   this.width = width
//   this.height = height
//   this.print = function () {
//     console.log(this.width + ' ' + this.height)
//   }
// }


// let cons = new myConstructor(25, 50)
// console.log(cons)


// let personMethod = {
//   phone: 'Android',
//   eat() {
//   console.log(`${this.name} is Eating.`)
// },
// sleep() {
//   console.log(`${this.name} is Eating.`)
// }
// }

// function Person(name, age, country) {
//   let Person = Object.create(personMethod)
// Person.name = name
// Person.age = age
// Person.country = country
// return Person 
// }

// let rahim = Person('Rahim', 20, 'Bangladesh')
// console.log(rahim)
// rahim.eat()


// let test = Object.create(personMethod)
// test.name = 'a'
// test.bum = function () {
//   console.log('bum')
// }
// console.log(test)

// function PrototypeOfShape() {
  
// }

// PrototypeOfShape.prototype = {
//   sleep() {
//     console.log(`Age of ${this.name} is ${this.age}.`)
//   }
// }
// PersonShape.prototype = 
// PersonShape.prototype.constructor = PersonShape

// function PersonShape() { 
// }
// PersonShape.prototype = {
  
//   eat() {
//     console.log(this.name + ' is eating.')
//   }
// }

// Person.prototype = Object.create(PersonShape.prototype)
// Person.prototype.constructor = Person

// function Person(name, age, country) {
//   this.name = name
//   this.age = age
//   this.country = country
// }

// let rahim = new Person('Rahim', 20, 'BD')
// rahim.eat()

// function prototype() { }
// prototype.prototype = {
//   start() {
//     console.log(`${this.name} is starting.`)
//   }
// }
// console.dir(prototype)
// Laptop.prototype = Object.create(prototype.prototype)
// Laptop.prototype.constructor = Laptop

// function Laptop(name) {
//   this.name = name
// }

// let G3 = new Laptop('HP EliteBook 840 G3')

// let G2 = new Laptop('HP EliteBook 840 G2')
// G2.start()


// function test(color) {
//   this.color = color
// }
// test.prototype = {
//   common() {
//     console.log('I am common method')
//   }
// }

// test1.prototype = Object.create(test.prototype)
// test1.prototype.constructor = constructor

// function test1(width, color) {
//   test.call(this, color)
//   this.width = width
//   console.log(this.width)
// }
// let t1 = new test1(20, 'green')
