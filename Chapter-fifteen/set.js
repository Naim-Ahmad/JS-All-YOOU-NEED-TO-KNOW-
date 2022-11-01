// let set = new Set([1, 2, 3])
// set.add(4)
// set.add(5)
// set.add(6)

// console.log(set)

// set.clear()
// console.log(set)

// set.delete(3)
// set.delete(1)
// set.delete(2)

// set.entries()
// let sum = 0
// set.forEach(function (a) {
//     sum += a
// })

// console.log(sum)


// console.log(set.has(5))
// console.log(set)

// console.log(set.size)

// let itarate = set.keys()

// console.log(itarate.next())
// console.log(itarate.next())
// console.log(itarate.next())
// console.log(itarate.next())
// console.log(itarate.next())
// console.log(itarate.next())
// console.log(itarate.next())


// let iterate = set.values()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


/*
WeekSet
*/

// let obj = { name: 'habib' }
  
// let obj1 = { age: 10 }

// let set = new Set([obj, obj1])

// obj1 = null

// console.log(set)

// console.log([...set][1]) // ekhane null korar poreu memory te data gulo tekhe jacchee ei somossa theke bachar jonno weakSet eseche

// WeakSet

// let weakSet = new WeakSet([obj, obj1])  // etar moddhe sudu object dewa jabe tasara kono premitive data dewa jabe na


// console.log(weakSet)

// obj1 = null

// console.log(weakSet)