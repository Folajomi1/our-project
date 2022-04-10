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

// clear the whole input (please check out why this isnt working)
function reset() {
  reset.value = ''
}
