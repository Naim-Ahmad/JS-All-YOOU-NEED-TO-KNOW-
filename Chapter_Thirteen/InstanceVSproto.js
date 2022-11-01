// instance member & proto member
/*
 Instance member এরিয়ার মধ্যে Proto member থেকে এক্সেস করতে পারবে , এবং Proto member aria এর মধ্যে Instance member থেকে এক্সেস করা যাবে। 
*/ 

//function Person(name, age) {
//     this.name = name
//     this.age = age

    // this.play = function() {
    //     console.log(this.name + ' is playing.');
    // }

//     }


// Person.prototype = {
//     eat: function () {
//         console.log(this.name + ' is eating.');
//     },

//     sleep: function () {
//         console.log(this.name + ' is sleeping.');
//     },

//     toString: function () {
//         console.log(this.name + ' is a person');
//     }
// }


// var sakib = new Person('sakib', 18)

// sakib.eat()

// var nasim = new Person('Nasim', 25)
// nasim.sleep()

// nasim.toString()

//for seeing nasim's instance keys

// console.log(Object.keys(nasim))

// if you know the property and you confusion than check it true or false

// console.log(nasim.hasOwnProperty('name')); // There is show just Own Property parent Property don't show
// console.log(nasim.hasOwnProperty('age'));
// console.log(nasim.hasOwnProperty('eat'));

// // For seeing instance property and prototype property
// for (var i in nasim) {
//     console.log(i);
// }
//  this is instance member
// let myFunc = function (width, height) {
//     this.width = width
//     this.height = height
//     this.print = function () {
//         this.draw()
//     }
// }

// // Prototype member
// myFunc.prototype = {
//     draw: function () {
//         console.log('I am Draw Method')
//         console.log(`I am at proto member. And I am accessing at Instance member like: My width is = ${this.width}. My height is = ${this.height}`);
//     },
//     toString: function () {
//         console.log('My width is = '+ this.width + '. ' + 'And height is = ' + this.height)
//     }
// }
// console.dir(myFunc)
// let rect = new myFunc(20, 25)
// rect.draw()

// let rect1 = new myFunc(5, 10)
// // rect1.toString()
// rect1.print()

