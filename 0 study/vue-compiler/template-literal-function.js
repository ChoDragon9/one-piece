const render = new Function('createElement', 'state', `return createElement('h1', state.text)`);
// (createElement, state) => {
//   return createElement('h1', state.text)
// }
const createElement = (tag, text) => `<${tag}>${text}</${tag}>`;
const state = {
  text: 'Message'
};
console.log(render(createElement, { text: 'Message' }));
console.log(render(createElement, { text: 'Message2' }));
