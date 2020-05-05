import {lexer} from './lexer.js';
import {parser} from './parser.js';
import {transformer} from './transformer.js';
import {generator} from './generator.js';

export const compiler = (code) => {
  // '<h1>{{text}}</h1>'
  const tokens = lexer(code);
  // [
  //   { type: 'start', value: '<h1>' },
  //   { type: 'template', value: '{{text}}' }
  //   { type: 'end', value: '</h1>' }
  // ]
  const ast = parser(tokens);
  // {
  //   type: 'MarkupLanguage',
  //   value: 'h1',
  //   children: [
  //     {type: 'Template', value: '{{text}}'}
  //   ]
  // }
  const htmlAst = transformer(ast);
  // {
  //   tag: 'h1',
  //   children: [
  //     {type: 'TemplateBinding', value: 'text'}
  //   ]
  // }
  const renderFn = generator(htmlAst);
  // (state) => createElement('h1', state.text)
  return renderFn;
};

const input = '<h1>{{text}}</h1>';
const output = compiler(input);
// console.log(output);
// (state) => createElement('h1', state.text)
