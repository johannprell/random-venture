import * as UTIL from './util'

window.onload = init

let mainText

function init() {
  console.log('This is a Random Venture.')

  initMainText()
  initButtons()

  print('Welcome to Random Venture')
}

function initMainText() {
  mainText = document.getElementById('main-text')
}

function initButtons() {
  document.getElementById('btn-choice-01').onclick = onChoice
  document.getElementById('btn-choice-02').onclick = onChoice

}

function onChoice() {
  console.log('Wise choice')
  print(getRandomText())
}

function print(text) {
  mainText.innerHTML = text
}

function getRandomText() {
  return 'this is a random text ' + UTIL.math.randomInt(0, 100)
}
