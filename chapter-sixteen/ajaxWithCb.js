// let xhr = new XMLHttpRequest()

// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function (e) {
//   // console.log(xhr.readyState)
//   // console.log(xhr.status)

//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       let users = JSON.parse(xhr.response)
//       console.log(users)
//       // users.forEach(element => {
//       //   console.log(element.name)
//       // });
//     } else {
//       console.log(xhr.status)
//     }
//   }
// }

// xhr.send()

// function getRequest(url, callback) {
//   let xhr = new XMLHttpRequest()
//   xhr.open('get', url)

// xhr.onreadystatechange = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       callback(xhr.response)
//     } else {
//       callback(xhr.status)
//     }
//   }
// }
//   xhr.send()
// }

// getRequest('https://jsonplaceholder.typicode.com/users', function (res, err) {
//   if (res) {
//     let users = JSON.parse(res)
//     users.forEach(function (resName) {
//       console.log(resName.name)
//     })
//   } else {
//     // let response = JSON.parse(res)
//     console.log(err)
//     // response.forEach(function (resName) {
//     //   alert(resName.name)
//     // })
//   }
// })

// console.log(document)

let arr = [1, 2, 3, 4];

// let sqrArr = arr.map(v => v * v)

// console.log(sqrArr)

// function asyncMap(arr, cb) {
//   return arr.map(v => {
//     // setTimeout(cb.bind(null, v), 0) number 1 solution
//     setTimeout(()=> cb(v ))
//   })
// }

// let sqr = asyncMap(arr, function (v) {
//   console.log(v)
// })

// function getRequest(url, callback) {
//   let xhr = new XMLHttpRequest()

//   xhr.open('get', url)

//   xhr.onreadystatechange = function (e) {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         callback(this.response)
//       }
//     } else {
//       callback(this.readyState)
//     }
//   }
//   xhr.send()
// }

// getRequest('https://jsonplaceholder.typicode.com/users', function (res, err) {
//   if (res) {
//     console.log(res)
//   } else {
//     console.log(err)
//   }
// })

// let Base_URL = 'https://jsonplaceholder.typicode.com'

// getRequest(`${Base_URL}/users/`, function (res, err) {

// })
