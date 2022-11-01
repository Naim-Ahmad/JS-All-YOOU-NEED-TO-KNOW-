// Private properties

/*
user থেকে অপ্রয়োজনীয় ডাটা হাইড করাকে Abstraction বলে যেমনঃ একটা constructor function এর মধ্যে কিছু functionality দেওয়া হল কিন্তু আমি চাচ্ছি না ইউজার জানুক এটা কিভাবে কাজ করছে তাহলে সে ক্ষেত্রে সেই অব্জেক্টের মধ্য থেকে ডাটাটি হাইড করা.
*/

// var createRect = function (width, height) {
//     this.width = width
//     this.height = height

//     var position = {
//         x: 20,
//         y: 10,
//     }

//     var printProperties = function () {
//         console.log("The Width is = " + this.width)
//         console.log("The height is = " + this.height)
//     }.bind(this)

//     this.draw = function () {
//         console.log("I am Ractangle")
//         printProperties()
//         console.log("The X ix = " + position.x, "The y is = " + position.y)
//     }
// }

// var rect1 = new createRect(5, 6)
// rect1.draw()

// var createLaptop = function (name, processor, ram, storage) {
     
//     this.name = name
//     this.processor = processor
//     this.ram = ram
//     this.storage = storage


//     var printProperties = function () {
//         console.log('Laptop Model : ' + this.name);
//         console.log('Processor : ' + this.processor);
//         console.log('Ram: ' + this.ram);
//         console.log('Storage : ' + this.storage);
//     }.bind(this)

//     this.description = function () {
//         console.log('Description:-')
//         printProperties()
//     }

// }
// var Laptop = new createLaptop('HP EliteBook 840 G3', 'Intel Core I5 5300u', '8 GB DDR4', '256 SSD')

// Laptop.description()



// var Window = function (width, height, color) {
//     this.width = width
//     this.height = height
//     this.color = color

    
//     var openWindow = function () {
        // console.log(`It's widht is: ` + this.width);
        // console.log(`It's height is: ` + this.height);
        // console.log(`and color is: ` + this.color);
//     }.bind(this)

//     this.open = function () {
//         console.log('This is window.');
//         openWindow()
//     }
// }

// var window1 = new Window(30, 50, 'Red')
// window1.open()


// let Phone = function (name, hardware, price) {
//         this.name = name
//         this.hardware = hardware
//         this.price = price

//         var printProperties = function () {
//                 console.log('This is a Phone')
//                 console.log(`Phone Name: ${this.name}. And Hardware is: ${this.hardware}. Price is: ${this.price}`)
//         }.bind(this)

//         this.showDetails = function () {
//                 printProperties()
//         }

        
// }

// let z25 = new Phone('Symphony Z25', 'Chipset: Snapdragon 665. Ram+Rom 4/64', 8000)

// z25.showDetails()

/*
যদি আমরা চাই একটি প্রাইভেট প্রোপার্টিতে এক্সেস নিতে তাহলে ২ টি সল্যুশন আচে।
১। সেই অবজেক্ট এর মধ্যে আর একটি Method ডিক্লিয়ার করতে হবে এবং সেখান থেকে প্রাইভেট প্রোপার্টি কে রিটার্ন করতে হবে।
২। getter setter এর মাদ্ধমে এক্সেস করা যাবে (এটা সবচে' ভাল সল্যুশন)

*/

// let Phone = function (name, hardware, price) {
//         this.name = name
//         this.hardware = hardware
//         this.price = price

//         var printProperties = function () {
//                 console.log('This is a Phone')
//                 console.log(`Phone Name: ${this.name}. And Hardware is: ${this.hardware}. Price is: ${this.price}`)
//         }.bind(this)

//         // this.showProperties = function () {
//         //         return printProperties()
//         // }

//         this.showDetails = function () {
//                 printProperties()
//         }

//         Object.defineProperty(this, 'printProperties', {
//                 get: function () {
//                         printProperties()
//                 },
//         })
    
// }

// let z25 = new Phone('Symphony Z25', 'Chipset: Snapdragon 665. Ram+Rom 4/64', 8000)
// z25.printProperties