if (typeof process !== undefined && typeof module !== undefined) {
  let nlp = require('compromise')
  if (process.env.TESTENV === 'prod') {
    nlp.extend(require(`../`))
    nlp.extend(require(`compromise-dates`))
    nlp.extend(require(`compromise-numbers`))
  } else {
    nlp.extend(require(`../src`))
    nlp.extend(require(`compromise-dates`))
    nlp.extend(require(`compromise-numbers`))
  }

  module.exports = nlp
}
