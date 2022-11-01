// function mixing(target, ...sources) {
//   return Object.assign(target, ...sources)
// }

// let canWalk = {
//   walk() {
//     console.log('walking....')
//   }
// }

// let canEat = {
//   eat() {
//     console.log('eating....')
//   }
// }

// let swiming = {
//   swiming() {
//     console.log('swiming.........')
//   }
// }
// let p1 = Object.assign({}, canWalk, canEat)
// p1.name = 'hm nayem'
// p1.eat()

// let goldFish = Object.assign({}, swiming, canEat)
// console.log(goldFish)

// function Person(name) {
//   this.name = name
// }
// mixing(Person.prototype, canWalk, canEat)

// let p1 = new Person('nayem')
// console.log(p1)


// let goldFish = function(name){
//   this.name = name
// }
// mixing(goldFish.prototype, swiming, canEat)
// let g1 = new goldFish('bla bla bla')
// console.log(g1);
