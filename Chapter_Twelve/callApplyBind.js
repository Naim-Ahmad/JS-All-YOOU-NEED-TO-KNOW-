/*
পূর্বে আমরা constructor function তৈরি করেছিলাম এবং সেই এবং সেই ফাংশনের মধ্যে new keyword দিয়ে তৈরিকৃত অবজেক্টকে পাঠিয়েছিলাম। তখন ফাংশন এর মধ্যে থাকা this keyword টি new keyword এর অপজেক্টকে রেফার করেছিল।
এখন যদি আমরা চাই আমাদের তৈরিকৃত অবজেক্ট কে রেফার করুক তাহলে আমরা সেই ফাংশন কে call, apply, bind দ্বারা কল করব। 
*/

// let myFunc = function (type) {
//   this.type = type
//   this.print()
// }

// let book1 = {
//   book: 'Alor Khoje',
//   page: 100,
//   price: 150,
//   print: function () {
//     console.log(`The book is ${this.book}. and There are ${this.page} pages. And It's Price is ${this.price} TK. And it's Type of ${this.type}`)
//   }
// }

// call , apply, bind
// myFunc.call(book1, 'old')
// myFunc.apply(book1, ['old'])

// let courses = function (Time) {
//   this.time = Time
//   return this.print()
// }

// let course = {
//   course: 'JS All YOU NEED TO KNOW',
//   topic: 'JavaScript',
//   print: function () {
//     return `My course is ${this.course}. And topic is ${this.topic}. And Start This course From ${this.time}`
//   }
// }

// let temp = courses.bind(course)
// console.log(temp('Saturday'))
// console.log(temp('Sunday'))






// function add(c, d) {
//     console.log(this.a + this.b + c + d)
// }

// add.call({a: 10, b:20}, 10, 10)
// add.apply({a: 10, b:20}, [10, 10])
// var testBind = add.bind({ a: 10, b: 20 })

// testBind(10, 10)

// function sqrt(a, b) {
//     return this.a * this.b + a + b
// }

// var store = sqrt(5, 5)
// console.log(store);

// var tesCall = sqrt.call({ a: 5, b: 5 }, 5, 5)
// console.log(tesCall)

// var testApply = sqrt.apply({ a: 10, b: 10 }, [5, 5])

// console.log(testApply);

// var obj = {
//     a: 30,
//     b: 10
// }

// var testBind = sqrt.bind(obj)
// console.log(testBind(5, 5))


// function Laptop(ram, storage) {
//     var dec = 'Model: ' + this.name + ' Processor: ' + this.processor + ' Ram: ' + ram + ' Storage: ' + storage
//     console.log(dec);
// }

// Laptop.call({name: 'HP EliteBook 840 G3', processor: 'Intel Core I5 6300u'}, '8 GB DDR4', '256 SSD')
// Laptop.apply({name: 'HP EliteBook 840 G3', processor: 'Intel Core I5 6300u'}, ['8 GB DDR4', '256 SSD'])
// var testBind = Laptop.bind({ name: 'HP EliteBook 840 G3', processor: 'Intel Core I5 6300u' })

// testBind('8 GB DDR4', '256 SSD')