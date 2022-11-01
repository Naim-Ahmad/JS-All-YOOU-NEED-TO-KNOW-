// Arrow Function in ES6

// Normal summation

function sum(a, b) {
    return a + b
}

// console.log(sum(5, 5))

// Arrow function

let sum1 = (a, b) => a + b

// console.log(sum1(10, 10))


// Arrow function vs this keyword

function sum2() {
    console.log(this)
}

// sum2()

// let sum3 = () => {
//     console.log(this)
// }

// sum3()

// arrow function এর মধ্যে this ব্যাবহার করলে সেটা তার parnt object কে রেফার করে।

// var obj =  {
//     sum3 : () => {
//         console.log(this)
//     }
// }

// obj.sum3()


// let obj2 = {

//     name: 'Hm nayem',
    
//     print: function () {
//         console.log(this)
        
//     }
// }

// obj2.print()

// let obj3 = {
//     name: 'HM nayem',

//     print: function () {
//         // console.log(this)
//         let s = this
//         setTimeout(function() {
//             // console.log(this)
//             console.log(`Hello ${s.name}`)
//         },2000)
//     }
// }

// obj3.print()


// let obj = {
//     name: 'nayem',
//     print: function () {
//         setTimeout(() => {
//             console.log(this)
//         },1000)
//     }
// }

// obj.print()
