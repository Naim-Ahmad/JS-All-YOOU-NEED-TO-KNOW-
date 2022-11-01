
// var createLaptop = function (name, prossesor, ram, storege) {
     
//         this.name = name
//         this.prossesor = prossesor
//         this.ram = ram
//         this.storege = storege

//         this.fast = function () {
//             console.log('The ' + name + ' is very fast');
//     }
// }

// var HP = new createLaptop('HP EliteBook 840 G3', 'Intel Core I5 5300u', '8 GB DDR4', '256 SSD')

// console.log(HP.name);
// console.log(HP.prossesor);
// console.log(HP.ram);
// console.log(HP.storege);
// HP.fast()


// var creatRect = function(width, height) {
//     this.width = width
//     this.height = height

//     rect = function() {
//         console.log('Rect Width is: ' + this.width)
//         console.log('Rect height is: ' + this.height)
//     }
// }

// var rect = new creatRect(40, 50)

// console.log(rect);

/* new keyword মূলত ৩ টি কাজ করে ১। সে একটি Empty Object তৈরি করে, ২। সেই Empty Obejct এর সাথে কোড গুলো এসোসিয়েট করে । ৩। এবং ঐ function এর prototype গুলো collect করে ঐ empty object এর মধ্যে রাখে*/

// Crate New Keyword

// function myNew(constructor) {
//     var obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))
//     return obj
// }

// var rect4 = myNew(creatRect, 20, 30)

// console.log(rect4);