let form = document.getElementById('form')
let isValid = false
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // console.log(this.elements[0])
  // console.log(this.value)
  let formData = {};
  [...this.elements].forEach(e => {
    if (e.type !== 'submit') {
      isValid = validator(e)
      if (isValid) {
        formData[e.name] = e.value
      } else {
        // alert(`${e.name} is required`)
        e.classList.add('is-invalid')
      }
    }
  })
  if (isValid) {
    console.log(formData)
    this.reset()
  } else {
    this.reset()
  }
})

function validator(e) {
  if (!e.value) {
    return false
  } else {
    return true
  }
}