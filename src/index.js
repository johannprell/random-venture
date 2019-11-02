window.onload = init

function init() {
  console.log('This is a Random Venture.')

  initButtons()
}

function initButtons() {
  document.getElementById('btn-choice-01').onclick = onChoice
  document.getElementById('btn-choice-02').onclick = onChoice

}

function onChoice() {
  console.log('Wise choice')
}
