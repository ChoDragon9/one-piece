const generateAttrString = attr => {
  return Object
    .entries(attr)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ')
};
const generateElementString = body => {
  return body
    .map(node => `<${node.tag} ${generateAttrString(node.attr)}></${node.tag}>`)
    .join(`\n\t`);
};
const generator = svgAst => {
  const svgAttr = generateAttrString(svgAst.attr);
  const elements = generateElementString(svgAst.body);
  return `<svg ${svgAttr}>\n${elements}\n</svg>`
};

const input = {
  tag: 'h1',
  children: [
    {type: 'Template', value: 'text'}
  ]
}
const output = generator(input);
// return createElement('h1', state.text)

module.exports = {generator}


