import { adjective, anAdjective, noun, aNoun,  } from './word'
import { adjectiveKey as ak, nounKey as nk } from '../db'
import { randomInt } from '../util'
export { introduction } from './introduction'

export function testGenerator() {
  return `There was ${anAdjective(ak.EMOTIONAL)} ${noun(nk.CREATURE)} with ${anAdjective(ak.ITEM)} ${noun(nk.ITEM)} on the ${adjective(ak.TEST)} ${noun(nk.TEST)} with ${aNoun(nk.TEST)}.`
}

/**
 * Get a random item from an array of strings
 * @param {string[]} db 
 */
export function get(db) {
  return db[randomInt(0, db.length - 1)]
}