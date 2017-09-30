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
(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("tcl",function(){function e(a){var c={};a=a.split(" ");for(var d=0;d<a.length;++d)c[a[d]]=!0;return c}function f(a,c,d){c.tokenize=d;return d(a,c)}function g(a,c){var d=c.beforeParams;c.beforeParams=!1;var b=a.next();if('"'!=b&&"'"!=b||!c.inParams){if(/[\[\]{}\(\),;\.]/.test(b))return"("==
b&&d?c.inParams=!0:")"==b&&(c.inParams=!1),null;if(/\d/.test(b))return a.eatWhile(/[\w\.]/),"number";if("#"==b&&a.eat("*"))return f(a,c,m);if("#"==b&&a.match(/ *\[ *\[/))return f(a,c,n);if("#"==b&&a.eat("#"))return a.skipToEnd(),"comment";if('"'==b)return a.skipTo(/"/),"comment";if("$"==b)return a.eatWhile(/[$_a-z0-9A-Z\.{:]/),a.eatWhile(/}/),c.beforeParams=!0,"builtin";if(h.test(b))return a.eatWhile(h),"comment";a.eatWhile(/[\w\$_{}\xa1-\uffff]/);d=a.current().toLowerCase();return k&&k.propertyIsEnumerable(d)?
"keyword":l&&l.propertyIsEnumerable(d)?(c.beforeParams=!0,"keyword"):null}return f(a,c,p(b))}function p(a){return function(c,d){for(var b=!1,e,f=!1;null!=(e=c.next());){if(e==a&&!b){f=!0;break}b=!b&&"\\"==e}f&&(d.tokenize=g);return"string"}}function m(a,c){for(var d=!1,b;b=a.next();){if("#"==b&&d){c.tokenize=g;break}d="*"==b}return"comment"}function n(a,c){for(var d=0,b;b=a.next();){if("#"==b&&2==d){c.tokenize=g;break}"]"==b?d++:" "!=b&&(d=0)}return"meta"}var k=e("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),
l=e("if elseif else and not or eq ne in ni for foreach while switch"),h=/[+\-*&%=<>!?^\/\|]/;return{startState:function(){return{tokenize:g,beforeParams:!1,inParams:!1}},token:function(a,c){return a.eatSpace()?null:c.tokenize(a,c)}}});e.defineMIME("text/x-tcl","tcl")});
