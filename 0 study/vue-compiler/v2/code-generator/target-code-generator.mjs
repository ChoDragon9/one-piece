const createElement = (tag, text) => `<${tag}>${text}</${tag}>`;

export const targetCodeGenerator = htmlAst => {
  const [child] = htmlAst.children;
  const text = child.type === 'TemplateBinding'
    ? `state.${child.value}`
    : `'${child.value}'`;
  return (state) => new Function(
    'createElement',
    'state',
    `return createElement('${htmlAst.tag}', ${text})`
  )(createElement, state);
};

const input = [
  "createElement([",
  "createText('Text')",
  "createTemplate('text')",
  "createElement([",
  "createText('Text')",
  "])",
  "])"
]
const output = targetCodeGenerator(input);
// console.log(output)
// (state) => createElement([
//   createStartElement('div'),
//   createText('Text')
//   createTemplate(state.text)
//   createEndElement('div'),
// ])


