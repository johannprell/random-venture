/**
 * UI
 * One dynamic header, a paragraph of main text and two buttons.
 */

import { example } from '../template'

let header
let mainText
let btn01
let btn02

export function init() {
  initHeader()
  initMainText()
  initButtons()
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

function onChoice(id) {
  console.log('Button press', id)
  console.log('Wise choice.')
  apply(example())
}

function print(text) {
  mainText.innerHTML = text
}

function setChoices(choice01, choice02) {
  btn01.innerHTML = choice01
  btn02.innerHTML = choice02
}

function setHeader(value) {
  header.innerHTML = value
}

/**
 * Applies generated textArray to all elements
 * Text must be formatted as [] with four strings:
 * -- header text
 * -- main text
 * -- button 1 text
 * -- button 2 text
 * @param {string[]} textArray 
 */
export function apply(textArray) {
  setHeader(textArray[0])
  print(textArray[1])
  setChoices(textArray[2], textArray[3])
}
