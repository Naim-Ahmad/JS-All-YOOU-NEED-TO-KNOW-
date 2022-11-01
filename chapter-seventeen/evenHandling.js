let button = document.getElementById('btn')

let list = document.getElementById('list')
button.onclick = function () {
  let item = list.lastElementChild.cloneNode(true)
  item.innerHTML = 'newly created item'
  
  list.appendChild(item)
}

let box = document.getElementById('box')

box.addEventListener('mousemove', function (e) {
  document.getElementById('mouseeven-x').innerHTML = e.offsetX
  document.getElementById('mouseeven-y').innerHTML = e.offsetY
});

// delegation problem
// [...list.children].forEach(li => {
//   li.onclick = function (e) {
//     e.target.remove()
//   }
// })

// list.addEventListener('click', function (e) {
//   if (this.contains(e.target)) {
//    e.target.remove()
//  }
// })

let inputName = document.getElementById('inputName')

inputName.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    document.getElementById(
      'showName'
      ).innerHTML = `Your Name is ${event.target.value}`
      event.target.value = ''
  }
})

// checkbox handling

// let skills = document.getElementsByName('skills')
// let outputSkills = document.getElementById('outputSkill')

// let skillsArr = []

// skills.forEach(skill => {
//   skill.addEventListener('change', function (event) {
//     if (event.target.checked) {
//       skillsArr.push(event.target.value)
//       outputSkill(outputSkills, skillsArr)
//     } else {
//       let ind = skillsArr.indexOf(event.target.value)
//       skillsArr.splice(ind, 1)
//       outputSkill(outputSkills, skillsArr)
//     }
//   })
// })

// function outputSkill(parent, skills) {
//   let result = ''
//   skills.forEach((skill, index)=>{
//     result += `${index + 1}. ${skill}  `
//   })
//   parent.innerHTML = result
// }

// 2nd time practice

let skills = document.getElementsByName('skills')
let outputs = document.getElementById('outputSkill')
let skillsArr = []
skills.forEach(skill => {
  skill.addEventListener('change', function (event) {
    if (event.target.checked) {
      skillsArr.push(event.target.value)
      output(outputs, skillsArr)  
    } else {
      let index = skillsArr.indexOf(event.target.value)
      skillsArr.splice(index, 1)
      output(outputs, skillsArr)     
    }
  })
})

function output(outputSkills, skills) {
  let result = ''
  skills.forEach((skill, index)=>{
    result += `${index + 1}. ${skill}  `
  })
  outputSkills.innerHTML = result
}

// list and input handler in javaScript

list.addEventListener('dblclick', function (event) {
  let innerText = event.target.innerText
  event.target.innerHTML = ''
  let input = createInput(innerText)
  event.target.appendChild(input)
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      event.target.innerHTML = e.target.value
    }
  })
})

function createInput(value) {
  let input = document.createElement('input')
  input.type = 'text'
  input.value = value

  return input
}