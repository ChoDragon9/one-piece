import {useLoopGuard} from './helper.mjs';

const pushTag = (currentAst, tokens) => {
  currentAst.body.push({
    type: 'Symbol',
    value: tokens.shift()
  });
  currentAst.body.push({
    type: 'Keyword',
    value: tokens.shift()
  });
  currentAst.body.push({
    type: 'Symbol',
    value: tokens.shift()
  })
};

export const parser = tokens => {
  const ast = {
    type: '',
    body: [],
    parent: null
  };
  const loopGuard = useLoopGuard();
  let currentAst = ast;

  while(tokens.length) {
    if (tokens[0].startsWith('<')) {
      if (tokens[0] === '</') {
        pushTag(currentAst, tokens);
        currentAst = currentAst.parent
      } else {
        if (currentAst.type === '') {
          currentAst.type = 'Tag'
        } else {
          const newAst = {
            type: 'Tag',
            body: [],
            parent: currentAst
          };
          currentAst.body.push(newAst);
          currentAst = newAst
        }
        pushTag(currentAst, tokens)
      }
    } else if(tokens[0] === '{{') {
      currentAst.body.push({
        type: 'Symbol',
        value: tokens.shift()
      });
      currentAst.body.push({
        type: 'Keyword',
        value: tokens.shift()
      });
      currentAst.body.push({
        type: 'Symbol',
        value: tokens.shift()
      })
    } else {
      currentAst.body.push({
        type: 'StringConstant',
        value: tokens.shift()
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
