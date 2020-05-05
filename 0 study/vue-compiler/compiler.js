const {lexer} = require('./lexer');
const {parser} = require('./parser');
const {transformer} = require('./transformer');
const {generator} = require('./generator');

const compiler = (code) => {
  const tokens = lexer(code);
  // [
  //   { type: 'word', value: 'Paper' },
  //   { type: 'number', value: '100' }
  // ]
  const ast = parser(tokens);
  // {
  //   body: [
  //     {
  //       type: 'CallExpression',
  //       name: 'Paper',
  //       arguments: [
  //         {type: 'NumberLiteral', value: '100'}
  //       ]
  //     }
  //   ],
  //   type: 'Drawing'
  // }
  const svgAst = transformer(ast);
  // {
  //   tag: 'svg',
  //   attr: {
  //     xmlns: 'http://www.w3.org/2000/svg',
  //     viewBox: '0 0 100 100',
  //     version: '1.1',
  //     width: 100,
  //     height: 100
  //   },
  //   body: [
  //     {
  //       tag: 'rect',
  //       attr: {
  //         x: 0, y: 0,
  //         width: 100, height: 100,
  //         fill: 'rgb(0%,0%,0%)'
  //       }
  //     }
  //   ]
  // }
  const svg = generator(svgAst);
  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1" width="100" height="100">
  //   <rect x="0" y="0" width="100" height="100" fill="rgb(0%,0%,0%)"></rect>
  // </svg>
  return svg;
};

const input = '<h1>{{text}}</h1>';
const output = compiler(input);
// (createElement, state) => {
//   return createElement('h1', state.text)
// }
