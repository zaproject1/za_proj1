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
(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){b.defineMode("puppet",function(){function b(a,c){for(var e=c.split(" "),f=0;f<e.length;f++)h[e[f]]=a}function l(a,c){for(var e,b,g=!1;!a.eol()&&(e=a.next())!=c.pending;){if("$"===e&&"\\"!=b&&'"'==c.pending){g=!0;break}b=e}g&&a.backUp(1);c.continueString=e==c.pending?!1:!0;return"string"}function k(a,c){var b=
a.match(/[\w]+/,!1),f=a.match(/(\s+)?\w+\s+=>.*/,!1),g=a.match(/(\s+)?[\w:_]+(\s+)?{/,!1),k=a.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/,!1),d=a.next();if("$"===d)return a.match(m)?c.continueString?"variable-2":"variable":"error";if(c.continueString)return a.backUp(1),l(a,c);if(c.inDefinition){if(a.match(/(\s+)?[\w:_]+(\s+)?/))return"def";a.match(/\s+{/);c.inDefinition=!1}if(c.inInclude)return a.match(/(\s+)?\S+(\s+)?/),c.inInclude=!1,"def";if(a.match(/(\s+)?\w+\(/))return a.backUp(1),"def";if(f)return a.match(/(\s+)?\w+/),
"tag";if(b&&h.hasOwnProperty(b))return a.backUp(1),a.match(/[\w]+/),a.match(/\s+\S+\s+{/,!1)&&(c.inDefinition=!0),"include"==b&&(c.inInclude=!0),h[b];if(/(^|\s+)[A-Z][\w:_]+/.test(b))return a.backUp(1),a.match(/(^|\s+)[A-Z][\w:_]+/),"def";if(g)return a.match(/(\s+)?[\w:_]+/),"def";if(k)return a.match(/(\s+)?[@]{1,2}/),"special";if("#"==d)return a.skipToEnd(),"comment";if("'"==d||'"'==d)return c.pending=d,l(a,c);if("{"==d||"}"==d)return"bracket";if("/"==d)return a.match(/.*?\//),"variable-3";if(d.match(/[0-9]/))return a.eatWhile(/[0-9]+/),
"number";if("="==d)return">"==a.peek()&&a.next(),"operator";a.eatWhile(/[\w-]/);return null}var h={},m=/({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;b("keyword","class define site node include import inherits");b("keyword","case if else in and elsif default or");b("atom","false true running present absent file directory undef");b("builtin","action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");
return{startState:function(){return{inDefinition:!1,inInclude:!1,continueString:!1,pending:!1}},token:function(a,b){return a.eatSpace()?null:k(a,b)}}});b.defineMIME("text/x-puppet","puppet")});
