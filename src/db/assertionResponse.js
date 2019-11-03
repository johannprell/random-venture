/**
 * An assertionResponse in this context:
 * - yes / no / maybe answer to a question or notion
 * - can be general, but biased towards 'is this a good idea?'
 */

// Responses can be affirmative, negative or ambivalent
export const assertionResponseKey = {
  AFF: 'aff',
  NEG: 'neg',
  AMB: 'amb'
}

export const assertionResponse = {
  aff: [
    'Yes!',
    'Yeah!',
    'YOLO!',
    'Let\'s go!',
    'Sound like a great idea.',
    'I\'m up for it!'
  ],
  neg: [
    'Hell no.',
    'Nope.',
    'No thanks!',
    'Maybe another time...',
    'Don\'t think so.'
  ],
  amb: [ 
    'Hm...',
    'Right...',
    'Ok?',
    'I... guess?' 
  ]
}