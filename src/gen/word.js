import { randomInt } from '../util'
import * as DB from '../db'

export function adjective() {
  return get(DB.adjectives.test)
}

export function noun() {
  return get(DB.nouns.test)
}

function get(dbItem) {
  return dbItem[randomInt(0, dbItem.length - 1)]
}