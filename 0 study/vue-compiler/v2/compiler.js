import {tokenizer} from './tokenizer.js';
import {parser} from './parser.js';
import {transformer} from './transformer.js';
import {generator} from './generator.js';

/*
Grammar
Keyword: 'div' | 'span'
Symbol: '<' | '>' | '</' | '{' | '}'
StringConstant: 문자열

Tag: '<' keyword '>' (Tag | Template | StringConstant) '</' keyword '>'
Template: '{{' stringConstant '}}'
*/

export const compiler = (code) => {
  // Step 1.
  // `<div>Text</div>`
  // Step 2.
  // `<div>{{text}} Text</div>`
  // Step 3.
  // `<div>{{text}} Text<div>{{text}}</div></div>`
  // Step 4.
  // `<div>
  //   {{text}} Text
  //   <div>{{text}}</div>
  // </div>`
  const tokens = tokenizer(code);
  // Step 1.
  // ['<', 'div', '>', 'Text', '</', 'div', '>']
  const ast = parser(tokens);
  // Step 1.
  // {
  //   type: 'Tag',
  //   body: [
  //     { type: 'Symbol', value: '<' },
  //     { type: 'Keyword', value: 'div' },
  //     { type: 'Symbol', value: '>' },
  //     { type: 'Symbol', value: '</' },
  //     { type: 'StringConstant', value: 'Text' },
  //     { type: 'Symbol', value: '</' },
  //     { type: 'Keyword', value: 'div' },
  //     { type: 'Symbol', value: '>' },
  //   ]
  // }
  const htmlAst = transformer(ast);
  // Step 1.
  // createElement([
  //   createStartElement('div'),
  //   createText('Text')
  //   createEndElement('div'),
  // ])
  const renderFn = generator(htmlAst);
  // (state) => createElement([
  //   createStartElement('div'),
  //   createText('Text')
  //   createEndElement('div'),
  // ])
  return renderFn;
};

const input = '<h1>{{text}}</h1>';
const output = compiler(input);
// console.log(output);
