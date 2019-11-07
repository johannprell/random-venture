import { assertionResponse, assertionResponseKey } from '../gen'

export function introduction() {
  return [ 
    'A call to adventure!',
    generateIntro(),
    assertionResponse(assertionResponseKey.AFFIRMATIVE),
    assertionResponse(assertionResponseKey.AMBIVALENT) 
  ]
}

function generateIntro() {
  return `You find yourself outside the entrance of a cave. While you're sure this is a dangerous place, you are compelled to enter.`
}