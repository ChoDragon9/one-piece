(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{332:function(t,e,s){"use strict";s.r(e);var n=s(29),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"on-finished"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-finished"}},[t._v("#")]),t._v(" on-finished")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://npmjs.org/package/on-finished",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/on-finished.svg",alt:"NPM Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://npmjs.org/package/on-finished",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dm/on-finished.svg",alt:"NPM Downloads"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"http://nodejs.org/download/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/node/v/on-finished.svg",alt:"Node.js Version"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/jshttp/on-finished",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/travis/jshttp/on-finished/master.svg",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/r/jshttp/on-finished?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/coveralls/jshttp/on-finished/master.svg",alt:"Test Coverage"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Execute a callback when a HTTP request closes, finishes, or errors.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" on-finished\n")])])]),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" onFinished "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'on-finished'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"onfinished-res-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onfinished-res-listener"}},[t._v("#")]),t._v(" onFinished(res, listener)")]),t._v(" "),s("p",[t._v("Attach a listener to listen for the response to finish. The listener will\nbe invoked only once when the response finished. If the response finished\nto an error, the first argument will contain the error. If the response\nhas already finished, the listener will be invoked.")]),t._v(" "),s("p",[t._v("Listening to the end of a response would be used to close things associated\nwith the response, like open files.")]),t._v(" "),s("p",[t._v("Listener is invoked as "),s("code",[t._v("listener(err, res)")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFinished")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// clean up open fds, etc.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// err contains the error is request error'd")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"onfinished-req-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onfinished-req-listener"}},[t._v("#")]),t._v(" onFinished(req, listener)")]),t._v(" "),s("p",[t._v("Attach a listener to listen for the request to finish. The listener will\nbe invoked only once when the request finished. If the request finished\nto an error, the first argument will contain the error. If the request\nhas already finished, the listener will be invoked.")]),t._v(" "),s("p",[t._v("Listening to the end of a request would be used to know when to continue\nafter reading the data.")]),t._v(" "),s("p",[t._v("Listener is invoked as "),s("code",[t._v("listener(err, req)")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n\nreq"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setEncoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nres"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" str\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFinished")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data is read unless there is err")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"onfinished-isfinished-res"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onfinished-isfinished-res"}},[t._v("#")]),t._v(" onFinished.isFinished(res)")]),t._v(" "),s("p",[t._v("Determine if "),s("code",[t._v("res")]),t._v(" is already finished. This would be useful to check and\nnot even start certain operations if the response has already finished.")]),t._v(" "),s("h3",{attrs:{id:"onfinished-isfinished-req"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onfinished-isfinished-req"}},[t._v("#")]),t._v(" onFinished.isFinished(req)")]),t._v(" "),s("p",[t._v("Determine if "),s("code",[t._v("req")]),t._v(" is already finished. This would be useful to check and\nnot even start certain operations if the request has already finished.")]),t._v(" "),s("h2",{attrs:{id:"special-node-js-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#special-node-js-requests"}},[t._v("#")]),t._v(" Special Node.js requests")]),t._v(" "),s("h3",{attrs:{id:"http-connect-method"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-connect-method"}},[t._v("#")]),t._v(" HTTP CONNECT method")]),t._v(" "),s("p",[t._v("The meaning of the "),s("code",[t._v("CONNECT")]),t._v(" method from RFC 7231, section 4.3.6:")]),t._v(" "),s("blockquote",[s("p",[t._v("The CONNECT method requests that the recipient establish a tunnel to\nthe destination origin server identified by the request-target and,\nif successful, thereafter restrict its behavior to blind forwarding\nof packets, in both directions, until the tunnel is closed.  Tunnels\nare commonly used to create an end-to-end virtual connection, through\none or more proxies, which can then be secured using TLS (Transport\nLayer Security, [RFC5246]).")])]),t._v(" "),s("p",[t._v("In Node.js, these request objects come from the "),s("code",[t._v("'connect'")]),t._v(" event on\nthe HTTP server.")]),t._v(" "),s("p",[t._v("When this module is used on a HTTP "),s("code",[t._v("CONNECT")]),t._v(' request, the request is\nconsidered "finished" immediately, '),s("strong",[t._v("due to limitations in the Node.js\ninterface")]),t._v(". This means if the "),s("code",[t._v("CONNECT")]),t._v(' request contains a request entity,\nthe request will be considered "finished" even before it has been read.')]),t._v(" "),s("p",[t._v("There is no such thing as a response object to a "),s("code",[t._v("CONNECT")]),t._v(" request in\nNode.js, so there is no support for for one.")]),t._v(" "),s("h3",{attrs:{id:"http-upgrade-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-upgrade-request"}},[t._v("#")]),t._v(" HTTP Upgrade request")]),t._v(" "),s("p",[t._v("The meaning of the "),s("code",[t._v("Upgrade")]),t._v(" header from RFC 7230, section 6.1:")]),t._v(" "),s("blockquote",[s("p",[t._v('The "Upgrade" header field is intended to provide a simple mechanism\nfor transitioning from HTTP/1.1 to some other protocol on the same\nconnection.')])]),t._v(" "),s("p",[t._v("In Node.js, these request objects come from the "),s("code",[t._v("'upgrade'")]),t._v(" event on\nthe HTTP server.")]),t._v(" "),s("p",[t._v("When this module is used on a HTTP request with an "),s("code",[t._v("Upgrade")]),t._v(' header, the\nrequest is considered "finished" immediately, '),s("strong",[t._v("due to limitations in the\nNode.js interface")]),t._v(". This means if the "),s("code",[t._v("Upgrade")]),t._v(' request contains a request\nentity, the request will be considered "finished" even before it has been\nread.')]),t._v(" "),s("p",[t._v("There is no such thing as a response object to a "),s("code",[t._v("Upgrade")]),t._v(" request in\nNode.js, so there is no support for for one.")]),t._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("p",[t._v("The following code ensures that file descriptors are always closed\nonce the response finishes.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" destroy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'destroy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" onFinished "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'on-finished'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'package.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFinished")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[s("a",{attrs:{href:"LICENSE"}},[t._v("MIT")])])])}),[],!1,null,null,null);e.default=a.exports}}]);