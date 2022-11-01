// Pass by Value vs Pass by Refarance
// একটি primitive data কে যখন আর্গুমেন্ট আকারে পাস করা হয় তখন সেটার একটা কপি তৈরি হয় তখন function এর মধ্যে যদি সেই data এর ভালুএ কে চেঞ্জ করা হয় তাহলে মুল data চেঞ্জ হয় না । এবং যখন object data কে আর্গুমেন্ট আকারে পাস করা হয় তখন সেটার রেফারেন্স পাস হয়, এবং data চেঞ্জ করলে মুল data চেঞ্জ হয়ে যায়।  

// var number = 10

// function changeValue(n) {
//     n = 100
//     console.log(n);
// }

// changeValue(number)

// console.log(number);


// var object = {
//     a: 10,
//     b: 20
// }

// function changeMe(obj) {
//     obj.a = 300
//     obj.b = 400

//     console.log(obj);
    
// }

// changeMe(object)

// console.log(object);

// var undefined = undefined

// function changeUndefined(primitive) {
//     primitive = 100
//     console.log(primitive);
// }

// changeUndefined()
// console.log(undefined);


// let s = [10]

// let j = s

// j[0] = 100

// console.log(s)
// console.log(j)


