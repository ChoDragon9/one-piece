(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{227:function(t,e,s){"use strict";s.r(e);var a=s(29),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[t._v("#")]),t._v(" cookie")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/cookie",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/v/cookie",alt:"NPM Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.org/package/cookie",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/dm/cookie",alt:"NPM Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/npm/node/cookie",alt:"Node.js Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/jshttp/cookie",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/travis/jshttp/cookie/master",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/jshttp/cookie?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://badgen.net/coveralls/c/github/jshttp/cookie/master",alt:"Test Coverage"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Basic HTTP cookie parser and serializer for HTTP servers.")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" cookie\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cookie'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"cookie-parse-str-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-parse-str-options"}},[t._v("#")]),t._v(" cookie.parse(str, options)")]),t._v(" "),s("p",[t._v("Parse an HTTP "),s("code",[t._v("Cookie")]),t._v(" header string and returning an object of all cookie name-value pairs.\nThe "),s("code",[t._v("str")]),t._v(" argument is the string representing a "),s("code",[t._v("Cookie")]),t._v(" header value and "),s("code",[t._v("options")]),t._v(" is an\noptional object containing additional parsing options.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cookies "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo=bar; equation=E%3Dmc%5E2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { foo: 'bar', equation: 'E=mc^2' }")]),t._v("\n")])])]),s("h4",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[s("code",[t._v("cookie.parse")]),t._v(" accepts these properties in the options object.")]),t._v(" "),s("h5",{attrs:{id:"decode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decode"}},[t._v("#")]),t._v(" decode")]),t._v(" "),s("p",[t._v("Specifies a function that will be used to decode a cookie's value. Since the value of a cookie\nhas a limited character set (and must be a simple string), this function can be used to decode\na previously-encoded cookie value into a JavaScript string or other object.")]),t._v(" "),s("p",[t._v("The default function is the global "),s("code",[t._v("decodeURIComponent")]),t._v(", which will decode any URL-encoded\nsequences into their byte representations.")]),t._v(" "),s("p",[s("strong",[t._v("note")]),t._v(" if an error is thrown from this function, the original, non-decoded cookie value will\nbe returned as the cookie's value.")]),t._v(" "),s("h3",{attrs:{id:"cookie-serialize-name-value-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-serialize-name-value-options"}},[t._v("#")]),t._v(" cookie.serialize(name, value, options)")]),t._v(" "),s("p",[t._v("Serialize a cookie name-value pair into a "),s("code",[t._v("Set-Cookie")]),t._v(" header string. The "),s("code",[t._v("name")]),t._v(" argument is the\nname for the cookie, the "),s("code",[t._v("value")]),t._v(" argument is the value to set the cookie to, and the "),s("code",[t._v("options")]),t._v("\nargument is an optional object containing additional serialization options.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" setCookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("serialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// foo=bar")]),t._v("\n")])])]),s("h4",{attrs:{id:"options-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-2"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[s("code",[t._v("cookie.serialize")]),t._v(" accepts these properties in the options object.")]),t._v(" "),s("h5",{attrs:{id:"domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[t._v("#")]),t._v(" domain")]),t._v(" "),s("p",[t._v("Specifies the value for the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.2.3",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Domain")]),t._v(" "),s("code",[t._v("Set-Cookie")]),t._v(" attribute"),s("OutboundLink")],1),t._v(". By default, no\ndomain is set, and most clients will consider the cookie to apply to only the current domain.")]),t._v(" "),s("h5",{attrs:{id:"encode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encode"}},[t._v("#")]),t._v(" encode")]),t._v(" "),s("p",[t._v("Specifies a function that will be used to encode a cookie's value. Since value of a cookie\nhas a limited character set (and must be a simple string), this function can be used to encode\na value into a string suited for a cookie's value.")]),t._v(" "),s("p",[t._v("The default function is the global "),s("code",[t._v("encodeURIComponent")]),t._v(", which will encode a JavaScript string\ninto UTF-8 byte sequences and then URL-encode any that fall outside of the cookie range.")]),t._v(" "),s("h5",{attrs:{id:"expires"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" expires")]),t._v(" "),s("p",[t._v("Specifies the "),s("code",[t._v("Date")]),t._v(" object to be the value for the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.2.1",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Expires")]),t._v(" "),s("code",[t._v("Set-Cookie")]),t._v(" attribute"),s("OutboundLink")],1),t._v('.\nBy default, no expiration is set, and most clients will consider this a "non-persistent cookie" and\nwill delete it on a condition like exiting a web browser application.')]),t._v(" "),s("p",[s("strong",[t._v("note")]),t._v(" the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("cookie storage model specification"),s("OutboundLink")],1),t._v(" states that if both "),s("code",[t._v("expires")]),t._v(" and\n"),s("code",[t._v("maxAge")]),t._v(" are set, then "),s("code",[t._v("maxAge")]),t._v(" takes precedence, but it is possible not all clients by obey this,\nso if both are set, they should point to the same date and time.")]),t._v(" "),s("h5",{attrs:{id:"httponly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[t._v("#")]),t._v(" httpOnly")]),t._v(" "),s("p",[t._v("Specifies the "),s("code",[t._v("boolean")]),t._v(" value for the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.2.6",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("HttpOnly")]),t._v(" "),s("code",[t._v("Set-Cookie")]),t._v(" attribute"),s("OutboundLink")],1),t._v(". When truthy,\nthe "),s("code",[t._v("HttpOnly")]),t._v(" attribute is set, otherwise it is not. By default, the "),s("code",[t._v("HttpOnly")]),t._v(" attribute is not set.")]),t._v(" "),s("p",[s("strong",[t._v("note")]),t._v(" be careful when setting this to "),s("code",[t._v("true")]),t._v(", as compliant clients will not allow client-side\nJavaScript to see the cookie in "),s("code",[t._v("document.cookie")]),t._v(".")]),t._v(" "),s("h5",{attrs:{id:"maxage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maxage"}},[t._v("#")]),t._v(" maxAge")]),t._v(" "),s("p",[t._v("Specifies the "),s("code",[t._v("number")]),t._v(" (in seconds) to be the value for the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.2.2",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Max-Age")]),t._v(" "),s("code",[t._v("Set-Cookie")]),t._v(" attribute"),s("OutboundLink")],1),t._v(".\nThe given number will be converted to an integer by rounding down. By default, no maximum age is set.")]),t._v(" "),s("p",[s("strong",[t._v("note")]),t._v(" the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("cookie storage model specification"),s("OutboundLink")],1),t._v(" states that if both "),s("code",[t._v("expires")]),t._v(" and\n"),s("code",[t._v("maxAge")]),t._v(" are set, then "),s("code",[t._v("maxAge")]),t._v(" takes precedence, but it is possible not all clients by obey this,\nso if both are set, they should point to the same date and time.")]),t._v(" "),s("h5",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),s("p",[t._v("Specifies the value for the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.2.4",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Path")]),t._v(" "),s("code",[t._v("Set-Cookie")]),t._v(" attribute"),s("OutboundLink")],1),t._v(". By default, the path\nis considered the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.1.4",target:"_blank",rel:"noopener noreferrer"}},[t._v('"default path"'),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h5",{attrs:{id:"samesite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[t._v("#")]),t._v(" sameSite")]),t._v(" "),s("p",[t._v("Specifies the "),s("code",[t._v("boolean")]),t._v(" or "),s("code",[t._v("string")]),t._v(" to be the value for the "),s("a",{attrs:{href:"https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("SameSite")]),t._v(" "),s("code",[t._v("Set-Cookie")]),t._v(" attribute"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("true")]),t._v(" will set the "),s("code",[t._v("SameSite")]),t._v(" attribute to "),s("code",[t._v("Strict")]),t._v(" for strict same site enforcement.")]),t._v(" "),s("li",[s("code",[t._v("false")]),t._v(" will not set the "),s("code",[t._v("SameSite")]),t._v(" attribute.")]),t._v(" "),s("li",[s("code",[t._v("'lax'")]),t._v(" will set the "),s("code",[t._v("SameSite")]),t._v(" attribute to "),s("code",[t._v("Lax")]),t._v(" for lax same site enforcement.")]),t._v(" "),s("li",[s("code",[t._v("'none'")]),t._v(" will set the "),s("code",[t._v("SameSite")]),t._v(" attribute to "),s("code",[t._v("None")]),t._v(" for an explicit cross-site cookie.")]),t._v(" "),s("li",[s("code",[t._v("'strict'")]),t._v(" will set the "),s("code",[t._v("SameSite")]),t._v(" attribute to "),s("code",[t._v("Strict")]),t._v(" for strict same site enforcement.")])]),t._v(" "),s("p",[t._v("More information about the different enforcement levels can be found in\n"),s("a",{attrs:{href:"https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("the specification"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("note")]),t._v(" This is an attribute that has not yet been fully standardized, and may change in the future.\nThis also means many clients may ignore this attribute until they understand it.")]),t._v(" "),s("h5",{attrs:{id:"secure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secure"}},[t._v("#")]),t._v(" secure")]),t._v(" "),s("p",[t._v("Specifies the "),s("code",[t._v("boolean")]),t._v(" value for the "),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265#section-5.2.5",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Secure")]),t._v(" "),s("code",[t._v("Set-Cookie")]),t._v(" attribute"),s("OutboundLink")],1),t._v(". When truthy,\nthe "),s("code",[t._v("Secure")]),t._v(" attribute is set, otherwise it is not. By default, the "),s("code",[t._v("Secure")]),t._v(" attribute is not set.")]),t._v(" "),s("p",[s("strong",[t._v("note")]),t._v(" be careful when setting this to "),s("code",[t._v("true")]),t._v(", as compliant clients will not send the cookie back to\nthe server in the future if the browser does not have an HTTPS connection.")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("The following example uses this module in conjunction with the Node.js core HTTP server\nto prompt a user for their name and display it back on future visits.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cookie'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" escapeHtml "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'escape-html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parse the query string")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set a new cookie with the name")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Set-Cookie'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("serialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      httpOnly"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxAge"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 week")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Redirect back after setting cookie")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("statusCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Location'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("referer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parse the cookies on the request")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cookies "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the visitor name set in the cookie")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cookies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/html; charset=UTF-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p>Welcome back, <b>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("escapeHtml")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</b>!</p>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<p>Hello, new visitor!</p>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<form method=\"GET\">'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<input placeholder="enter your name" name="name"> <input type="submit" value="Set Name">\'')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</form>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("onRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[t._v("#")]),t._v(" Testing")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),s("h2",{attrs:{id:"benchmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[t._v("#")]),t._v(" Benchmark")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ npm run bench\n\n> cookie@0.3.1 bench cookie\n> node benchmark/index.js\n\n  http_parser@2.8.0\n  node@6.14.2\n  v8@5.1.281.111\n  uv@1.16.1\n  zlib@1.2.11\n  ares@1.10.1-DEV\n  icu@58.2\n  modules@48\n  napi@3\n  openssl@1.0.2o\n\n> node benchmark/parse.js\n\n  cookie.parse\n\n  6 tests completed.\n\n  simple      x 1,200,691 ops/sec ±1.12% (189 runs sampled)\n  decode      x 1,012,994 ops/sec ±0.97% (186 runs sampled)\n  unquote     x 1,074,174 ops/sec ±2.43% (186 runs sampled)\n  duplicates  x   438,424 ops/sec ±2.17% (184 runs sampled)\n  10 cookies  x   147,154 ops/sec ±1.01% (186 runs sampled)\n  100 cookies x    14,274 ops/sec ±1.07% (187 runs sampled)\n")])])]),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://tools.ietf.org/html/rfc6265",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 6265: HTTP State Management Mechanism"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Same-site Cookies"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[s("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);e.default=n.exports}}]);