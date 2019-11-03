import { assertionResponse as ar, assertionResponseKey as ark , get} from '../db'

export function introduction() {
  return [ 'A call to adventure!', generateIntro(), get(ar[ark.AFF]), get(ar[ark.AMB]) ]
}

function generateIntro() {
  return `You find yourself outside the entrance of a cave. While you're sure this is a dangerous place, you are compelled to enter.`
}