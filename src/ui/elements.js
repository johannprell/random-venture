// Html elements
let header
let mainText
let btn01
let btn02
// Hook into choice buttons
let onChoice = () => { return void 0 }

export function init() {
  initHeader()
  initMainText()
  initButtons()

  window.buttons = {
    hide: disableButtons,
    show: enableButtons
  }
}

function initHeader() {
  header = document.getElementById('sub-header')
}

function initMainText() {
  mainText = document.getElementById('main-text')
}

function initButtons() {
  btn01 = document.getElementById('btn-choice-01')
  btn02 = document.getElementById('btn-choice-02')

  btn01.onclick = () => { onChoice('btn01') }
  btn02.onclick = () => { onChoice('btn02') }
}

// Public setters
export function setChoices(choice01, choice02) {
  btn01.innerHTML = choice01
  btn02.innerHTML = choice02
}

export function setHeader(value) {
  header.innerHTML = value
}

export function setMainText(value) {
  mainText.innerHTML = value
}

export function setOnChoiceCallback(callback) {
  onChoice = callback
}

// Handle choice buttons
export function enableButtons() {
  btn01.disabled = false
  btn02.disabled = false
}

export function disableButtons() {
  btn01.disabled = true
  btn02.disabled = true
}