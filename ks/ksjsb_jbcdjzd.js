/*
快手极速版-金币抽大奖
抓包教程地址：http://cxgc.top/archives/ksjsb
填我邀请码，脚本遇见问题可以问我：791642607
交流群：212796668、681030097
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#快手极速版-金币抽大奖
2 30 10,16,22 * * * https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_jbcdj.js, tag=快手极速版-金币抽大奖, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "2 30 10,16,22 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_jbcdj.js,tag=快手极速版-金币抽大奖
===================================Surge================================
快手极速版-金币抽大奖 = type=cron,cronexp="2 30 10,16,22 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_jbcdj.js
====================================小火箭=============================
快手极速版-金币抽大奖 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ks/ksjsb_jbcdj.js, cronexpr="2 30 10,16,22 * * *", timeout=3600, enable=true
 */
const $ = new Env('快手极速版-金币抽大奖');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./ksCookie.js') : '';
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxdde36=["","\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x6E\x6F\x77","\u522B\u73A9\u4E86","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u5FEB\u624B\u8D26\u53F7\x20\x6B\x73\x6A\x73\x62\x43\x6F\x6F\x6B\x69\x65\x20\x0A\u76F4\u63A5\u4F7F\u7528\u6293\u5305\u5DE5\u5177\u6293\u5305","\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\x6D\x73\x67","\u5FEB\u624B\u6293\u53D6\x63\x6B\u6559\u7A0B\uFF1A\x68\x74\x74\x70\x3A\x2F\x2F\x63\x78\x67\x63\x2E\x74\x6F\x70\x2F\x61\x72\x63\x68\x69\x76\x65\x73\x2F\x6B\x73\x6A\x73\x62","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u5FEB\u624B\u8D26\u53F7","\u3011\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A","\x3B","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x0A","\x72\x65\x70\x6C\x61\x63\x65","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x41\x4E\x44\x52\x4F\x49\x44\x5F\x39\x31\x35\x64\x30\x34\x64\x33\x65\x30\x38\x62\x35\x31\x62\x65","\x6B\x70\x6E\x3D\x4E\x45\x42\x55\x4C\x41\x3B\x20\x6B\x70\x66\x3D\x41\x4E\x44\x52\x4F\x49\x44\x5F\x50\x48\x4F\x4E\x45\x3B\x20","\x64\x69\x64\x3D","\x3B\x20\x63\x3D\x58\x49\x41\x4F\x4D\x49\x3B\x20\x76\x65\x72\x3D\x31\x30\x2E\x32\x3B\x20\x61\x70\x70\x76\x65\x72\x3D\x31\x30\x2E\x32\x2E\x34\x31\x2E\x33\x30\x37\x35\x3B\x20\x6C\x61\x6E\x67\x75\x61\x67\x65\x3D\x7A\x68\x2D\x63\x6E\x3B\x20","\x63\x6C\x69\x65\x6E\x74\x5F\x6B\x65\x79\x3D\x32\x61\x63\x32\x61\x37\x36\x64\x3B\x20","\x67\x65\x74\x54\x69\x6D\x65","\x74\x6F\x4C\x6F\x63\x61\x6C\x65\x44\x61\x74\x65\x53\x74\x72\x69\x6E\x67","\x64\x61\x74\x61","\x74\x6F\x64\x61\x79\x52\x61\x66\x66\x6C\x65","\x72\x61\x66\x66\x6C\x65\x50\x65\x72\x69\x6F\x64","\x64\x72\x61\x77\x69\x6E\x67\x54\x69\x6D\x65","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x6E\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x67\x61\x6D\x65\x2F\x72\x61\x66\x66\x6C\x65\x2F\x70\x72\x69\x7A\x65\x4C\x69\x73\x74","\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x47\x45\x54","\x4A\x44\x5F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54","\x2E\x2F\x55\x53\x45\x52\x5F\x41\x47\x45\x4E\x54\x53","\x4A\x44\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E","\x2A\x2F\x2A","\x63\x6F\x6D\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x6E\x65\x62\x75\x6C\x61","\x73\x61\x6D\x65\x2D\x6F\x72\x69\x67\x69\x6E","\x63\x6F\x72\x73","\x65\x6D\x70\x74\x79","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x64\x72\x61\x77\x2F\x6D\x61\x69\x6E\x3F\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x73\x6F\x75\x72\x63\x65\x3D\x4E\x45\x42\x55\x4C\x41\x5F\x54\x41\x53\x4B","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37","\u9886\u53D6\u6628\u5929\u62BD\u5956\u91D1\u5E01","\u91D1\u5E01\u603B\u989D\uFF1A","\x74\x6F\x74\x61\x6C\x41\x6D\x6F\x75\x6E\x74","\u9886\u53D6\u6628\u65E5\u91D1\u5E01\uFF1A","\x61\x6D\x6F\x75\x6E\x74","\x65\x72\x72\x6F\x72\x5F\x6D\x73\x67","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x6E\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x67\x61\x6D\x65\x2F\x72\x61\x66\x66\x6C\x65\x2F\x74\x61\x6B\x65\x42\x61\x63\x6B\x43\x6F\x69\x6E\x3F\x65\x78\x70\x69\x72\x61\x74\x69\x6F\x6E\x54\x69\x6D\x65\x3D","\x72\x61\x66\x66\x6C\x65\x54\x65\x72\x6D","\u7B2C\u3010","\u3011\u671F","\x70\x72\x69\x7A\x65\x52\x61\x66\x66\x6C\x65\x49\x6E\x66\x6F\x73","\u5546\u54C1\u540D\u79F0\uFF1A","\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65","\x70\x72\x69\x7A\x65","\u4E2D\u5956\u53F7\u7801","\x72\x61\x66\x66\x6C\x65\x43\x6F\x64\x65\x73","\u62BD\u5956\u7801","\x75\x73\x65\x72\x52\x61\x66\x66\x6C\x65\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x6E\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x67\x61\x6D\x65\x2F\x72\x61\x66\x66\x6C\x65\x2F\x75\x73\x65\x72\x48\x69\x73\x74\x6F\x72\x79\x52\x61\x66\x66\x6C\x65\x43\x6F\x64\x65\x73","\x70\x72\x69\x7A\x65\x52\x61\x66\x66\x6C\x65\x73","\x77\x61\x69\x74","\u62BD\u5956\u5546\u54C1\uFF1A","\x70\x72\x69\x7A\x65\x49\x64","\u91D1\u5E01\u4E0D\u8DB3","\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u8DF3\u51FA\u62BD\u5956","\u5230\u4E0A\u9650\u5566\uFF0C\u6362\u4E2A\u5546\u54C1\u51B2\u523A\u5427\x21","\u62BD\u5956\u7801\uFF1A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x72\x65\x73\x74\x2F\x6E\x2F\x65\x6E\x63\x6F\x75\x72\x61\x67\x65\x2F\x67\x61\x6D\x65\x2F\x72\x61\x66\x66\x6C\x65\x2F\x73\x69\x6E\x67\x6C\x65\x52\x61\x66\x66\x6C\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D","\x7B\x22\x74\x79\x70\x65\x22\x3A\x32\x2C\x22\x72\x61\x66\x66\x6C\x65\x54\x65\x72\x6D\x22\x3A","\x2C\x22\x70\x72\x69\x7A\x65\x49\x64\x22\x3A","\x7D","\x50\x4F\x53\x54","\u83B7\u53D6\u5DF2\u7ECF\u53C2\u4E0E\u7684\u62BD\u5956\u53F7\u7801","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6E\x65\x62\x75\x6C\x61\x2E\x6B\x75\x61\x69\x73\x68\x6F\x75\x2E\x63\x6F\x6D\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x2F\x64\x72\x61\x77\x2F\x64\x72\x61\x77\x2D\x6E\x75\x6D\x62\x65\x72\x3F\x6C\x61\x79\x6F\x75\x74\x54\x79\x70\x65\x3D\x34\x26\x73\x6F\x75\x72\x63\x65\x3D\x4E\x45\x42\x55\x4C\x41\x5F\x54\x41\x53\x4B","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxdde36[0x0],message;const fetch=require(__Oxdde36[0x1]);let assistanceId=__Oxdde36[0x0];if($[__Oxdde36[0x2]]()){Object[__Oxdde36[0x5]](jdCookieNode)[__Oxdde36[0x4]]((_0x2997x6)=>{cookiesArr[__Oxdde36[0x3]](jdCookieNode[_0x2997x6])});if(process[__Oxdde36[0x7]][__Oxdde36[0x6]]&& process[__Oxdde36[0x7]][__Oxdde36[0x6]]=== __Oxdde36[0x8]){console[__Oxdde36[0x9]]= ()=>{}}}else {cookiesArr= [$[__Oxdde36[0xc]](__Oxdde36[0xb]),$[__Oxdde36[0xc]](__Oxdde36[0xd]),...jsonParse($[__Oxdde36[0xc]](__Oxdde36[0x10])|| __Oxdde36[0x11])[__Oxdde36[0xf]]((_0x2997x6)=>{return _0x2997x6[__Oxdde36[0xe]]})][__Oxdde36[0xa]]((_0x2997x6)=>{return !!_0x2997x6})};if(Date[__Oxdde36[0x12]]()> 1651334400001){fetch= __Oxdde36[0x13]};!(async ()=>{if(!cookiesArr[0x0]){$[__Oxdde36[0x1d]]($[__Oxdde36[0x17]],__Oxdde36[0x1b],__Oxdde36[0x1c],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxdde36[0x1c]});return};if(Date[__Oxdde36[0x12]]()> 1651334400000){return};console[__Oxdde36[0x9]](__Oxdde36[0x1e]);for(let _0x2997x8=0;_0x2997x8< cookiesArr[__Oxdde36[0x1f]];_0x2997x8++){if(cookiesArr[_0x2997x8]){$[__Oxdde36[0x20]]= _0x2997x8+ 1;$[__Oxdde36[0x21]]= true;$[__Oxdde36[0x22]]= __Oxdde36[0x0];message= __Oxdde36[0x0];console[__Oxdde36[0x9]](`${__Oxdde36[0x23]}${$[__Oxdde36[0x20]]}${__Oxdde36[0x24]}`);let _0x2997x9=cookiesArr[_0x2997x8];if(__Oxdde36[0x25]!= _0x2997x9[__Oxdde36[0x26]](_0x2997x9[__Oxdde36[0x1f]]- 1,_0x2997x9[__Oxdde36[0x1f]])){_0x2997x9= _0x2997x9+ __Oxdde36[0x25]};_0x2997x9= _0x2997x9[__Oxdde36[0x28]](__Oxdde36[0x27],__Oxdde36[0x0]);let _0x2997xa=Math[__Oxdde36[0x2a]](Math[__Oxdde36[0x29]]()* (1000)+ 1)+ __Oxdde36[0x2b];let _0x2997xb=__Oxdde36[0x2c]+ __Oxdde36[0x2d]+ _0x2997xa+ __Oxdde36[0x2e]+ __Oxdde36[0x2f]+ _0x2997x9;try{let _0x2997xc=[];let _0x2997xd=0;let _0x2997xe=0;var _0x2997xf= new Date( new Date()[__Oxdde36[0x31]]())[__Oxdde36[0x30]](); await fetch(__Oxdde36[0x38],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdde36[0x39],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdde36[0x3a],"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdde36[0x2]]()?(process[__Oxdde36[0x7]][__Oxdde36[0x3c]]?process[__Oxdde36[0x7]][__Oxdde36[0x3c]]:(require(__Oxdde36[0x3e])[__Oxdde36[0x3d]])):($[__Oxdde36[0xc]](__Oxdde36[0x3f])?$[__Oxdde36[0xc]](__Oxdde36[0x3f]):__Oxdde36[0x40]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdde36[0x41],"\x41\x63\x63\x65\x70\x74":__Oxdde36[0x42],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdde36[0x43],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdde36[0x44],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdde36[0x45],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdde36[0x46],"\x52\x65\x66\x65\x72\x65\x72":__Oxdde36[0x47],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdde36[0x48],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdde36[0x49],"\x43\x6F\x6F\x6B\x69\x65":_0x2997xb},"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b]})[__Oxdde36[0x36]]((_0x2997x11)=>{return _0x2997x11[__Oxdde36[0x37]]()})[__Oxdde36[0x36]]((_0x2997x10)=>{if(_0x2997x10[__Oxdde36[0x32]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]][__Oxdde36[0x34]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]][__Oxdde36[0x34]][__Oxdde36[0x35]]){_0x2997xf= _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]][__Oxdde36[0x34]][__Oxdde36[0x35]];console[__Oxdde36[0x9]](__Oxdde36[0x0])}}); await fetch(__Oxdde36[0x50]+ _0x2997xf,{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdde36[0x39],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdde36[0x3a],"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdde36[0x2]]()?(process[__Oxdde36[0x7]][__Oxdde36[0x3c]]?process[__Oxdde36[0x7]][__Oxdde36[0x3c]]:(require(__Oxdde36[0x3e])[__Oxdde36[0x3d]])):($[__Oxdde36[0xc]](__Oxdde36[0x3f])?$[__Oxdde36[0xc]](__Oxdde36[0x3f]):__Oxdde36[0x40]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdde36[0x41],"\x41\x63\x63\x65\x70\x74":__Oxdde36[0x42],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdde36[0x43],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdde36[0x44],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdde36[0x45],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdde36[0x46],"\x52\x65\x66\x65\x72\x65\x72":__Oxdde36[0x47],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdde36[0x48],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdde36[0x49],"\x43\x6F\x6F\x6B\x69\x65":_0x2997xb},"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b]})[__Oxdde36[0x36]]((_0x2997x11)=>{return _0x2997x11[__Oxdde36[0x37]]()})[__Oxdde36[0x36]]((_0x2997x10)=>{console[__Oxdde36[0x9]](__Oxdde36[0x0]);console[__Oxdde36[0x9]](__Oxdde36[0x4a]);if(_0x2997x10[__Oxdde36[0x32]]){console[__Oxdde36[0x9]](__Oxdde36[0x4b]+ _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x4c]]);console[__Oxdde36[0x9]](__Oxdde36[0x4d]+ _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x4e]])};if(_0x2997x10[__Oxdde36[0x4f]]){console[__Oxdde36[0x9]](_0x2997x10[__Oxdde36[0x4f]])};console[__Oxdde36[0x9]](__Oxdde36[0x0])}); await fetch(__Oxdde36[0x5c],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdde36[0x39],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdde36[0x3a],"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdde36[0x2]]()?(process[__Oxdde36[0x7]][__Oxdde36[0x3c]]?process[__Oxdde36[0x7]][__Oxdde36[0x3c]]:(require(__Oxdde36[0x3e])[__Oxdde36[0x3d]])):($[__Oxdde36[0xc]](__Oxdde36[0x3f])?$[__Oxdde36[0xc]](__Oxdde36[0x3f]):__Oxdde36[0x40]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdde36[0x41],"\x41\x63\x63\x65\x70\x74":__Oxdde36[0x42],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdde36[0x43],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdde36[0x44],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdde36[0x45],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdde36[0x46],"\x52\x65\x66\x65\x72\x65\x72":__Oxdde36[0x47],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdde36[0x48],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdde36[0x49],"\x43\x6F\x6F\x6B\x69\x65":_0x2997xb},"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b]})[__Oxdde36[0x36]]((_0x2997x11)=>{return _0x2997x11[__Oxdde36[0x37]]()})[__Oxdde36[0x36]]((_0x2997x10)=>{let _0x2997x12=_0x2997x10[__Oxdde36[0x32]];for(let _0x2997x13=1;_0x2997x13< 2;_0x2997x13++){if(_0x2997x12&& _0x2997x12[_0x2997x13]&& _0x2997x12[_0x2997x13][__Oxdde36[0x34]]&& _0x2997x12[_0x2997x13][__Oxdde36[0x34]][__Oxdde36[0x51]]){console[__Oxdde36[0x9]](__Oxdde36[0x52]+ _0x2997x12[_0x2997x13][__Oxdde36[0x34]][__Oxdde36[0x51]]+ __Oxdde36[0x53]);let _0x2997x14=_0x2997x12[_0x2997x13][__Oxdde36[0x54]];for(let _0x2997x15=0;_0x2997x15< _0x2997x14[__Oxdde36[0x1f]];_0x2997x15++){console[__Oxdde36[0x9]](__Oxdde36[0x55]+ _0x2997x14[_0x2997x15][__Oxdde36[0x57]][__Oxdde36[0x56]]);console[__Oxdde36[0x9]](__Oxdde36[0x58]);console[__Oxdde36[0x9]](_0x2997x14[_0x2997x15][__Oxdde36[0x59]]);console[__Oxdde36[0x9]](__Oxdde36[0x5a]);console[__Oxdde36[0x9]](_0x2997x14[_0x2997x15][__Oxdde36[0x5b]])}}};console[__Oxdde36[0x9]](__Oxdde36[0x0])}); await fetch(__Oxdde36[0x38],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdde36[0x39],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdde36[0x3a],"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdde36[0x2]]()?(process[__Oxdde36[0x7]][__Oxdde36[0x3c]]?process[__Oxdde36[0x7]][__Oxdde36[0x3c]]:(require(__Oxdde36[0x3e])[__Oxdde36[0x3d]])):($[__Oxdde36[0xc]](__Oxdde36[0x3f])?$[__Oxdde36[0xc]](__Oxdde36[0x3f]):__Oxdde36[0x40]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdde36[0x41],"\x41\x63\x63\x65\x70\x74":__Oxdde36[0x42],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdde36[0x43],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdde36[0x44],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdde36[0x45],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdde36[0x46],"\x52\x65\x66\x65\x72\x65\x72":__Oxdde36[0x47],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdde36[0x48],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdde36[0x49],"\x43\x6F\x6F\x6B\x69\x65":_0x2997xb},"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b]})[__Oxdde36[0x36]]((_0x2997x11)=>{return _0x2997x11[__Oxdde36[0x37]]()})[__Oxdde36[0x36]]((_0x2997x10)=>{if(_0x2997x10[__Oxdde36[0x32]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]][__Oxdde36[0x34]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]][__Oxdde36[0x34]][__Oxdde36[0x51]]){_0x2997xd= _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]][__Oxdde36[0x34]][__Oxdde36[0x51]]};if(_0x2997x10[__Oxdde36[0x32]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]][__Oxdde36[0x5d]]){_0x2997xc= _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x33]][__Oxdde36[0x5d]]}}); await $[__Oxdde36[0x5e]](100);let _0x2997x16=true;if(_0x2997xc){for(let _0x2997x15=0;_0x2997x15< _0x2997xc[__Oxdde36[0x1f]];_0x2997x15++){console[__Oxdde36[0x9]](__Oxdde36[0x5f]+ _0x2997xc[_0x2997x15][__Oxdde36[0x57]][__Oxdde36[0x56]]);if(!_0x2997x16){break};_0x2997xe= _0x2997xc[_0x2997x15][__Oxdde36[0x57]][__Oxdde36[0x60]];let _0x2997x17=true;for(let _0x2997x13=0;_0x2997x13< 100;_0x2997x13++){if(!_0x2997x17){break}; await fetch(__Oxdde36[0x65],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdde36[0x39],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdde36[0x3a],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68":56,"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdde36[0x2]]()?(process[__Oxdde36[0x7]][__Oxdde36[0x3c]]?process[__Oxdde36[0x7]][__Oxdde36[0x3c]]:(require(__Oxdde36[0x3e])[__Oxdde36[0x3d]])):($[__Oxdde36[0xc]](__Oxdde36[0x3f])?$[__Oxdde36[0xc]](__Oxdde36[0x3f]):__Oxdde36[0x40]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdde36[0x41],"\x41\x63\x63\x65\x70\x74":__Oxdde36[0x42],"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b],"\x4F\x72\x69\x67\x69\x6E":__Oxdde36[0x66],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdde36[0x43],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdde36[0x44],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdde36[0x45],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdde36[0x46],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdde36[0x48],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdde36[0x49],"\x43\x6F\x6F\x6B\x69\x65":_0x2997xb},"\x62\x6F\x64\x79":__Oxdde36[0x67]+ _0x2997xd+ __Oxdde36[0x68]+ _0x2997xe+ __Oxdde36[0x69],"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x6a]})[__Oxdde36[0x36]]((_0x2997x11)=>{return _0x2997x11[__Oxdde36[0x37]]()})[__Oxdde36[0x36]]((_0x2997x10)=>{if(_0x2997x10[__Oxdde36[0x4f]]== __Oxdde36[0x61]){console[__Oxdde36[0x9]](__Oxdde36[0x62]);_0x2997x17= false;_0x2997x16= false};if(_0x2997x10[__Oxdde36[0x4f]]== __Oxdde36[0x63]){console[__Oxdde36[0x9]](__Oxdde36[0x63]);_0x2997x17= false};if(_0x2997x10[__Oxdde36[0x32]]&& _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x59]][0x0]){console[__Oxdde36[0x9]](__Oxdde36[0x64]+ _0x2997x10[__Oxdde36[0x32]][__Oxdde36[0x59]][0x0])};console[__Oxdde36[0x9]]()})}; await $[__Oxdde36[0x5e]](100)}};console[__Oxdde36[0x9]](__Oxdde36[0x6b]); await fetch(__Oxdde36[0x5c],{"\x68\x65\x61\x64\x65\x72\x73":{"\x48\x6F\x73\x74":__Oxdde36[0x39],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxdde36[0x3a],"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":$[__Oxdde36[0x2]]()?(process[__Oxdde36[0x7]][__Oxdde36[0x3c]]?process[__Oxdde36[0x7]][__Oxdde36[0x3c]]:(require(__Oxdde36[0x3e])[__Oxdde36[0x3d]])):($[__Oxdde36[0xc]](__Oxdde36[0x3f])?$[__Oxdde36[0xc]](__Oxdde36[0x3f]):__Oxdde36[0x40]),"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdde36[0x41],"\x41\x63\x63\x65\x70\x74":__Oxdde36[0x42],"\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68":__Oxdde36[0x43],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x53\x69\x74\x65":__Oxdde36[0x44],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x4D\x6F\x64\x65":__Oxdde36[0x45],"\x53\x65\x63\x2D\x46\x65\x74\x63\x68\x2D\x44\x65\x73\x74":__Oxdde36[0x46],"\x52\x65\x66\x65\x72\x65\x72":__Oxdde36[0x6c],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxdde36[0x48],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxdde36[0x49],"\x43\x6F\x6F\x6B\x69\x65":_0x2997xb},"\x6D\x65\x74\x68\x6F\x64":__Oxdde36[0x3b]})[__Oxdde36[0x36]]((_0x2997x11)=>{return _0x2997x11[__Oxdde36[0x37]]()})[__Oxdde36[0x36]]((_0x2997x10)=>{let _0x2997x12=_0x2997x10[__Oxdde36[0x32]];if(_0x2997x12){for(let _0x2997x13=0;_0x2997x13< _0x2997x12[__Oxdde36[0x1f]];_0x2997x13++){if(_0x2997x12[_0x2997x13][__Oxdde36[0x34]]&& _0x2997x12[_0x2997x13][__Oxdde36[0x34]][__Oxdde36[0x51]]){console[__Oxdde36[0x9]](__Oxdde36[0x52]+ _0x2997x12[_0x2997x13][__Oxdde36[0x34]][__Oxdde36[0x51]]+ __Oxdde36[0x53]);let _0x2997x14=_0x2997x12[_0x2997x13][__Oxdde36[0x54]];for(let _0x2997x15=0;_0x2997x15< _0x2997x14[__Oxdde36[0x1f]];_0x2997x15++){console[__Oxdde36[0x9]](__Oxdde36[0x55]+ _0x2997x14[_0x2997x15][__Oxdde36[0x57]][__Oxdde36[0x56]]);console[__Oxdde36[0x9]](__Oxdde36[0x5a]);console[__Oxdde36[0x9]](_0x2997x14[_0x2997x15][__Oxdde36[0x5b]])}}}};console[__Oxdde36[0x9]](__Oxdde36[0x0])})}catch(e){}; await $[__Oxdde36[0x5e]](500)}}})()[__Oxdde36[0x1a]]((_0x2997x7)=>{$[__Oxdde36[0x9]](__Oxdde36[0x0],`${__Oxdde36[0x16]}${$[__Oxdde36[0x17]]}${__Oxdde36[0x18]}${_0x2997x7}${__Oxdde36[0x19]}`,__Oxdde36[0x0])})[__Oxdde36[0x15]](()=>{$[__Oxdde36[0x14]]()});(function(_0x2997x18,_0x2997x19,_0x2997x1a,_0x2997x1b,_0x2997x1c,_0x2997x13){_0x2997x13= __Oxdde36[0x6d];_0x2997x1b= function(_0x2997x1d){if( typeof alert!== _0x2997x13){alert(_0x2997x1d)};if( typeof console!== _0x2997x13){console[__Oxdde36[0x9]](_0x2997x1d)}};_0x2997x1a= function(_0x2997x1e,_0x2997x18){return _0x2997x1e+ _0x2997x18};_0x2997x1c= _0x2997x1a(__Oxdde36[0x6e],_0x2997x1a(_0x2997x1a(__Oxdde36[0x6f],__Oxdde36[0x70]),__Oxdde36[0x71]));try{_0x2997x18= __encode;if(!( typeof _0x2997x18!== _0x2997x13&& _0x2997x18=== _0x2997x1a(__Oxdde36[0x72],__Oxdde36[0x73]))){_0x2997x1b(_0x2997x1c)}}catch(e){_0x2997x1b(_0x2997x1c)}})({})
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
