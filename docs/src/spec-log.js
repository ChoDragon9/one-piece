/*
specLog('<message>', function () {
})
// Last Line
logResult()
*/

let result = true
const specLog = (txt, fn) => {
  console.log('------------------------')
  console.log(txt)
  try {
    if (fn()) {
      console.log('[SUCCESS] ', txt)
    } else {
      console.error('[FAIL] ', txt)
      result = false
    }
  } catch (e) {
    result = false
    console.error(e)
  }
  console.log('------------------------')
}

const logResult = () => {
  console.log('Total Result: ', result ? 'SUCCESS' : 'FAIL')
}

module.exports = {specLog, logResult}