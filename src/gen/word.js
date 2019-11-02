import { randomInt } from '../util'
import * as DB from '../db'

export function adjective(key) {
  return get(DB.adjectives[key])
}

export function anAdjective(key) {
  return addArticle(adjective(key))
}

export function noun(key) {
  return get(DB.nouns[key])
}

export function aNoun(key) {
  return addArticle(noun(key))
}

/**
 * Get a random item from an array of strings
 * @param {string[]} db 
 */
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
