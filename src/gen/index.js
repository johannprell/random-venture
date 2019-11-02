import { adjective, noun } from './word'

export function testGenerator() {
  return `This is the ${ adjective() } Test with the ${ noun() } and the ${ adjective() } ${ noun() }`
}