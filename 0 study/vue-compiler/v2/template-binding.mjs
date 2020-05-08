import {compiler} from './compiler.mjs';

const template = `<div>
  {{text}} Text
  <div>{{text}}</div>
</div>`;
const render = compiler(template);

console.log(render({ text: 'Message' }));
// <h1>Message</h1>
console.log(render({ text: 'Message2' }));
// <h1>Message2</h1>
