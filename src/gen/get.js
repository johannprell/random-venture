import { randomInt } from '../util'

/**
 * Get a random item from an array of strings
 * @param {string[]} db 
 */
export function get(db) {
  return db[randomInt(0, db.length - 1)]
}