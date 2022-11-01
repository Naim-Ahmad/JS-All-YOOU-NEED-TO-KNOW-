// What is Function expression
// function যদি variable এর মধ্যে store করা হয় তাহলে তাকে function expression বলে। 


var addition = function(a, b){
   return a + b
}


console.log(addition(5, 5))

// You can store After calling in variable 
var store = addition(10, 10)
console.log(store);

// You can store Function Reference then call any where
var store1 = addition
console.log(store(5, 5))

