/*

Copyright (C) 2015 by Marijn Haverbeke <marijnh@gmail.com> and others

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],f):f(CodeMirror)})(function(f){f.defineMode("r",function(f){function g(c){c=c.split(" ");for(var a={},b=0;b<c.length;++b)a[c[b]]=!0;return a}function k(c,a){e=null;var b=c.next();if("#"==b)return c.skipToEnd(),"comment";if("0"==b&&c.eat("x"))return c.eatWhile(/[\da-f]/i),"number";if("."==b&&c.eat(/\d/))return c.match(/\d*(?:e[+\-]?\d+)?/),
"number";if(/\d/.test(b))return c.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==b||'"'==b)return a.tokenize=m(b),"string";if("."==b&&c.match(/.[.\d]+/))return"keyword";if(/[\w\.]/.test(b)&&"_"!=b)return c.eatWhile(/[\w\.]/),b=c.current(),n.propertyIsEnumerable(b)?"atom":p.propertyIsEnumerable(b)?(q.propertyIsEnumerable(b)&&!c.match(/\s*if(\s+|$)/,!1)&&(e="block"),"keyword"):r.propertyIsEnumerable(b)?"builtin":"variable";if("%"==b)return c.skipTo("%")&&c.next(),"variable-2";if("<"==b&&c.eat("-"))return"arrow";
if("="==b&&a.ctx.argList)return"arg-is";if(l.test(b)){if("$"==b)return"dollar";c.eatWhile(l);return"operator"}return/[\(\){}\[\];]/.test(b)?(e=b,";"==b?"semi":null):null}function m(c){return function(a,b){if(a.eat("\\")){var d=a.next();"x"==d?a.match(/^[a-f0-9]{2}/i):("u"==d||"U"==d)&&a.eat("{")&&a.skipTo("}")?a.next():"u"==d?a.match(/^[a-f0-9]{4}/i):"U"==d?a.match(/^[a-f0-9]{8}/i):/[0-7]/.test(d)&&a.match(/^[0-7]{1,2}/);return"string-2"}for(;null!=(d=a.next());){if(d==c){b.tokenize=k;break}if("\\"==
d){a.backUp(1);break}}return"string"}}function h(c,a,b){c.ctx={type:a,indent:c.indent,align:null,column:b.column(),prev:c.ctx}}var n=g("NULL NA Inf NaN NA_integer_ NA_real_ NA_complex_ NA_character_"),r=g("list quote bquote eval return call parse deparse"),p=g("if else repeat while function for in next break"),q=g("if else repeat while function for"),l=/[+\-*\/^<>=!&|~$:]/,e;return{startState:function(){return{tokenize:k,ctx:{type:"top",indent:-f.indentUnit,align:!1},indent:0,afterIdent:!1}},token:function(c,
a){c.sol()&&(null==a.ctx.align&&(a.ctx.align=!1),a.indent=c.indentation());if(c.eatSpace())return null;var b=a.tokenize(c,a);"comment"!=b&&null==a.ctx.align&&(a.ctx.align=!0);var d=a.ctx.type;";"!=e&&"{"!=e&&"}"!=e||"block"!=d||(a.indent=a.ctx.indent,a.ctx=a.ctx.prev);"{"==e?h(a,"}",c):"("==e?(h(a,")",c),a.afterIdent&&(a.ctx.argList=!0)):"["==e?h(a,"]",c):"block"==e?h(a,"block",c):e==d&&(a.indent=a.ctx.indent,a.ctx=a.ctx.prev);a.afterIdent="variable"==b||"keyword"==b;return b},indent:function(c,a){if(c.tokenize!=
k)return 0;var b=a&&a.charAt(0),d=c.ctx,e=b==d.type;return"block"==d.type?d.indent+("{"==b?0:f.indentUnit):d.align?d.column+(e?0:1):d.indent+(e?0:f.indentUnit)},lineComment:"#"}});f.defineMIME("text/x-rsrc","r")});
