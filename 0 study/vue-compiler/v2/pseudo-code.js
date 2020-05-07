const compiler = (originCode) => {
  const targetCode = pipe(
    syntaxAnalyzer,
    codeGenerator
  )(originCode)
  return targetCode
}

// Step 1
const syntaxAnalyzer = (originCode) => {
  // ast: Abstract Syntax Tree
  const ast = pipe(
    tokenizer,
    parser
  )(originCode)
  return ast
}

const tokenizer = (originCode) => {
  const tokens = []
  return tokens
}

const parser = (tokens) => {
  // ast: Abstract Syntax Tree
  const ast = {}
  return ast
}

// Step 2
const codeGenerator = (ast) => {
  const targetCode = pipe(
    virtualCodeGenerator,
    targetCodeGenerator,
  )(ast)
  return targetCode
}

const virtualCodeGenerator = (ast) => {
  const virtualCode = {}
  return virtualCode
}

const targetCodeGenerator = (virtualCode) => {
  const targetCode = ''
  return targetCode
}

const pipe = (...fns) => (arg) =>
  fns.reduce((result, fn) => fn(result), arg)
console.log(compiler())
