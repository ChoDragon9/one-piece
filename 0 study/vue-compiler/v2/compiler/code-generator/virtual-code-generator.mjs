import {useLoopGuard} from '../helper.mjs';

export const virtualCodeGenerator = ast => {
  const context = {
    virtualCode: [],
    currentAst: ast
  };
  const loopGuard = useLoopGuard();

  while (ast.body.length) {
    switch (true) {
      case context.currentAst.body[0].value === '<':
        generateStartTag(context);
        break;
      case context.currentAst.body[0].value === '</':
        generateEndTag(context);
        break;
      case context.currentAst.body[0].type === 'Tag':
        generateTag(context);
        break;
      case context.currentAst.body[0].type === 'Template':
        generateTemplate(context);
        break;
      case context.currentAst.body[0].type === 'StringConstant':
        generateStringConstant(context);
        break;
    }

    if (loopGuard.isMaxLoop()) {
      loopGuard.log();
      break
    }
  }

  return context.virtualCode
};

const generateStartTag = context => {
  context.virtualCode.push('element([');
  context.currentAst.body.shift();
  context.virtualCode.push(`startElement('${context.currentAst.body[0].value}')`);
  context.currentAst.body.shift();
  context.currentAst.body.shift()
};
const generateEndTag = context => {
  context.currentAst.body.shift();
  context.virtualCode.push(`endElement('${context.currentAst.body[0].value}')`);
  context.currentAst.body.shift();
  context.currentAst.body.shift();
  context.virtualCode.push('])');
  if (context.currentAst.parent) {
    context.currentAst = context.currentAst.parent;
    context.currentAst.body.shift();
  }
};
const generateTag = context => {
  const newAst = context.currentAst.body[0];
  newAst.parent = context.currentAst;
  context.currentAst = newAst
};
const generateTemplate = context => {
  context.virtualCode.push(`template('${context.currentAst.body[0].body[1].value}')`);
  context.currentAst.body.shift()
};
const generateStringConstant = context => {
  context.virtualCode.push(`text('${context.currentAst.body[0].value}')`);
  context.currentAst.body.shift()
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
    {
      type: 'Tag',
      body: [
        { type: 'Symbol', value: '<' },
        { type: 'Keyword', value: 'div' },
        { type: 'Symbol', value: '>' },
        { type: 'StringConstant', value: 'Text' },
        { type: 'Symbol', value: '</' },
        { type: 'Keyword', value: 'div' },
        { type: 'Symbol', value: '>' },
      ]
    },
    { type: 'Symbol', value: '</' },
    { type: 'Keyword', value: 'div' },
    { type: 'Symbol', value: '>' },
  ]
};
const output = virtualCodeGenerator(input);
console.log(output);
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
