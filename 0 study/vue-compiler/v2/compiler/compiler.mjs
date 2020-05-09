import {syntaxAnalyzer} from './syntax-analyzer/index.mjs';
import {codeGenerator} from './code-generator/index.mjs';

export const compiler = (originCode) => {
  const ast = syntaxAnalyzer(originCode);
  const renderFn = codeGenerator(ast);
  return renderFn;
};

// const input = `<div>
//   {{text}} Text
//   <div v-if="text">{{text}}</div>
// </div>`;
// const output = compiler(input);
// console.log(output({ text: 'Text' }));
// (state) => {
//   const elem = state.text
//     ? create.element([
//       create.startElement('div'),
//       create.template(state.text),
//       create.endElement('div'),
//     ])
//     : create.noop();
//   create.element([
//     create.startElement('div'),
//     create.text('Text'),
//     create.template(state.text),
//     elem,
//     create.endElement('div'),
//   ])
// }
