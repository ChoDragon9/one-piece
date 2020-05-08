import {compiler} from './compiler.mjs';

console.time('compiler')
const template = `<div>
  {{text}} Text
  <div>{{text}}</div>
</div>`;
const render = compiler(template);

console.log(render({ text: 'Message' }));
console.timeEnd('compiler')
// <h1>Message</h1>
console.time('compiler')
console.log(render({ text: 'Message2' }));
console.timeEnd('compiler')
// <h1>Message2</h1>
