import * as UI from './ui'
import * as SCENARIO from './scenario'
import * as DECK from './deck'

let currentScenario

window.onload = init

function init() {
  console.log('This is a Random Venture.')
  UI.init()
  DECK.init(DECK.drawModes.RANDOM)
  // Game loop only ticks on choice button input - scenario by scenario instead of frame by frame
  // Each tick can be regarded as a state change
  UI.setOnChoiceCallback(
    evaluateChoice
  )
  // Begin with call to action
  currentScenario = SCENARIO.callToAdventure
  UI.apply(currentScenario.write())
}

function evaluateChoice(id) {
  DECK.runProcess(currentScenario.eval(id))
  currentScenario = DECK.drawScenario()
  UI.apply(currentScenario.write())
}
