const {lexer} = require('./lexer');
const {parser} = require('./parser');
const {transformer} = require('./transformer');
const {generator} = require('./generator');

const compiler = (code) => {
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
  //     {type: 'Template', value: 'text'}
  //   ]
  // }
  const renderFunction = generator(htmlAst);
  // return createElement('h1', state.text)
  return renderFunction;
};

const input = '<h1>{{text}}</h1>';
const output = compiler(input);
// return createElement('h1', state.text)
