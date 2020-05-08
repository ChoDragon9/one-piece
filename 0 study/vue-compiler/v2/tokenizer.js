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
const pushToken = (context, token) => {
  context.tokens.push(token)
  context.originCode = context.originCode.substr(token.length)
}

const tokenizeEndTag = (context) => {
  pushToken(context, SYMBOL.END_OPEN)
}
const tokenizeStartTag = (context) => {
  pushToken(context, SYMBOL.START_OPEN)
}
const tokenizeTag = (context) => {
  if (startsWith(context, SYMBOL.END_OPEN)) {
    tokenizeEndTag(context)
  } else {
    tokenizeStartTag(context)
  }
  const endIndex = context.originCode.indexOf(SYMBOL.CLOSE)
  const keyword = context.originCode.substr(0, endIndex)
  pushToken(context, keyword)
  pushToken(context, SYMBOL.CLOSE)
}
const tokenizeTemplate = (context) => {
  const templateEnd = context.originCode.indexOf(SYMBOL.CLOSE_TEMPLATE) + SYMBOL.CLOSE_TEMPLATE.length
  const template = context.originCode.substr(0, templateEnd)
  pushToken(context, template)
}
const tokenizeString = (context) => {
  const nextSymbolIndex = Math.min(...[
    context.originCode.indexOf(SYMBOL.START_OPEN),
    context.originCode.indexOf(SYMBOL.OPEN_TEMPLATE),
  ].filter(num => num > 0));
  const stringConstant = context.originCode.substr(0, nextSymbolIndex)
  pushToken(context, stringConstant)
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
