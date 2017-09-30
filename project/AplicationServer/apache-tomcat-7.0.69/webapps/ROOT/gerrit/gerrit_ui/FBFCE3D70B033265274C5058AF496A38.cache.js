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
(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("dtd",function(e){function f(c,b){d=b;return c}function g(c,b){var a=c.next();if("<"==a&&c.eat("!")){if(c.eatWhile(/[\-]/))return b.tokenize=h,h(c,b);if(c.eatWhile(/[\w]/))return f("keyword","doindent")}else{if("<"==a&&c.eat("?"))return b.tokenize=k("meta","?>"),f("meta",a);if("#"==a&&c.eatWhile(/[\w]/))return f("atom",
"tag");if("|"==a)return f("keyword","seperator");if(a.match(/[\(\)\[\]\-\.,\+\?>]/))return f(null,a);if(a.match(/[\[\]]/))return f("rule",a);if('"'==a||"'"==a)return b.tokenize=l(a),b.tokenize(c,b);if(c.eatWhile(/[a-zA-Z\?\+\d]/))return a=c.current(),null!==a.substr(a.length-1,a.length).match(/\?|\+/)&&c.backUp(1),f("tag","tag");if("%"==a||"*"==a)return f("number","number");c.eatWhile(/[\w\\\-_%.{,]/);return f(null,null)}}function h(c,b){for(var a=0,d;null!=(d=c.next());){if(2<=a&&">"==d){b.tokenize=
g;break}a="-"==d?a+1:0}return f("comment","comment")}function l(c){return function(b,a){for(var d=!1,e;null!=(e=b.next());){if(e==c&&!d){a.tokenize=g;break}d=!d&&"\\"==e}return f("string","tag")}}function k(c,b){return function(a,d){for(;!a.eol();){if(a.match(b)){d.tokenize=g;break}a.next()}return c}}var m=e.indentUnit,d;return{startState:function(c){return{tokenize:g,baseIndent:c||0,stack:[]}},token:function(c,b){if(c.eatSpace())return null;var a=b.tokenize(c,b),e=b.stack[b.stack.length-1];"["==
c.current()||"doindent"===d||"["==d?b.stack.push("rule"):"endtag"===d?b.stack[b.stack.length-1]="endtag":"]"==c.current()||"]"==d||">"==d&&"rule"==e?b.stack.pop():"["==d&&b.stack.push("[");return a},indent:function(c,b){var a=c.stack.length;b.match(/\]\s+|\]/)?--a:">"===b.substr(b.length-1,b.length)&&("<"===b.substr(0,1)?a:"doindent"==d&&1<b.length?a:"doindent"==d?a--:">"==d&&1<b.length?a:"tag"==d&&">"!==b?a:"tag"==d&&"rule"==c.stack[c.stack.length-1]?a--:"tag"==d?a++:">"===b&&"rule"==c.stack[c.stack.length-
1]&&">"===d?a--:">"===b&&"rule"==c.stack[c.stack.length-1]?a:"<"!==b.substr(0,1)&&">"===b.substr(0,1)?--a:">"===b?a:--a,null!=d&&"]"!=d||a--);return c.baseIndent+a*m},electricChars:"]>"}});e.defineMIME("application/xml-dtd","dtd")});
