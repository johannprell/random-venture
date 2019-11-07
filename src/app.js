import * as UI from './ui'
import * as TMPL from './template'

let currentTemplate
window.onload = init

function init() {
  console.log('This is a Random Venture.')
  UI.init()
  currentTemplate = TMPL.introduction
  UI.apply(currentTemplate.write())
  // Game loop only ticks on choice button input
  UI.setOnChoiceCallback(
    evaluateChoice
  )
}

function evaluateChoice(id) {
  console.log(id)
  currentTemplate = currentTemplate.eval(id)
  UI.apply(currentTemplate.write())
}
