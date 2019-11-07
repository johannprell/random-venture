import * as UI from './ui'
import * as TMPL from './template'

let currentTemplate
window.onload = init

function init() {
  console.log('This is a Random Venture.')
  UI.init()
  currentTemplate = TMPL.introduction()
  UI.apply(currentTemplate)
  // Game loop only ticks on choice button input
  UI.setOnChoiceCallback(
    evaluateChoice
  )
}

function evaluateChoice(id) {
  console.log(id)
  UI.apply(TMPL.example())
}
