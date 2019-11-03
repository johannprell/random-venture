import * as DB from '../db'

// Keys correspond to arrays in adjective db object
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

export function noun(key) {
  return DB.get(DB.noun[key])
}

// Keys correspond to arrays in noun db object
export const nounKey = {
  TEST: 'test',
  CREATURE: 'creature',
  ITEM: 'item'
}
export function aNoun(key) {
  return addArticle(noun(key))
}

function addArticle(word) {
  if('aeiou'.indexOf(word[0].toLowerCase()) !== -1) {
    return `an ${word}`
  }
  else { 
    return `a ${word}` 
  } 
}
