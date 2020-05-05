const generator = htmlAst => {
  const [child] = htmlAst.children;
  const text = child.type === 'TemplateBinding'
    ? `state.${child.value}`
    : `'${child.value}'`;
  return `return createElement('${htmlAst.tag}', ${text})`
};

const input = {
  tag: 'h1',
  children: [
    {type: 'TemplateBinding', value: 'text'}
  ]
}
const output = generator(input);
// console.log(output);
// return createElement('h1', state.text)

module.exports = {generator}


