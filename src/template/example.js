import { adjective, anAdjective, noun, aNoun, assertionResponse as AR } from '../gen'
import { adjectiveKey as ak, nounKey as nk } from '../db'

export function example() {
  return ['Example', generateMainText(), AR.affirmative(), AR.negative()]
}

function generateMainText() {
  return `There was ${anAdjective(ak.EMOTIONAL)} ${noun(nk.CREATURE)} with ${anAdjective(ak.ITEM)} ${noun(nk.ITEM)} on the ${adjective(ak.TEST)} ${noun(nk.TEST)} with ${aNoun(nk.TEST)}.`
}