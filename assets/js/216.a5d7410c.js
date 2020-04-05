(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{510:function(a,t,s){"use strict";s.r(t);var e=s(29),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"negotiator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#negotiator"}},[a._v("#")]),a._v(" negotiator")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/negotiator",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/negotiator.svg",alt:"NPM Version"}}),s("OutboundLink")],1),a._v(" "),s("a",{attrs:{href:"https://npmjs.org/package/negotiator",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/negotiator.svg",alt:"NPM Downloads"}}),s("OutboundLink")],1),a._v(" "),s("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/node/v/negotiator.svg",alt:"Node.js Version"}}),s("OutboundLink")],1),a._v(" "),s("a",{attrs:{href:"https://travis-ci.org/jshttp/negotiator",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/travis/jshttp/negotiator/master.svg",alt:"Build Status"}}),s("OutboundLink")],1),a._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/jshttp/negotiator?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/negotiator/master.svg",alt:"Test Coverage"}}),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("An HTTP content negotiator for Node.js")]),a._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" negotiator\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" API")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" Negotiator "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'negotiator'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"accept-negotiation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accept-negotiation"}},[a._v("#")]),a._v(" Accept Negotiation")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("availableMediaTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'text/html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'application/json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// The negotiator constructor receives a request object")]),a._v("\nnegotiator "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Negotiator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Let's say Accept header is 'text/html, application/*;q=0.2, image/jpeg;q=0.8'")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mediaTypes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> ['text/html', 'image/jpeg', 'application/*']")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mediaTypes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("availableMediaTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> ['text/html', 'application/json']")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mediaType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("availableMediaTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> 'text/html'")]),a._v("\n")])])]),s("p",[a._v("You can check a working example at "),s("code",[a._v("examples/accept.js")]),a._v(".")]),a._v(" "),s("h4",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[a._v("#")]),a._v(" Methods")]),a._v(" "),s("h5",{attrs:{id:"mediatype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mediatype"}},[a._v("#")]),a._v(" mediaType()")]),a._v(" "),s("p",[a._v("Returns the most preferred media type from the client.")]),a._v(" "),s("h5",{attrs:{id:"mediatype-availablemediatype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mediatype-availablemediatype"}},[a._v("#")]),a._v(" mediaType(availableMediaType)")]),a._v(" "),s("p",[a._v("Returns the most preferred media type from a list of available media types.")]),a._v(" "),s("h5",{attrs:{id:"mediatypes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mediatypes"}},[a._v("#")]),a._v(" mediaTypes()")]),a._v(" "),s("p",[a._v("Returns an array of preferred media types ordered by the client preference.")]),a._v(" "),s("h5",{attrs:{id:"mediatypes-availablemediatypes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mediatypes-availablemediatypes"}},[a._v("#")]),a._v(" mediaTypes(availableMediaTypes)")]),a._v(" "),s("p",[a._v("Returns an array of preferred media types ordered by priority from a list of\navailable media types.")]),a._v(" "),s("h3",{attrs:{id:"accept-language-negotiation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accept-language-negotiation"}},[a._v("#")]),a._v(" Accept-Language Negotiation")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("negotiator "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Negotiator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\navailableLanguages "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'en'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'es'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fr'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Let's say Accept-Language header is 'en;q=0.8, es, pt'")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("languages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> ['es', 'pt', 'en']")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("languages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("availableLanguages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> ['es', 'en']")]),a._v("\n\nlanguage "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" negotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("availableLanguages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> 'es'")]),a._v("\n")])])]),s("p",[a._v("You can check a working example at "),s("code",[a._v("examples/language.js")]),a._v(".")]),a._v(" "),s("h4",{attrs:{id:"methods-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods-2"}},[a._v("#")]),a._v(" Methods")]),a._v(" "),s("h5",{attrs:{id:"language"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#language"}},[a._v("#")]),a._v(" language()")]),a._v(" "),s("p",[a._v("Returns the most preferred language from the client.")]),a._v(" "),s("h5",{attrs:{id:"language-availablelanguages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#language-availablelanguages"}},[a._v("#")]),a._v(" language(availableLanguages)")]),a._v(" "),s("p",[a._v("Returns the most preferred language from a list of available languages.")]),a._v(" "),s("h5",{attrs:{id:"languages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#languages"}},[a._v("#")]),a._v(" languages()")]),a._v(" "),s("p",[a._v("Returns an array of preferred languages ordered by the client preference.")]),a._v(" "),s("h5",{attrs:{id:"languages-availablelanguages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#languages-availablelanguages"}},[a._v("#")]),a._v(" languages(availableLanguages)")]),a._v(" "),s("p",[a._v("Returns an array of preferred languages ordered by priority from a list of\navailable languages.")]),a._v(" "),s("h3",{attrs:{id:"accept-charset-negotiation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accept-charset-negotiation"}},[a._v("#")]),a._v(" Accept-Charset Negotiation")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("availableCharsets "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'iso-8859-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'iso-8859-5'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nnegotiator "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Negotiator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Let's say Accept-Charset header is 'utf-8, iso-8859-1;q=0.8, utf-7;q=0.2'")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("charsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> ['utf-8', 'iso-8859-1', 'utf-7']")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("charsets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("availableCharsets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> ['utf-8', 'iso-8859-1']")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("charset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("availableCharsets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> 'utf-8'")]),a._v("\n")])])]),s("p",[a._v("You can check a working example at "),s("code",[a._v("examples/charset.js")]),a._v(".")]),a._v(" "),s("h4",{attrs:{id:"methods-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods-3"}},[a._v("#")]),a._v(" Methods")]),a._v(" "),s("h5",{attrs:{id:"charset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charset"}},[a._v("#")]),a._v(" charset()")]),a._v(" "),s("p",[a._v("Returns the most preferred charset from the client.")]),a._v(" "),s("h5",{attrs:{id:"charset-availablecharsets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charset-availablecharsets"}},[a._v("#")]),a._v(" charset(availableCharsets)")]),a._v(" "),s("p",[a._v("Returns the most preferred charset from a list of available charsets.")]),a._v(" "),s("h5",{attrs:{id:"charsets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charsets"}},[a._v("#")]),a._v(" charsets()")]),a._v(" "),s("p",[a._v("Returns an array of preferred charsets ordered by the client preference.")]),a._v(" "),s("h5",{attrs:{id:"charsets-availablecharsets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charsets-availablecharsets"}},[a._v("#")]),a._v(" charsets(availableCharsets)")]),a._v(" "),s("p",[a._v("Returns an array of preferred charsets ordered by priority from a list of\navailable charsets.")]),a._v(" "),s("h3",{attrs:{id:"accept-encoding-negotiation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accept-encoding-negotiation"}},[a._v("#")]),a._v(" Accept-Encoding Negotiation")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("availableEncodings "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'identity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'gzip'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\nnegotiator "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Negotiator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Let's say Accept-Encoding header is 'gzip, compress;q=0.2, identity;q=0.5'")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("encodings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> ['gzip', 'identity', 'compress']")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("encodings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("availableEncodings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> ['gzip', 'identity']")]),a._v("\n\nnegotiator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("availableEncodings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// -> 'gzip'")]),a._v("\n")])])]),s("p",[a._v("You can check a working example at "),s("code",[a._v("examples/encoding.js")]),a._v(".")]),a._v(" "),s("h4",{attrs:{id:"methods-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods-4"}},[a._v("#")]),a._v(" Methods")]),a._v(" "),s("h5",{attrs:{id:"encoding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encoding"}},[a._v("#")]),a._v(" encoding()")]),a._v(" "),s("p",[a._v("Returns the most preferred encoding from the client.")]),a._v(" "),s("h5",{attrs:{id:"encoding-availableencodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encoding-availableencodings"}},[a._v("#")]),a._v(" encoding(availableEncodings)")]),a._v(" "),s("p",[a._v("Returns the most preferred encoding from a list of available encodings.")]),a._v(" "),s("h5",{attrs:{id:"encodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encodings"}},[a._v("#")]),a._v(" encodings()")]),a._v(" "),s("p",[a._v("Returns an array of preferred encodings ordered by the client preference.")]),a._v(" "),s("h5",{attrs:{id:"encodings-availableencodings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encodings-availableencodings"}},[a._v("#")]),a._v(" encodings(availableEncodings)")]),a._v(" "),s("p",[a._v("Returns an array of preferred encodings ordered by priority from a list of\navailable encodings.")]),a._v(" "),s("h2",{attrs:{id:"see-also"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[a._v("#")]),a._v(" See Also")]),a._v(" "),s("p",[a._v("The "),s("a",{attrs:{href:"https://npmjs.org/package/accepts#readme",target:"_blank",rel:"noopener noreferrer"}},[a._v("accepts"),s("OutboundLink")],1),a._v(" module builds on\nthis module and provides an alternative interface, mime type validation,\nand more.")]),a._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),s("p",[s("a",{attrs:{href:"LICENSE"}},[a._v("MIT")])])])}),[],!1,null,null,null);t.default=n.exports}}]);