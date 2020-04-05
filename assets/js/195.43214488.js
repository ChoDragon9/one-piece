(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{484:function(t,n,s){"use strict";s.r(n);var a=s(29),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"pure-js-character-encoding-conversion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pure-js-character-encoding-conversion"}},[t._v("#")]),t._v(" Pure JS character encoding conversion "),s("a",{attrs:{href:"https://travis-ci.org/ashtuchkin/iconv-lite",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/ashtuchkin/iconv-lite.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("Doesn't need native code compilation. Works on Windows and in sandboxed environments like "),s("a",{attrs:{href:"http://c9.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cloud9"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("Used in popular projects like "),s("a",{attrs:{href:"https://github.com/expressjs/body-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express.js (body_parser)"),s("OutboundLink")],1),t._v(",\n"),s("a",{attrs:{href:"http://gruntjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grunt"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"http://www.nodemailer.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodemailer"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"http://yeoman.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yeoman"),s("OutboundLink")],1),t._v(" and others.")]),t._v(" "),s("li",[t._v("Faster than "),s("a",{attrs:{href:"https://github.com/bnoordhuis/node-iconv",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-iconv"),s("OutboundLink")],1),t._v(" (see below for performance comparison).")]),t._v(" "),s("li",[t._v("Intuitive encode/decode API")]),t._v(" "),s("li",[t._v("Streaming support for Node v0.10+")]),t._v(" "),s("li",[t._v("[Deprecated] Can extend Node.js primitives (buffers, streams) to support all iconv-lite encodings.")]),t._v(" "),s("li",[t._v("In-browser usage via "),s("a",{attrs:{href:"https://github.com/substack/node-browserify",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browserify"),s("OutboundLink")],1),t._v(" (~180k gzip compressed with Buffer shim included).")]),t._v(" "),s("li",[t._v("Typescript "),s("a",{attrs:{href:"https://github.com/ashtuchkin/iconv-lite/blob/master/lib/index.d.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("type definition file"),s("OutboundLink")],1),t._v(" included.")]),t._v(" "),s("li",[t._v("React Native is supported (need to explicitly "),s("code",[t._v("npm install")]),t._v(" two more modules: "),s("code",[t._v("buffer")]),t._v(" and "),s("code",[t._v("stream")]),t._v(").")]),t._v(" "),s("li",[t._v("License: MIT.")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/packages/iconv-lite/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://nodei.co/npm/iconv-lite.png?downloads=true&downloadRank=true",alt:"NPM Stats"}}),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h3",{attrs:{id:"basic-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-api"}},[t._v("#")]),t._v(" Basic API")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iconv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iconv-lite'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert from an encoded buffer to js string.")]),t._v("\nstr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x68")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x6c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x6c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x6f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win1251'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert from js string to an encoded buffer.")]),t._v("\nbuf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sample input string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win1251'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Check if encoding is supported")]),t._v("\niconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodingExists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"us-ascii"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"streaming-api-node-v0-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#streaming-api-node-v0-10"}},[t._v("#")]),t._v(" Streaming API (Node v0.10+)")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Decode stream (from binary stream to js strings)")]),t._v("\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" converterStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win1251'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("converterStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    converterStream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something with decoded strings, chunk-by-chunk.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert encoding streaming example")]),t._v("\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-in-win1251.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win1251'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ucs2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWriteStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-in-ucs2.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sugar: all encode/decode streams have .collect(cb) method to accumulate data.")]),t._v("\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win1251'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" body "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// full request body string")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"deprecated-extend-node-js-own-encodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-extend-node-js-own-encodings"}},[t._v("#")]),t._v(" [Deprecated] Extend Node.js own encodings")]),t._v(" "),s("blockquote",[s("p",[t._v("NOTE: This doesn't work on latest Node versions. See "),s("a",{attrs:{href:"https://github.com/ashtuchkin/iconv-lite/wiki/Node-v4-compatibility",target:"_blank",rel:"noopener noreferrer"}},[t._v("details"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// After this call all Node basic primitives will understand iconv-lite encodings.")]),t._v("\niconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendNodeEncodings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Examples:")]),t._v("\nbuf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Buffer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'win1251'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbuf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gbk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'latin1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Buffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iso-8859-15'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("byteLength")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'us-ascii'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'big5'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("collect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shift_jis"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// External modules are also supported (if they use Node primitives, which they probably do).")]),t._v("\nrequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'request'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://github.com/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cp932"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// To remove extensions")]),t._v("\niconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("undoExtendNodeEncodings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"supported-encodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-encodings"}},[t._v("#")]),t._v(" Supported encodings")]),t._v(" "),s("ul",[s("li",[t._v("All node.js native encodings: utf8, ucs2 / utf16-le, ascii, binary, base64, hex.")]),t._v(" "),s("li",[t._v("Additional unicode encodings: utf16, utf16-be, utf-7, utf-7-imap.")]),t._v(" "),s("li",[t._v("All widespread singlebyte encodings: Windows 125x family, ISO-8859 family,\nIBM/DOS codepages, Macintosh family, KOI8 family, all others supported by iconv library.\nAliases like 'latin1', 'us-ascii' also supported.")]),t._v(" "),s("li",[t._v("All widespread multibyte encodings: CP932, CP936, CP949, CP950, GB2312, GBK, GB18030, Big5, Shift_JIS, EUC-JP.")])]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings",target:"_blank",rel:"noopener noreferrer"}},[t._v("all supported encodings on wiki"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Most singlebyte encodings are generated automatically from "),s("a",{attrs:{href:"https://github.com/bnoordhuis/node-iconv",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-iconv"),s("OutboundLink")],1),t._v(". Thank you Ben Noordhuis and libiconv authors!")]),t._v(" "),s("p",[t._v("Multibyte encodings are generated from "),s("a",{attrs:{href:"http://www.unicode.org/Public/MAPPINGS/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unicode.org mappings"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://encoding.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WHATWG Encoding Standard mappings"),s("OutboundLink")],1),t._v(". Thank you, respective authors!")]),t._v(" "),s("h2",{attrs:{id:"encoding-decoding-speed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encoding-decoding-speed"}},[t._v("#")]),t._v(" Encoding/decoding speed")]),t._v(" "),s("p",[t._v("Comparison with node-iconv module (1000x256kb, on MacBook Pro, Core i5/2.6 GHz, Node v0.12.0).\nNote: your results may vary, so please always check on your hardware.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("operation             iconv@2.1.4   iconv-lite@0.4.7\n----------------------------------------------------------\nencode('win1251')     ~96 Mb/s      ~320 Mb/s\ndecode('win1251')     ~95 Mb/s      ~246 Mb/s\n")])])]),s("h2",{attrs:{id:"bom-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bom-handling"}},[t._v("#")]),t._v(" BOM handling")]),t._v(" "),s("ul",[s("li",[t._v("Decoding: BOM is stripped by default, unless overridden by passing "),s("code",[t._v("stripBOM: false")]),t._v(" in options\n(f.ex. "),s("code",[t._v("iconv.decode(buf, enc, {stripBOM: false})")]),t._v(").\nA callback might also be given as a "),s("code",[t._v("stripBOM")]),t._v(" parameter - it'll be called if BOM character was actually found.")]),t._v(" "),s("li",[t._v("If you want to detect UTF-8 BOM when decoding other encodings, use "),s("a",{attrs:{href:"https://github.com/danielgindi/node-autodetect-decoder-stream",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-autodetect-decoder-stream"),s("OutboundLink")],1),t._v(" module.")]),t._v(" "),s("li",[t._v("Encoding: No BOM added, unless overridden by "),s("code",[t._v("addBOM: true")]),t._v(" option.")])]),t._v(" "),s("h2",{attrs:{id:"utf-16-encodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utf-16-encodings"}},[t._v("#")]),t._v(" UTF-16 Encodings")]),t._v(" "),s("p",[t._v("This library supports UTF-16LE, UTF-16BE and UTF-16 encodings. First two are straightforward, but UTF-16 is trying to be\nsmart about endianness in the following ways:")]),t._v(" "),s("ul",[s("li",[t._v("Decoding: uses BOM and 'spaces heuristic' to determine input endianness. Default is UTF-16LE, but can be\noverridden with "),s("code",[t._v("defaultEncoding: 'utf-16be'")]),t._v(" option. Strips BOM unless "),s("code",[t._v("stripBOM: false")]),t._v(".")]),t._v(" "),s("li",[t._v("Encoding: uses UTF-16LE and writes BOM by default. Use "),s("code",[t._v("addBOM: false")]),t._v(" to override.")])]),t._v(" "),s("h2",{attrs:{id:"other-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-notes"}},[t._v("#")]),t._v(" Other notes")]),t._v(" "),s("p",[t._v("When decoding, be sure to supply a Buffer to decode() method, otherwise "),s("a",{attrs:{href:"https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("bad things usually happen"),s("OutboundLink")],1),t._v("."),s("br"),t._v("\nUntranslatable characters are set to � or ?. No transliteration is currently supported."),s("br"),t._v("\nNode versions 0.10.31 and 0.11.13 are buggy, don't use them (see #65, #77).")]),t._v(" "),s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:ashtuchkin/iconv-lite.git\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" iconv-lite\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n    \n$ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To view performance:")]),t._v("\n$ node test/performance.js\n\n$ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To view test coverage:")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run coverage\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" coverage/lcov-report/index.html\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);