import * as DB from '../db'

export const word = {
  adjective, anAdjective, noun, aNoun
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
