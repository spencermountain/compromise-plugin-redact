const nlp = require('/Users/spencer/mountain/compromise')
const dates = require('/Users/spencer/mountain/compromise/plugins/dates')
nlp.extend(require('./src'))
nlp.extend(dates)

let doc = nlp('i gave John Smith 900£ on December 1st in Paris, France.')

// add options for our redaction
let m = doc.redact({
  // dates: '▇',
  organizations: '*',
  // places: false, // false means don't redact
  // accept a function for custom redactions
  // money: val => {
  //   console.log(val)
  //   let num = val.json()
  //   console.log(num)
  //   // +/- 50
  //   return num + Math.random() * 100 - 50
  // },
  // custom
  people: person => {
    if (person.has('Smith')) {
      return 'Mr. T'
    }
    return person
  },
})
m.debug()
