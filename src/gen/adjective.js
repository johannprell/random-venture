import * as DB from '../db'
import { addArticle } from '../util'

// Keys correspond to adjective db object
export const adjectiveKey = {
  TEST: 'test',
  EMOTIONAL: 'emotional',
  ITEM: 'item'
}
export function adjective(key) {
  return DB.get(DB.adjective[key])
}

export function anAdjective(key) {
  return addArticle(adjective(key))
}
