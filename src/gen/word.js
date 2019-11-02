import { randomInt } from '../util'
import * as DB from '../db'

export function adjective() {
  return get(DB.adjectives.test)
}

export function anAdjective() {
  return addArticle(adjective())
}

export function noun() {
  return get(DB.nouns.test)
}

export function aNoun() {
  return addArticle(noun())
}

function get(db) {
  return db[randomInt(0, db.length - 1)]
}

function addArticle(word) {
  if('aeiou'.indexOf(word[0].toLowerCase()) !== -1) {
    return `an ${word }`
  }
  else { 
    return `a ${ word }` 
  } 
}
