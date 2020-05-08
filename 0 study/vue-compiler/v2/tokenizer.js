const SYMBOL = {
  START_OPEN: '<',
  END_OPEN: '</',
  CLOSE: '>',
  OPEN_TEMPLATE: '{{',
  CLOSE_TEMPLATE: '}}',
}

const tokenizeTag = (originCode, tokens) => {
  const endIndex = originCode.indexOf(SYMBOL.CLOSE)
  const keyword = originCode.substr(0, endIndex)
  tokens.push(keyword)
  tokens.push(SYMBOL.CLOSE)
  return originCode.substr(endIndex + SYMBOL.CLOSE.length)
}
const tokenizeEndTag = (originCode, tokens) => {
  tokens.push(SYMBOL.END_OPEN)
  originCode = originCode.substr(SYMBOL.END_OPEN.length)
  return tokenizeTag(originCode, tokens)
}
const tokenizeStartTag = (originCode, tokens) => {
  tokens.push(SYMBOL.START_OPEN)
  originCode = originCode.substr(SYMBOL.START_OPEN.length)
  return tokenizeTag(originCode, tokens)
}
const tokenizeTemplate = (originCode, tokens) => {
  const templateEnd = originCode.indexOf(SYMBOL.CLOSE_TEMPLATE) + SYMBOL.CLOSE_TEMPLATE.length
  const template = originCode.substr(0, templateEnd)
  tokens.push(template)
  return originCode.substr(templateEnd)
}
const tokenizeString = (originCode, tokens) => {
  const nextSymbolIndex = Math.min(...[
    originCode.indexOf(SYMBOL.START_OPEN),
    originCode.indexOf(SYMBOL.OPEN_TEMPLATE),
  ].filter(num => num > 0));
  const stringConstant = originCode.substr(0, nextSymbolIndex)
  tokens.push(stringConstant)
  return originCode.substr(nextSymbolIndex)
}

const tokenizer = originCode => {
  const tokens = []
  let num = 0
  const MAX_LOOP = 10000
  while (originCode) {
    if (originCode.startsWith(SYMBOL.START_OPEN)) {
      if (originCode.startsWith(SYMBOL.END_OPEN)) {
        originCode = tokenizeEndTag(originCode, tokens)
      } else {
        originCode = tokenizeStartTag(originCode, tokens)
      }
    } else if (originCode.startsWith(SYMBOL.OPEN_TEMPLATE)) {
      originCode = tokenizeTemplate(originCode, tokens)
    } else {
      originCode = tokenizeString(originCode, tokens)
    }

    if (num++ > MAX_LOOP) {
      console.error('MAX_LOOP')
      break
    }
  }
  return tokens
};

const input = `<div>Text {{text}} Text</div>`
const output = tokenizer(input);
console.log(output)
// ['<', 'div', '>', 'Text', '</', 'div', '>']
