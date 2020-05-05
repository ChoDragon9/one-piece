import {compiler} from './compiler.js';

const template = '<h1>{{text}}</h1>';
const render = compiler(template);

console.log(render({ text: 'Message' }));
console.log(render({ text: 'Message2' }));
