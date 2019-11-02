import { get } from './get'
import { assertionResponse as ar, assertionResponseKey as ark } from '../db'

// Create verbose intro, and affirmative / ambivalent response for button texts
export function introduction() {
  return [ generateIntro(), get(ar[ark.AFF]), get(ar[ark.AMB]) ]
}

function generateIntro() {
  return `You find yourself outside the entrance of a cave. While you're sure this is a dangerous place, you are compelled to enter.`
}