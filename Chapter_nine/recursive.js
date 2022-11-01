function number(n){
    if(n > 10){
        return
    }

    console.log('Hello World!' + n)

    number(n +1)
}
number(1)

