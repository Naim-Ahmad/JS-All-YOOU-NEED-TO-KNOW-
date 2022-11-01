// Default Parametar

function sum(a, b) {
    return a + b
}

// console.log(sum()) // NaN


// default parametar old system

function sum10(a, b) {
    if (!a || !b) {
        return 'You are not provide a number'
    } else {
        return a + b
    }
}

// console.log(sum10(1, 1))

function sum4(a = 'a is not define', b = ' and b is not define') {
    return a + b
}

// console.log(sum4())

function greet(msg, name) {
    // console.log(name.length)
    console.log(`${msg}! ${name}`)
}

// greet('Hello', 'HM Nayem')

