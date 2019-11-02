import { adjective, anAdjective, noun, aNoun } from './word'

export function testGenerator() {
  return `This is ${ anAdjective() } Test with ${ aNoun() } and the ${ adjective() } ${ noun() }`
}