const SYMBOL = {
  START_OPEN: '<',
  END_OPEN: '</',
  CLOSE: '>',
  OPEN_TEMPLATE: '{{',
  CLOSE_TEMPLATE: '}}',
}

const useLoopGuard = () => {
  let num = 0
  const MAX_LOOP = 10000
  const isMaxLoop = () => num++ > MAX_LOOP
  return isMaxLoop
}
const startsWith = (context, symbol) => {
  return context.originCode.startsWith(symbol)
}

const tokenizeEndTag = (context) => {
  context.tokens.push(SYMBOL.END_OPEN)
  context.originCode = context.originCode.substr(SYMBOL.END_OPEN.length)
}
const tokenizeStartTag = (context) => {
  context.tokens.push(SYMBOL.START_OPEN)
  context.originCode = context.originCode.substr(SYMBOL.START_OPEN.length)
}
const tokenizeTag = (context) => {
  if (startsWith(context, SYMBOL.END_OPEN)) {
    tokenizeEndTag(context)
  } else {
    tokenizeStartTag(context)
  }
  const endIndex = context.originCode.indexOf(SYMBOL.CLOSE)
  const keyword = context.originCode.substr(0, endIndex)
  context.tokens.push(keyword)
  context.tokens.push(SYMBOL.CLOSE)
  context.originCode = context.originCode.substr(endIndex + SYMBOL.CLOSE.length)
}
const tokenizeTemplate = (context) => {
  const templateEnd = context.originCode.indexOf(SYMBOL.CLOSE_TEMPLATE) + SYMBOL.CLOSE_TEMPLATE.length
  const template = context.originCode.substr(0, templateEnd)
  context.tokens.push(template)
  context.originCode = context.originCode.substr(templateEnd)
}
const tokenizeString = (context) => {
  const nextSymbolIndex = Math.min(...[
    context.originCode.indexOf(SYMBOL.START_OPEN),
    context.originCode.indexOf(SYMBOL.OPEN_TEMPLATE),
  ].filter(num => num > 0));
  const stringConstant = context.originCode.substr(0, nextSymbolIndex)
  context.tokens.push(stringConstant)
  context.originCode = context.originCode.substr(nextSymbolIndex)
}

const tokenizer = originCode => {
  const context = {
    originCode,
    tokens: []
  }
  const isMaxLoop = useLoopGuard()

  while (context.originCode) {
    switch (true) {
      case startsWith(context, SYMBOL.START_OPEN):
        tokenizeTag(context)
        break
      case startsWith(context, SYMBOL.OPEN_TEMPLATE):
        tokenizeTemplate(context)
        break
      default:
        tokenizeString(context)
        break
    }

    if (isMaxLoop()) {
      console.error('MAX_LOOP')
      break
    }
  }
  return context.tokens
};

const input = `<div>{{text}} Text<div>{{text}}</div></div>`
const output = tokenizer(input);
console.log(output)
// ['<', 'div', '>', 'Text', '</', 'div', '>']
