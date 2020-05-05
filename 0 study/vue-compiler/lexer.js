const LEXER_TYPES = {
  START: 'start',
  END: 'end',
  TEMPLATE: 'template',
  TEXT: 'text',
};

const lexer = code => {
  const matched = code.match(/(<h[1-6]>)|(\{\{[a-zA-Z]{0,}\}\})|(<\/h[1-6]>)/g);
  if (matched) {
    return matched.map((value) => {
      let type = LEXER_TYPES.TEXT;
      switch (true) {
        case value.startsWith('</') && value.endsWith('>'):
          type = LEXER_TYPES.END;
          break;
        case value.startsWith('<') && value.endsWith('>'):
          type = LEXER_TYPES.START;
          break;
        case value.startsWith('{{') && value.endsWith('}}'):
          type = LEXER_TYPES.TEMPLATE;
          break;
      }
      return {type, value}
    });
  }
};

const input = '<h1>{{text}}</h1>';
const output = lexer(input);
// console.log(output)
// [
//   { type: 'start', value: '<h1>' },
//   { type: 'template', value: '{{text}}' },
//   { type: 'end', value: '</h1>' }
// ]

module.exports = {lexer}
