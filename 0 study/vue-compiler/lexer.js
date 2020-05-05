const lexer = code => {
  const [, start, template, end] = code.match(/(<h[1-6]>)(.*?)(<\/h[1-6]>)/);
  return [
    { type: 'start', value: start },
    { type: 'template', value: template },
    { type: 'end', value: end }
  ]
};

const input = '<h1>{{text}}</h1>';
const output = lexer(input);
// [
//   { type: 'start', value: '<h1>' },
//   { type: 'template', value: '{{text}}' },
//   { type: 'end', value: '</h1>' }
// ]

module.exports = {lexer}
