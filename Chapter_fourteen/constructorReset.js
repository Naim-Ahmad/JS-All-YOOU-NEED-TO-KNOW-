// function Shape(color) {
//     this.color = color
// }

// Shape.prototype = {
//     common: function () {
//         console.log('This is common mathod');
//     }
// }


// function Circle(width, color) {
//     Shape.call(this, color) // This is Super call
//     this.width = width

//     this.draw = function () {
//         console.log('I am Drawing');
//     }
// }

// Circle.prototype = Object.create(Shape.prototype)
// Square.prototype = Object.create(Shape.prototype)

// Square.prototype.constructor = Square // reset constructor Square
// Circle.prototype.constructor = Circle // reset constructor Circle

// function Square(width, color) {
//     this.width = width
//     Shape.call(this, color)
//     this.draw = function () {
//         console.log('I am Drawing.');
//     }
// }

// var sqr = new Square(45, 'Green')

// var circle = new Circle(50, 'Red')
// console.log(circle);

// console.log(sqr);

