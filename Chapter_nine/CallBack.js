// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// function greeting(name) {
//     alert('Hello ' + name);
//   }

//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }

//   processUserInput(greeting);

// function sample(a, b, cb){
//     var c = a + b
//     var d = b + a
//     var result = cb(c, d)
//     return result
// }

// var multiple = sample(5, 5, function(c, d){
//     return c * d
// })
// console.log(multiple)

// var sum = sample(5, 5, function(c, d){
//     return c + d
// })

// console.log(sum)

// var sub = sample(5, 5, function(c, d){
//     return c - d
// })

// console.log(sub)

// var devide = sample(5, 5, function(c, d){
//     return c / d
// })

// console.log(devide)

// function print(data) {
//     console.log(data)
// }

// function Hello(name, cb) {
//   cb(name)
// }

// function seyHi(cb) {
//     console.log('Hi! ' + cb)
// }
// Hello('Hm nayem', seyHi)

// Hello('ammu', function (name) {
//     console.log(name + ' ' + 'How are you?')
// })

// Hello('Asik', function (name) {
//     console.log(name + ' ' + 'How are you?')
// })

// var obj = {
//   name: "Maliha",
//   age: 19,
//   email: "maliha@gmail.com",
// }

// function sendMail(object, cb) {
//   return cb(object)
// }

// var send = sendMail(obj, function (object) {
//   if (object.age > 18) {
//     return "Send Email to " + object.name + " " + object.email
//   } else {
//     return "Your age is less then 18"
//   }
// })
// console.log(send)

// var name1 = sendMail(obj, function (object) {
//   if (object.neme === "Maliha") {
//     return "You are Maliha"
//   } else if (object.name === "Nayem") {
//     return "Hello Nayem"
//   } else {
//     return "Your are not Maliha or Nayem"
//   }
// })

// console.log(name1)

// function base(a, b, cb) {
//   return cb(a, b)
// }

// var sum = base(5, 5, function (a, b) {
//     return a + b
// })

// console.log(sum);

// var sub = base(10, 5, function (a, b) {
//     return a - b
// })
// console.log(sub);

// function dataBase(name, callback) {
//     var date = new Date()
//     var hours = date.getHours() 
//     return callback(name, hours)

// }

// var result = dataBase('Maliha', function (name, hours) {
//     if (hours <= 12 ) {
//         var Morning = 'Good Morning! ' + name
//         return Morning;
//     } else if (hours <= 18) {
//         var Afternoon = 'Good Afternoon! ' + name
//         return Afternoon;
//     } else if (hours <= 20) {
//         var evening = 'Good Evening! ' + name
//         return evening;
//     } else {
//         var night = 'Good Night! ' + name
//         return night;
//     }
// })

// console.log(result);


// function Greet(name, hours) {
//     if (hours <= 12 ) {
//         var Morning = 'Good Morning! ' + name
//         return Morning;
//     } else if (hours <= 18) {
//         var Afternoon = 'Good Afternoon! ' + name
//         return Afternoon;
//     } else if (hours <= 20) {
//         var evening = 'Good Evening! ' + name
//         return evening;
//     } else {
//         var night = 'Good Night! ' + name
//         return night;
//     }
// }

// function getHours() {
//     var date = new Date()
//     var get = date.getHours()

//     return get
// }

// console.log(Greet('Hasan', getHours()))
