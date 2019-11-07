import * as DB from '../db'

export const assertionResponseKey = {
  AFFIRMATIVE: 'aff',
  NEGATIVE: 'neg',
  AMBIVALENT: 'amb'
}

export function assertionResponse (key) {
  return DB.get(DB.assertionResponse[key])
}
