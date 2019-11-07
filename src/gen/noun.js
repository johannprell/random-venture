import { addArticle } from '../util'
import * as DB from '../db'

// Keys correspond to noun db object
export const nounKey = {
  TEST: 'test',
  CREATURE: 'creature',
  ITEM: 'item'
}

export function noun(key) {
  return DB.get(DB.noun[key])
}

export function aNoun(key) {
  return addArticle(noun(key))
}
