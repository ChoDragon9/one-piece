import {useLoopGuard} from './helper.mjs';

export const parser = tokens => {
  const ast = {
    type: '',
    body: []
  };
  const loopGuard = useLoopGuard();
  return ast
};

const input = ['<', 'div', '>', 'Text', '</', 'div', '>'];
const output = parser(input);

console.log(output)
