import {useLoopGuard} from '../helper.mjs';

const SYMBOL = {
  START_OPEN: '<',
  END_OPEN: '</',
  OPEN_TEMPLATE: '{{',
};
const SYNTAX_TYPE = {
  SYMBOL: 'Symbol',
  KEYWORD: 'Keyword',
  TAG: 'Tag',
  TEMPLATE: 'Template',
  STRING_CONSTANT: 'StringConstant',
};

const pushType = (context, types) => {
  types.forEach(type => {
    context.currentAst.body.push({
      type,
      value: context.tokens.shift()
    });
  })
};
const pushTag = context => {
  pushType(context, [
    SYNTAX_TYPE.SYMBOL,
    SYNTAX_TYPE.KEYWORD,
    SYNTAX_TYPE.SYMBOL,
  ]);
};

const parseEndTag = context => {
  pushTag(context);
  context.currentAst = context.currentAst.parent
};

const parseStartTag = context => {
  if (context.currentAst.type === '') {
    context.currentAst.type = SYNTAX_TYPE.TAG
  } else {
    const newAst = {
      type: SYNTAX_TYPE.TAG,
      body: [],
      parent: context.currentAst
    };
    context.currentAst.body.push(newAst);
    context.currentAst = newAst
  }
  pushTag(context)
};

const parseTag = context => {
  if (context.tokens[0] === SYMBOL.END_OPEN) {
    parseEndTag(context);
  } else {
    parseStartTag(context)
  }
};

const parseTemplate = context => {
  const newAst = {
    type: SYNTAX_TYPE.TEMPLATE,
    body: [
      { type: SYNTAX_TYPE.SYMBOL, value: context.tokens.shift() },
      { type: SYNTAX_TYPE.KEYWORD, value: context.tokens.shift() },
      { type: SYNTAX_TYPE.SYMBOL, value: context.tokens.shift() },
    ],
    parent: context.currentAst
  };
  context.currentAst.body.push(newAst);
};

const parseStringConstant = context => {
  context.currentAst.body.push({
    type: SYNTAX_TYPE.STRING_CONSTANT,
    value: context.tokens.shift()
  })
};

const currentTokenTag = context => context.tokens[0].startsWith(SYMBOL.START_OPEN);
const currentTokenTemplate = context => context.tokens[0] === SYMBOL.OPEN_TEMPLATE;

export const parser = tokens => {
  const ast = {
    type: '',
    body: [],
    parent: null
  };
  const context = {
    tokens,
    currentAst: ast
  };
  const loopGuard = useLoopGuard();

  while(context.tokens.length) {
    switch (true) {
      case currentTokenTag(context):
        parseTag(context);
        break;
      case currentTokenTemplate(context):
        parseTemplate(context);
        break;
      default:
        parseStringConstant(context);
        break;
    }

    if (loopGuard.isMaxLoop()) {
      loopGuard.log();
      break
    }
  }

  return ast
};

const input = [
  '<','div','>',
  '{{','text','}}',
  ' Text',
  '<','div','>',
  '{{','text','}}',
  '</','div','>',
  '</','div','>'
];
const output = parser(input);

console.log(output);
