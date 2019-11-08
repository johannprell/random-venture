/**
 * Deck functionality
 */

import { drawModes } from './drawModes'
import { randomInt } from '../util'
import * as SCENARIO from '../scenario'

let scenarioDeck
let drawMode

/**
 * @param {drawMode} mode 
 */
export function init(mode) {
  drawMode = mode
  scenarioDeck = [
    SCENARIO.example,
    SCENARIO.example,
    SCENARIO.example
  ]
}

/**
 * @param {Function} process 
 */
export function runProcess(process) {
  if(process) process(scenarioDeck)
}

export function drawScenario() {
  switch(drawMode) {
    case drawModes.RANDOM: 
      return drawRandomScenario()
    case drawModes.TOP:
      return drawTopScenario()
    default:
      return drawRandomScenario()
  }
}

function drawRandomScenario() {
  return scenarioDeck[randomInt(0, scenarioDeck.length - 1)]
}

function drawTopScenario() {
  return scenarioDeck[0]
}