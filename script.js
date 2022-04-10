let result = document.querySelector('.screen')
let buttons = document.querySelectorAll('.button')

// make the number buttons clickable
let calculate = (number) => {
  result.value += number
}
// delete one number at a time
function del() {
  result.value = result.value.slice(0, -1)
}

result.addEventListener('click', function () {})

// make the result = work

let Result = () => {
  try {
    result.value = eval(result.value)
  } catch (err) {
    alert('Enter the valid input')
  }
}
// clear the whole input (please check out why this isnt working)
function reset() {
  result.value = ''
}
