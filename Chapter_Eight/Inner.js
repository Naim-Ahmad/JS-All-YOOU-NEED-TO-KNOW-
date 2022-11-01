
// inner function 

function inner(a, b) {
    function addition(){
        console.log(a + b)
    }

    addition()
}

var s = 40

var r = 11
inner(s, r)

inner(40, 50)

function greetFunction(greet, name){
    function getFirsName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }

    }

    var messagase = greet + ' ' + getFirsName()
    console.log(messagase)
}
var greet = 'Good MOrning!'
var name1 = 'HM Nayeem'

greetFunction(greet, name1)