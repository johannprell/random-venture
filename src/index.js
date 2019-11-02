import { testGenerator, introduction } from './gen'

window.onload = init

let mainText
let btn01
let btn02

function init() {
  console.log('This is a Random Venture.')

  initMainText()
  initButtons()

  apply(introduction())
}

function initMainText() {
  mainText = document.getElementById('main-text')
}

function initButtons() {
  btn01 = document.getElementById('btn-choice-01')
  btn02 = document.getElementById('btn-choice-02')

  btn01.onclick = onChoice
  btn02.onclick = onChoice
}

function onChoice() {
  console.log('Wise choice')
  print(testGenerator())
}

function print(text) {
  mainText.innerHTML = text
}

function setChoices(choice01, choice02) {
  btn01.innerHTML = choice01
  btn02.innerHTML = choice02
}

/**
 * Applies generated text to main window and buttons.
 * Text must be formatted as [] with three strings:
 * -- main text
 * -- button 1 text
 * -- button 2 text
 * @param {string[]} text 
 */
function apply(text) {
  print(text[0])
  setChoices(text[1], text[2])
}