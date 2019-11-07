import { assertionResponse, assertionResponseKey } from '../gen'

import { example } from './example'

export const introduction = {
  write: () => {
    return [ 
      'A call to adventure!',
      generateIntro(),
      assertionResponse(assertionResponseKey.AFFIRMATIVE),
      assertionResponse(assertionResponseKey.AMBIVALENT) 
    ]
  },
  eval: () => {
    return example
  }
}

function generateIntro() {
  return `You find yourself outside the entrance of a cave. While you're sure this is a dangerous place, you are compelled to enter.`
}