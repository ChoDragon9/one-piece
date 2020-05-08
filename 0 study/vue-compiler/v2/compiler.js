import {syntaxAnalyzer} from './syntax-analyzer/index.mjs';
import {virtualCodeGenerator} from './code-generator/virtual-code-generator.mjs';
import {targetCodeGenerator} from './code-generator/target-code-generator.mjs';

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
  const htmlAst = virtualCodeGenerator(ast);
  const renderFn = targetCodeGenerator(htmlAst);
  return renderFn;
};

const input = '<h1>{{text}}</h1>';
const output = compiler(input);
// console.log(output);
