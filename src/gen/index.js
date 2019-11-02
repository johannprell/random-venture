import { adjective, anAdjective, noun, aNoun,  } from './word'
import { adjectiveKey as ak, nounKey as nk } from '../db'
export { introduction } from './introduction'

export function testGenerator() {
  return `There was ${anAdjective(ak.EMOTIONAL)} ${noun(nk.CREATURE)} with ${anAdjective(ak.ITEM)} ${noun(nk.ITEM)} on the ${adjective(ak.TEST)} ${noun(nk.TEST)} with ${aNoun(nk.TEST)}.`
}