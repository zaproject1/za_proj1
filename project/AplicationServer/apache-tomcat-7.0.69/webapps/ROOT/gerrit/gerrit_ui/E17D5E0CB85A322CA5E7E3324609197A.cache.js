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
(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("commonlisp",function(e){function g(b){for(var c;c=b.next();)if("\\"==c)b.next();else if(!k.test(c)){b.backUp(1);break}return b.current()}function f(b,c){if(b.eatSpace())return d="ws",null;if(b.match(l))return"number";var a=b.next();"\\"==a&&(a=b.next());if('"'==a)return(c.tokenize=m)(b,c);
if("("==a)return d="open","bracket";if(")"==a||"]"==a)return d="close","bracket";if(";"==a)return b.skipToEnd(),d="ws","comment";if(/['`,@]/.test(a))return null;if("|"==a){if(b.skipTo("|"))return b.next(),"symbol";b.skipToEnd();return"error"}if("#"==a)return a=b.next(),"["==a?(d="open","bracket"):/[+\-=\.']/.test(a)||/\d/.test(a)&&b.match(/^\d*#/)?null:"|"==a?(c.tokenize=n)(b,c):":"==a?(g(b),"meta"):"error";a=g(b);if("."==a)return null;d="symbol";return"nil"==a||"t"==a||":"==a.charAt(0)?"atom":"open"==
c.lastType&&(p.test(a)||h.test(a))?"keyword":"&"==a.charAt(0)?"variable-2":"variable"}function m(b,c){for(var a=!1,d;d=b.next();){if('"'==d&&!a){c.tokenize=f;break}a=!a&&"\\"==d}return"string"}function n(b,c){for(var a,e;a=b.next();){if("#"==a&&"|"==e){c.tokenize=f;break}e=a}d="ws";return"comment"}var p=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,
h=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,l=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,k=/[^\s'`,@()\[\]";]/,d;return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:f}},token:function(b,c){b.sol()&&"number"!=typeof c.ctx.indentTo&&(c.ctx.indentTo=c.ctx.start+1);d=null;var a=c.tokenize(b,c);"ws"!=d&&(null==c.ctx.indentTo?"symbol"==d&&h.test(b.current())?c.ctx.indentTo=
c.ctx.start+e.indentUnit:c.ctx.indentTo="next":"next"==c.ctx.indentTo&&(c.ctx.indentTo=b.column()),c.lastType=d);"open"==d?c.ctx={prev:c.ctx,start:b.column(),indentTo:null}:"close"==d&&(c.ctx=c.ctx.prev||c.ctx);return a},indent:function(b,c){var a=b.ctx.indentTo;return"number"==typeof a?a:b.ctx.start+1},closeBrackets:{pairs:'()[]{}""'},lineComment:";;",blockCommentStart:"#|",blockCommentEnd:"|#"}});e.defineMIME("text/x-common-lisp","commonlisp")});
