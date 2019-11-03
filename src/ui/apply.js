import {
  setHeader,
  setMainText,
  setChoices,
  enableButtons,
  disableButtons
} from './elements'

let textToPrint = ''
let currentText = ''
let printIndex = 0
let onPrintDone = () => {
  return void 0
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
  setChoices('', '')
  disableButtons()
  onPrintDone = () => {
    enableButtons()
    setChoices(textArray[2], textArray[3])
  }
}

function print(text) {
  textToPrint = text
  currentText = ''
  setMainText(currentText)
  printIndex = 0
  printStep()
}

function printStep() {
  if (printIndex < textToPrint.length) {
    setMainText((currentText += textToPrint[printIndex]))
    printIndex++
    requestAnimationFrame(printStep)
  } else {
    onPrintDone()
  }
}
