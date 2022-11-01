// String

// var str = 'Nayem'

// var str1 = new String('Nayem')

// console.log(str == str1);
// console.log(str === str1);

// console.log(typeof str1);
// console.log(typeof str);

/*Array */

// update Array index

// var arr = ['Abid', 'Nayem', 'Tawhid']

// arr.push('Habibullah')

// arr[arr.length] = 'Asik'

// console.log(arr);

// var arr2 = [1, 2, 3, 4, 5]

// arr2.push(6, 7, 8)

// arr2[arr2.length] = 9

// console.log(arr2)


// var arrLitaral = [1, 2, 3, 4]
// var arrConstructor = new Array(1, 2, 3, 4)

// console.log(arrLitaral);
// console.log(arrConstructor);

// var arrLitaral1 = [40]
// var arrConstructor1 = new Array(40)

// console.log(arrLitaral1);
// console.log(arrConstructor1);


// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype = {
//     eat() {
//         console.log(this.name + ' is Eating');
//     },
//     sleep() {
//         console.log(this.name + ' is sleeping');
//     }
// }

// let p = new Person('Rakib', 19)
// p.eat()

// let p1 = new Person('Jasim', 30)

// p1.eat()
// p1.sleep()

// function Person() { }


// let s = new Person()
// console.dir(Person.prototype)
// console.log(s);


// function sum(a) {
//     return Math.pow(a , 3)
// }

// var result1 = sum(3)
// var result2 = sum(5)
// var result3 = sum(10)
// console.log(result1);
// console.log(result2);
// console.log(result3);

// var math = Math.pow(5,5)

// console.log(math);


// function sqrt(side1, side2) {
//     console.log()  
// }

// sqrt(8, 10)

// function countTrue(arr) {
// 	var sum = 0
// 	for(var i = 0; i<= arr.length; i++){
// 		if(arr[i]===true){
// 			sum+=arr[i]
// 		}
// 	}
// 	return sum
// }

// console.log(countTrue([true, false, false, true, false]))



// function redundant(str) {
// 	return function(){
// 		return str
// 	}
// }

// const f1 = redundant("apple")
// console.log(f1())

// const f2 = redundant("pear")
// f2()

// const f3 = redundant("")
// f3()


// function remainder(a, b) {
//     console.log(a % b)
// }

// remainder(1, 3)// ➞ 1

// remainder(3, 4)// ➞ 3

// remainder(-9, 45)// ➞ -9

// remainder(5, 5) //➞ 0


// function lessThanOrEqualToZero(n) {
//     if (n < 0 || n === 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// lessThanOrEqualToZero(5) //➞ false

// lessThanOrEqualToZero(0) //➞ true

// lessThanOrEqualToZero(-2) //➞ true


// Inner for loop

// for (var i = 1; i <= 5; i++){

//     var names = i + ' Nayem'

//     for (var x = 1; x <= 5; x++){
//         console.log(x + ' Inner Loop')
//     }

//     console.log(names);
// }



// function testArgs() {

//     var temp = 0;

//     for (var i = 0; i < arguments.length; i++){
//         temp += arguments[i]
//     }

//     return temp
// }

// console.log(1,3,6,7)

// function nextEdge(side1, side2) {
// 	var max_length = side1 + side2 -1
// 	var min_length = Math.max(side1, side2) - Math.min(side1, side2) + 1
// 	console.log('max = ' + max_length)
// 	console.log('min = ' + min_length)
// }

// nextEdge(8, 10)


// let str = 'I love allah, allah is rahman'

// let substr = 'allah'

let obj = {
  a: 20,
  b: 'English'
}

console.log(JSON.stringify(obj))





