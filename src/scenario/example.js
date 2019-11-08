import { 
  adjective,
  anAdjective,
  adjectiveKey as ak,
  noun,
  aNoun,
  nounKey as nk,
  assertionResponse as ar,
  assertionResponseKey as ark
 } from '../gen'

export const example = {
  write: () => {
    return ['Example', generateMainText(), ar(ark.AFFIRMATIVE), ar(ark.NEGATIVE)]
  },
  eval: () => {
    return undefined
  }
}

function generateMainText() {
  return `There was ${anAdjective(ak.EMOTIONAL)} ${noun(nk.CREATURE)} with ${anAdjective(ak.ITEM)} ${noun(nk.ITEM)} on the ${adjective(ak.TEST)} ${noun(nk.TEST)} with ${aNoun(nk.TEST)}.`
}