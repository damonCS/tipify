(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{156:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"javascript-module-systems-undersatnding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-module-systems-undersatnding"}},[e._v("#")]),e._v(" JavaScript Module Systems Undersatnding")]),s("p",[e._v("*** Never forget I failed on interview with this question !!! ***")]),s("h4",{attrs:{id:"main-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main-types"}},[e._v("#")]),e._v(" Main types:")]),s("ol",[s("li",[e._v("CommonJS:")])]),s("ul",[s("li",[e._v("implemented by nodejs")]),s("li",[e._v("used for "),s("code",[e._v("server side")]),e._v(" when you have modules installed")]),s("li",[s("code",[e._v("no")]),e._v(" tree shaking (because when you import you get an object)")]),s("li",[e._v("import ("),s("code",[e._v("require")]),e._v("), export ("),s("code",[e._v("modulex.exports")]),e._v(")")]),s("li",[e._v("you always got a copy of an object, "),s("code",[e._v("no live changes")]),e._v(" in module itself")])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("AMD (Async Module Definition)")])]),s("ul",[s("li",[e._v("implemented by require.js")]),s("li",[e._v("used for "),s("code",[e._v("client side")]),e._v(" when you dynamiclly loading of modules")]),s("li",[e._v("import via "),s("code",[e._v("require")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("UMD (Universal Module Definition)")])]),s("ul",[s("li",[e._v("combination of "),s("code",[e._v("CommonJS + AMD")])]),s("li",[e._v("can be used for both CommonJS or AMD "),s("code",[e._v("environment")])]),s("li",[e._v("capable of working on both "),s("code",[e._v("client")]),e._v(" and "),s("code",[e._v("server")]),e._v(" side")])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Harmony (ES6)")])]),s("ul",[s("li",[e._v("utilised for both "),s("code",[e._v("client")]),e._v(" & "),s("code",[e._v("server")]),e._v(" side")]),s("li",[e._v("using "),s("code",[e._v("import")]),e._v(" & "),s("code",[e._v("export")]),e._v(" syntax")]),s("li",[e._v("able to "),s("code",[e._v("tree shake")])]),s("li",[e._v("static analysing: can determine "),s("code",[e._v("imports")]),e._v(" and "),s("code",[e._v("exports")]),e._v(" at "),s("code",[e._v("compile")]),e._v(" time")]),s("li",[e._v("support for "),s("code",[e._v("live changes")]),e._v(" in module itself")])]),s("h4",{attrs:{id:"general-module-bundler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-module-bundler"}},[e._v("#")]),e._v(" General module bundler:")]),s("ol",[s("li",[e._v("webpack:\n"),s("ul",[s("li",[e._v("bundle/package up js files for usage in a browser")]),s("li",[e._v("uses CommonJS module system")]),s("li",[e._v("features: code spliting, async loading & tree shaking")])])]),s("li",[e._v("rollup:\n"),s("ul",[s("li",[e._v("complies small pieces of js code into something larger, eg: library or application")]),s("li",[e._v("uses ES6 module system")]),s("li",[e._v("features: support tree shaking, but not async loading")])])])]),s("p",[e._v("Tips: Babel: is a transpiler  (just transpile, never bundle code)")]),s("p",[e._v("Suggestion: using rollup for building "),s("code",[e._v("library")]),e._v(", using webpack for budiling "),s("code",[e._v("application")])]),s("h4",{attrs:{id:"tree-shaking-in-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking-in-webpack"}},[e._v("#")]),e._v(" Tree shaking in Webpack")]),s("p",[e._v("!! Please read this "),s("a",{attrs:{href:"https://medium.com/@craigmiller160/how-to-fully-optimize-webpack-4-tree-shaking-405e1c76038",target:"_blank"}},[e._v("article")]),e._v(" !!!!")]),s("p",[e._v("Basic configuration for webpack tree shaking:")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[e._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Base Webpack Config for Tree Shaking")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'production'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  optimization"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    usedExports"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    minimizer"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TerserPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("At the end, how to create your own library, here is a better "),s("a",{attrs:{href:"",target:"_blank"}},[e._v("reference")])])])}],!1,null,null,null);t.default=n.exports}}]);