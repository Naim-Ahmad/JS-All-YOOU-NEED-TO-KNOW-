/* 
What is Arguments Object:- 
The arguments is an object which is local to a function. You can think of it as a local variable that is available with all functions by default except arrow functions in JavaScript. 

This object (arguments) is used to access the parameter passed to a function. It is only available within a function. We can’t access it outside the function. Arguments object allow you to access all of the arguments that are passed to a function. We can access these arguments using indexes.

 */

// function test() {
//     console.log(arguments)
//     console.log(arguments[4]) // Undefined Because 3 index is empty

//     for (var i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }

// test(1, 2, 3, 'String')


// sum of all array

// function argument(){

//     var sumFinal = 0

//     for (var i = 0; i < arguments.length; i++){
        
//         var sumOfArr = 0; //summation store hare some round

//         for (var j = 0; j < arguments[i].length; j++) {
            
//             sumOfArr += arguments[i][j]

//         } // This loop for assign summation

//         sumFinal += sumOfArr
//     }

//     console.log(sumFinal)
// }
// var arr =[1, 2, 3, 4, 5, 6, 7, 8, 9]
// var arr2 =[1, 2, 3, 4, 5, 6, 7, 8, 9]
// var arr3 =[1, 2, 3, 4, 5, 6, 7, 8, 9]

// argument(arr, arr2, arr3)


// function sumOfallArray() {
//     var result = 0;

//     for (var i = 0; i < arguments.length; i++){

//         var sum = 0

//         for (var x = 0; x < arguments[i].length; x++){

//             sum += arguments[i][x]
//             // console.log(arguments[i][x]);

//         }

//         result += sum
//     }

//     console.log(result);
// }


// var arr4 = [1, 2, 3, 4, 5]
// var arr5 = [1, 2, 3, 4, 5]
// var arr6 = [1, 2, 3, 4, 5]
// var arr7 = [1, 2, 3, 4, 5]

// sumOfallArray(arr4, arr5, arr6, arr7)

var arr8 = [1, 2, 3, 4, 5]

var arg = function () {
    return arguments[4]
}

function testArg(n) {
    // console.log(arguments); //test
    return arguments[0] + n
    // console.log(n) // test
}

console.log(testArg(5)) // Output is 10 But Whay!! Because Arguments itself is local variable arguments[0] = 5 And 'n' = 5 result is 10

// testArg(5) // For test
