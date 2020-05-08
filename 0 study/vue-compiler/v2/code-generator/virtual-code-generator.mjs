import {useLoopGuard} from '../helper.mjs';

export const virtualCodeGenerator = ast => {
  const virtualCode = [];
  const loopGuard = useLoopGuard();
  let currentAst = ast;

  while (ast.body.length) {
    if (currentAst.body[0].value === '<') {
      virtualCode.push('element([');
      currentAst.body.shift();
      virtualCode.push(`startElement('${currentAst.body[0].value}')`);
      currentAst.body.shift();
      currentAst.body.shift()
    } else if (currentAst.body[0].value === '</') {
      currentAst.body.shift();
      virtualCode.push(`endElement('${currentAst.body[0].value}')`);
      currentAst.body.shift();
      currentAst.body.shift()
      virtualCode.push('])');
    } else if (currentAst.body[0].type === 'Template') {
      virtualCode.push(`template('${currentAst.body[0].body[1].value}')`);
      currentAst.body.shift()
    } else if (currentAst.body[0].type === 'StringConstant') {
      virtualCode.push(`text('${currentAst.body[0].value}')`);
      currentAst.body.shift()
    }

    if (loopGuard.isMaxLoop()) {
      loopGuard.log();
      break
    }
  }

  return virtualCode
};

const input = {
  type: 'Tag',
  body: [
    { type: 'Symbol', value: '<' },
    { type: 'Keyword', value: 'div' },
    { type: 'Symbol', value: '>' },
    { type: 'StringConstant', value: 'Text' },
    {
      type: 'Template',
      body: [
        { type: 'Symbol', value: '{{' },
        { type: 'StringConstant', value: 'text' },
        { type: 'Symbol', value: '}}' },
      ]
    },
    { type: 'Symbol', value: '<' },
    { type: 'Keyword', value: 'div' },
    { type: 'Symbol', value: '>' },
    { type: 'StringConstant', value: 'Text' },
    { type: 'Symbol', value: '</' },
    { type: 'Keyword', value: 'div' },
    { type: 'Symbol', value: '>' },
    { type: 'Symbol', value: '</' },
    { type: 'Keyword', value: 'div' },
    { type: 'Symbol', value: '>' },
  ]
};
const output = virtualCodeGenerator(input);
// console.log(output);
// Step 1.
// [
//   'element([',
//   "startElement('div')",
//   "text('Text')",
//   "template('text')",
//   'element([',
//   "startElement('div')",
//   "text('Text')",
//   "endElement('div')",
//   '])',
//   "endElement('div')",
//   '])'
// ]
