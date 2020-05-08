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

const pushTag = (context) => {
  context.currentAst.body.push({
    type: SYNTAX_TYPE.SYMBOL,
    value: context.tokens.shift()
  });
  context.currentAst.body.push({
    type: SYNTAX_TYPE.KEYWORD,
    value: context.tokens.shift()
  });
  context.currentAst.body.push({
    type: SYNTAX_TYPE.SYMBOL,
    value: context.tokens.shift()
  })
};

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
    if (context.tokens[0].startsWith(SYMBOL.START_OPEN)) {
      if (context.tokens[0] === SYMBOL.END_OPEN) {
        pushTag(context);
        context.currentAst = context.currentAst.parent
      } else {
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
      }
    } else if(context.tokens[0] === SYMBOL.OPEN_TEMPLATE) {
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
    } else {
      context.currentAst.body.push({
        type: SYNTAX_TYPE.STRING_CONSTANT,
        value: context.tokens.shift()
      })
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
