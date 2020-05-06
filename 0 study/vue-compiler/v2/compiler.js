import {lexer} from './lexer.js';
import {parser} from './parser.js';
import {transformer} from './transformer.js';
import {generator} from './generator.js';

// Formal Grammar
// S ::= <Tag>
// <Tag> ::= <Start> <End>
//   | <Text>
//   | <Start> <Tag> <End>
// <Start> ::= `<`<Text>`>`
// <End> ::= `</`<Text>`>`
// <Text> ::= string | number

export const compiler = (code) => {
  // `<div>
  //   {{text}} Text
  //   <div>{{text}}</div>
  // </div>`
  const tokens = lexer(code);
  // [
  //   { type: 'Start', value: '<div>' },
  //   { type: 'Text', value: '{{text}} Text' },
  //   { type: 'Start', value: '<div>' },
  //   { type: 'Text', value: '{{text}}' },
  //   { type: 'End', value: '</div>' },
  //   { type: 'End', value: '</div>' }
  // ]
  const ast = parser(tokens);
  // {
  //   type: 'MarkupLanguage',
  //   body: [
  //     { type: 'StartTag', value: '<div>' },
  //     {
  //       type: 'Content',
  //       body: [
  //         { type: 'Text', value: '{{text}} Text' },
  //         { type: 'StartTag', value: '<div>' },
  //         {
  //           type: 'Content',
  //           body: [
  //             { type: 'Text', value: '{{text}}' },
  //           ]
  //         },
  //         { type: 'EndTag', value: '</div>' },
  //       ]
  //     },
  //     { type: 'EndTag', value: '</div>' }
  //   ]
  // }
  const htmlAst = transformer(ast);
  // {
  //   type: 'Element',
  //   children: [
  //     {type: 'StartTag', value: '<div>'},
  //     {
  //       type: 'Element',
  //       children: [
  //         {type: 'Template', value: '{{text}}'},
  //         {type: 'Text', value: ' Text'},
  //         {type: 'StartTag', value: '<div>'},
  //         {
  //           type: 'Element',
  //           children: [
  //             {type: 'Template', value: '{{text}}'},
  //           ]
  //         },
  //         {type: 'EndTag', value: '</div>'}
  //       ]
  //     },
  //     {type: 'EndTag', value: '</div>'}
  //   ]
  // }
  const renderFn = generator(htmlAst);
  // (state) => createElement([
  //   createStartElement('div'),
  //   createElement([
  //     createTemplate(state.text),
  //     createText(' Text'),
  //     createElement([
  //       createStartElement('div'),
  //       createTemplate(state.text),
  //       createEndElement('div'),
  //     ]),
  //   ]),
  //   createEndElement('div'),
  // ])
  return renderFn;
};

const input = '<h1>{{text}}</h1>';
const output = compiler(input);
// console.log(output);
