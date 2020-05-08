export const useLoopGuard = () => {
  const MAX_LOOP = 10000;
  let num = 0;
  const isMaxLoop = () => num++ > MAX_LOOP;
  return {isMaxLoop}
};
