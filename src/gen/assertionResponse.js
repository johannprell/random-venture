import * as DB from '../db'

export const assertionResponse = {
  affirmative, negative, ambivalent
}

function affirmative() {
  return DB.get(DB.assertionResponse[DB.assertionResponseKey.AFF])
}

function negative() {
  return DB.get(DB.assertionResponse[DB.assertionResponseKey.NEG])
}

function ambivalent() {
  return DB.get(DB.assertionResponse[DB.assertionResponseKey.AMB])
}