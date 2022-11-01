var a = 100

function b(){
    var d = 200
    
    return function (){
        console.log(d)
    }
}

var c = b()

console.dir(c)

function greeting(msg) {
    return function (name) {
        console.log(msg + '' + name)
    }
}

var hello = greeting('Hello!')

hello('Nayem')
