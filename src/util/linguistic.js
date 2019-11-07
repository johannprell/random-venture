/**
 * Util for linguistic functions
 */

export function addArticle(word) {
  if('aeiou'.indexOf(word[0].toLowerCase()) !== -1) {
    return `an ${word}`
  }
  else { 
    return `a ${word}` 
  } 
}