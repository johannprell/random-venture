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
    'Yes.',
    'Yes!',
    'Yeah!',
    'You only live once!',
    'Today is the day!',
    'For glory!',
    'Let\'s go!',
    'Sound like a great idea.',
    'Splendid idea!',
    'I\'m up for it!',
    'I have a good feeling about this.',
    '\'Twas written in the stars!',
    'Such is my destiny.',
    '\'Tis my calling!',
    '\'Twas meant to be!',
    'Of course.',
    'Sure.',
    'For sure!',
    'Sure...',
    'If you must.',
    'Alright.',
    'ALRIGHT!',
    'I love it.',
    'I\'m intrigued...',
    'I\'m listning...',
    'You have my ear.',
  ],
  neg: [
    'No.',
    'No!',
    'NO!',
    'Hell no.',
    'Nope.',
    'Not going to happen!',
    'Let me think... no.',
    'No thanks!',
    'I think not.',
    'Maybe another time...',
    'Don\'t think so.',
    'This will not stand!',
    'I resent the notion.',
    'It cannot be.',
    'Sorry, I\'ll just...',
    'Beg your pardon?!?',
    'Excuse me!',
    'No you did NOT!',
    'I shall do no such thing.',
    'Do not waste my time!',
    'Do NOT test my patience!',
    'This is preposterous.',
    'Really?',
    'This is less than I expected.',
    'Dissapointed.',
  ],
  amb: [ 
    'Hm...',
    'Right...',
    'Ok?',
    'I... guess?',
    '... maybe.',
    'No matter.',
    'It\'s all the same to me.',
    'What does it matter?',
    'It matters not.',
    'This is of no consequence. My course is set.',
    'Does it make a difference?',
    'Excuse me?',
    'Undecided.',
    'Same difference.',
    'I\'m uncertain.',
    'I don\'t KNOW!'
  ]
}