// Html elements
let container
let header
let mainText
let btn01
let btn02
// Hook into choice buttons
let onChoice = () => { return void 0 }

export function init() {
  container = document.getElementById('container')
  initHeader()
  initMainText()
  initButtons()

  // Global debug object
  window.buttons = {
    hide: disableButtons,
    show: enableButtons,
    setChoices 
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
  btn01.innerText = choice01
  btn02.innerText = choice02
}

export function setHeader(value) {
  header.innerText = value
}

export function setMainText(value) {
  mainText.innerText = value
}

export function setOnChoiceCallback(callback) {
  onChoice = callback
}

// Handle choice buttons
export function enableButtons() {
  container.appendChild(btn01)
  container.appendChild(btn02)
}

export function disableButtons() {
  container.removeChild(btn01)
  container.removeChild(btn02)
}