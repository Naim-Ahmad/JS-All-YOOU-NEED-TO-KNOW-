function a() {
    b()
    console.log('I am function A')
}

function b() {
    c()
    console.log('I am function B')
}

function c() {
    d()
    console.log('A am function C')
}

function d() {
    console.log('I am function D')
}

a()
let = number = 100
console.log(number)



console.log('I am Global Context')

// creation state
// execution state