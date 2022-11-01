let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "one");
});

// p1.then((v) => {
//   console.log(v);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'two')
// })

// p2.then((v) => {
//   console.log(v)

// })

// function getIphone(isPassed) {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (isPassed) {
//         resolve('You have got i phone')
//       } else {
//         reject(new Error('You are failed'))
//       }
//     }, 3000)
//   })
//   return promise
// }

// getIphone(false)

// .then((res) => {
//   console.log(res)
// })
//   .catch((err) => {
//   console.log(err.message)
// })

// Fetch API
let Base_URL = "https://jsonplaceholder.typicode.com";

// fetch(`${Base_URL}/users/1`)
//   .then((res) => {
//     res.json()
//       .then((data) => {
//       console.log(data)
//       })
//       .catch((e) => {
//       console.log(e)
//       })
//       .catch((e)=> {
//       console.log(e)
//     })
// })

// function getRequest(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("get", url);

//     xhr.onreadystatechange = function (e) {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve("xhr.response");
//         } else {
//           reject("Error");
//         }
//       }
//     };
//     xhr.send();
//   });
// }

// getRequest(`${Base_URL}/users/1`, function (res) {
//   console.log(res);
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I have create a promise");
//   }, 3000);
// });

// console.log(promise);

// promise.then((v) => {
//   console.log(v);
// });

function test() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

test(12, 34, 34);
