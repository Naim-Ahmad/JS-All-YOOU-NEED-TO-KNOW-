// Error handilng

// function makeText() {
//     throw new Error('plese provide a valid text')
// }

// makeText()

// javascript যে সমস্থা জায়গাতে error দেয়না null , undefined , infinity , ইত্যাদি যদি দেয় সেই ক্ষেত্রে আমরা if else ব্যবহার করে error handling করতে পারি। 

// function makeError(v) {
//     let n = Number.parseInt(v)
//     if (!n) {
//         console.log('Please provide a valid number')
//     } else {
//         console.log(n)
//     }
// }

// makeError("afa")

// function makeWord(text) {

//     try {
//         let str = text.trim()
//         let word = str.split(' ')
//         console.log(word)
//     } catch (e) {
//         // console.dir(e.message)
//         console.log('Please Provide a Valid Text')
//     }
// }


// // makeWord('I love allah & muhammad s')
// makeWord(4)
  

// try {
//     console.log('I am line 1')
//     console.log('I am line 2')

//     throw new Error('I am oyur error')

//     console.log('I am line 3')
    
// } catch (e) {
//     console.log(e.message)
// }

// try {
//     console.log('I am line 1');
//     console.log('I am line 2');
//     // throw new Error('I am your error')
//     console.log('I am line 3');
// } catch (e) {
//     console.log(e.message)
// } finally {
//     console.log('I am finally block');
//  }

// custom error

// class CustomError extends Error{
//     constructor(msg) {
//         super(msg)

//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, CustomError)
//         }
//     }
// }

// try {
//     console.log('I am line 1');
//     console.log('I am line 2');
//     throw new CustomError('I am your error')
//     console.log('I am line 3');
// } catch (e) {
//     console.dir(e)
// } finally {
//     console.log('I am finally block');
//  }
