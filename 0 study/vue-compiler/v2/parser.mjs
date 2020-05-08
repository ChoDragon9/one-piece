import {useLoopGuard} from './helper.mjs';

export const parser = tokens => {
  const ast = {
    type: '',
    body: []
  };
  const loopGuard = useLoopGuard();

  while(tokens.length) {
    if (loopGuard.isMaxLoop()) {
      loopGuard.log();
      break
    }
  }

  return ast
};

const input = ['<', 'div', '>', 'Text', '</', 'div', '>'];
const output = parser(input);

console.log(output);
