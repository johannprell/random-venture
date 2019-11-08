import { assertionResponse, assertionResponseKey } from '../gen'

export const callToAdventure = {
  write: () => {
    return [ 
      'A call to adventure!',
      generateIntro(),
      assertionResponse(assertionResponseKey.AFFIRMATIVE),
      assertionResponse(assertionResponseKey.AMBIVALENT) 
    ]
  },
  eval: () => {
    return undefined
  }
}

function generateIntro() {
  return `You find yourself outside the entrance of a cave. While you're sure this is a dangerous place, you are compelled to enter.`
}