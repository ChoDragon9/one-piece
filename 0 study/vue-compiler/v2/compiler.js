import {syntaxAnalyzer} from './syntax-analyzer/index.mjs';
import {transformer} from './code-generator/transformer.mjs';
import {generator} from './code-generator/generator.mjs';

/*
Grammar
Keyword: 'div' | 'span'
Symbol: '<' | '>' | '</' | '{' | '}'
StringConstant: 문자열

Tag: '<' keyword '>' (Tag | Template | StringConstant) '</' keyword '>'
Template: '{{' stringConstant '}}'
*/

export const compiler = (originCode) => {
  const ast = syntaxAnalyzer(originCode);
  const htmlAst = transformer(ast);
  // Step 1.
  // createElement([
  //   createStartElement('div'),
  //   createText('Text')
  //   createTemplate('text')
  //   createEndElement('div'),
  // ])
  const renderFn = generator(htmlAst);
  // (state) => createElement([
  //   createStartElement('div'),
  //   createText('Text')
  //   createTemplate(state.text)
  //   createEndElement('div'),
  // ])
  return renderFn;
};

const input = '<h1>{{text}}</h1>';
const output = compiler(input);
// console.log(output);
