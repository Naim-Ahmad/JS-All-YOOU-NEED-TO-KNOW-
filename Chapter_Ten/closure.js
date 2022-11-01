// When a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

/*
What is lexical scope

এই কনসেপ্টটি এসেছে লেক্সিং থেকে লেক্সিং বলে হল আমাদের কম্পাইলার কোড গুলোকে টকেনাইজ করাকে লেক্সিং বলে ত এই লেক্সিং এর সাথে lexical scope এর সম্পর্ক কি? 

কোড গুল টকেনাইজ করার সময় মূলত নির্ধারন হয় কোথা থেকে আমাদের Data গুল visible এবং কোথা থেকে আমাদের data গুল visible না, অর্থাৎ কোথা থেকে আমাদের varible/function accessable এবং কোথা থেকে accessable না। এই নির্ধারন করাটাকেই লেক্সিকাল স্কোপ বলে

*/

// function test() {
//     var closure = 'I am a closure'

//     function log() {
//         console.log(closure)
//     }

//     log()
// }

// test()

// Problem Solving

// for (var i = 0; i <= 5; i++){
//     (function (n) {
//         setTimeout(function () {
//             console.log(n)
//         }, 1000 * n)
//     })(i)
// }

//This is Problem

for (var i = 0; i <= 5; i++){
    setTimeout(function () {
        console.log(i);
    }, 1000 * i)
}

// Solution

for (var i = 1; i <= 5; i++) {
    ;(function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(i)
}
