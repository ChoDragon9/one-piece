import {syntaxAnalyzer} from './syntax-analyzer/index.mjs';
import {codeGenerator} from './code-generator/index.mjs';

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
  const renderFn = codeGenerator(ast);
  return renderFn;
};

const input = `<div>
  {{text}} Text
  <div>{{text}}</div>
</div>`;
const output = compiler(input);
console.log(output({ text: 'Text' }));
