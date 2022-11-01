
// return statment output দেয় কিন্তু console.log স্টেটমেন্ট অউতপুট দিতে পারে না সেই জন্য undefined দেখায় 

function person(firsName, lastName, gender) {
  if (gender === "male") {
    return "Mr. " + firsName + " " + lastName
  } else if (gender === "female") {
    var output = "Mrs. " + firsName + lastName

    return output
  }
}

var result = person("HM", "Nayem", "male")
console.log(result)

function add(a, b) {
  function sum() {
   return a + b
  }
  function sub() {
   return a - b
  }
  function multiply() {
    return a * b
  }
  function devide() {
    return a / b
  }

  return sum() + sub() + multiply() + devide()
}

var output = add(10, 5)
console.log(output);


// Input Hour and get output Minute

function getSecond(n) {
  return n * 60 *60
}

console.log(getSecond(20));

