const create = {
  element: (children) => children.join(''),
  startElement: (tag) => `<${tag}>`,
  endElement: (tag) => `</${tag}>`,
  text: (txt) => txt,
  template: (value) => value
}

export const targetCodeGenerator = virtualCode => {
  const targetCode = virtualCode
    .map(code => {
      const comma = code.endsWith(')') ? ',' : '';
      switch (true) {
        case code.startsWith('element'):
          return `create.${code}${comma}`
        case code.startsWith('startElement'):
          return `create.${code}${comma}`
        case code.startsWith('endElement'):
          return `create.${code}${comma}`
        case code.startsWith('text'):
          return `create.${code}${comma}`
        case code.startsWith('template'):
          return `create.${code.replace(`('`, `(state.`).replace(`')`, `)`)}${comma}`
        default:
          return `${code}${comma}`
      }
    })
    .join('')
    .replace(/,$/, '')
  return (state) => new Function(
    'create',
    'state',
    `return ${targetCode}`
  )(create, state);
};

// const input = [
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
// ];
// const output = targetCodeGenerator(input);
// console.log(output)
// (state) => create.element([
//   create.startElement('div'),
//   create.text('Text'),
//   create.template(state.text),
//   create.element([
//     create.startElement('div'),
//     create.text('Text'),
//     create.endElement('div'),
//   ]),
//   create.endElement('div'),
// ]),
