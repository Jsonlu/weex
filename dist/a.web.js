// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=39)}([function(t,e){t.exports=function(t,e,n,o){var r,a=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(r=t,a=t.default);var s="function"==typeof a?a.options:a;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),o){var d=s.computed||(s.computed={});Object.keys(o).forEach(function(t){var e=o[t];d[t]=function(){return e}})}return{esModule:r,exports:a,options:s}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=c[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(a(n.parts[r]));c[n.id]={id:n.id,refs:1,parts:i}}}}function r(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function a(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(g)return h;o.parentNode.removeChild(o)}if(v){var a=f++;o=u||(u=r()),e=i.bind(null,o,a,!1),n=i.bind(null,o,a,!0)}else o=r(),e=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function i(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var a=document.createTextNode(r),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function s(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!d)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),c={},p=d&&(document.head||document.getElementsByTagName("head")[0]),u=null,f=0,g=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){g=n;var r=l(t,e);return o(r),function(e){for(var n=[],a=0;a<r.length;a++){var i=r[a],s=c[i.id];s.refs--,n.push(s)}e?(r=l(t,e),o(r)):r=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete c[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],i=a[0],s=a[1],d=a[2],l=a[3],c={id:t+":"+r,css:s,media:d,sourceMap:l};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}},function(t,e,n){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"white"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"white"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick")},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick")}}}},function(t,e,n){"use strict";t.exports={components:{navbar:n(10)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"white"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"white"}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},function(t,e,n){"use strict";t.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.panel[data-v-0d53a9c9] {\n  margin-bottom: 20px;\n  background-color: #fff;\n  /*border: 1px solid transparent;*/\n  /*border-radius: 10px;*/\n  /*-webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  border-color: #dddddd;\n  border-width: 1px;\n}\n.panel-default[data-v-0d53a9c9] {\n}\n.panel-primary[data-v-0d53a9c9] {\n  border-color: rgb(40, 96, 144);\n}\n.panel-success[data-v-0d53a9c9] {\n  border-color: rgb(76, 174, 76);\n}\n.panel-info[data-v-0d53a9c9] {\n  border-color: rgb(70, 184, 218);\n}\n.panel-warning[data-v-0d53a9c9] {\n  border-color: rgb(238, 162, 54);\n}\n.panel-danger[data-v-0d53a9c9] {\n  border-color: rgb(212, 63, 58);\n}\n.panel-header[data-v-0d53a9c9] {\n  background-color: #f5f5f5;\n  font-size: 40px;\n  /*padding-left: 12px;*/\n  /*padding-right: 12px;*/\n  /*padding-top: 20px;*/\n  /*padding-bottom: 20px;*/\n  color: #333;\n}\n.panel-header-default[data-v-0d53a9c9] {\n}\n.panel-header-primary[data-v-0d53a9c9] {\n  background-color: rgb(40, 96, 144);\n  color: #ffffff;\n}\n.panel-header-success[data-v-0d53a9c9] {\n  background-color: rgb(92, 184, 92);\n  color: #ffffff;\n}\n.panel-header-info[data-v-0d53a9c9] {\n  background-color: rgb(91, 192, 222);\n  color: #ffffff;\n}\n.panel-header-warning[data-v-0d53a9c9] {\n  background-color: rgb(240, 173, 78);\n  color: #ffffff;\n}\n.panel-header-danger[data-v-0d53a9c9] {\n  background-color: rgb(217, 83, 79);\n  color: #ffffff;\n}\n.panel-body[data-v-0d53a9c9] {\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.panel-body-default[data-v-0d53a9c9] {\n}\n.panel-body-primary[data-v-0d53a9c9] {\n}\n.panel-body-success[data-v-0d53a9c9] {\n}\n.panel-body-info[data-v-0d53a9c9] {\n}\n.panel-body-warning[data-v-0d53a9c9] {\n}\n.panel-body-danger[data-v-0d53a9c9] {\n}\n",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.wrapper[data-v-106783b7] {\n  position: absolute; \n  top: 0; \n  left: 0; \n  right: 0; \n  bottom: 0; \n  width: 750;\n}\n",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.container[data-v-45bd9d1b] {\n  flex-direction: row; \n  position: fixed; \n  top: 0; \n  left: 0; \n  right: 0; \n  width: 750;\n}\n.right-text[data-v-45bd9d1b] {\n  position: absolute; \n  bottom: 28; \n  right: 32; \n  text-align: right;\n  font-size: 32; \n  font-family: 'Open Sans', sans-serif;\n}\n.left-text[data-v-45bd9d1b] {\n  position: absolute; \n  bottom: 28; \n  left :32; \n  text-align :left;  \n  font-size: 32; \n  font-family: 'Open Sans', sans-serif;\n}\n.center-text[data-v-45bd9d1b] {\n  position: absolute; \n  bottom: 25; \n  left: 172; \n  right: 172;\n  text-align: center; \n  font-size: 36;\n}\n.left-image[data-v-45bd9d1b] {\n  position: absolute; \n  bottom: 20; \n  left: 28; \n  width: 50; \n  height: 50;\n}\n.right-image[data-v-45bd9d1b] {\n  position: absolute; \n  bottom: 20; \n  right: 28; \n  width: 50; \n  height: 50;\n}\n",""])},function(t,e,n){n(18);var o=n(0)(n(4),n(15),"data-v-45bd9d1b",null);o.options.__file="/Users/jsonlu/Desktop/jcut/src/include/navbar.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,n){n(17);var o=n(0)(n(5),n(14),"data-v-106783b7",null);o.options.__file="/Users/jsonlu/Desktop/jcut/src/include/navpage.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,n){n(16);var o=n(0)(n(6),n(13),"data-v-0d53a9c9",null);o.options.__file="/Users/jsonlu/Desktop/jcut/src/include/panel.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] panel.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["panel","panel-"+t.type],style:{borderWidth:t.border}},[n("text",{class:["panel-header","panel-header-"+t.type],style:{paddingTop:t.paddingHead,paddingBottom:t.paddingHead,paddingLeft:1.5*t.paddingHead,paddingRight:1.5*t.paddingHead}},[t._v(t._s(t.title))]),t._v(" "),n("div",{class:["panel-body","panel-body-"+t.type],style:{paddingTop:t.paddingBody,paddingBottom:t.paddingBody,paddingLeft:1.5*t.paddingBody,paddingRight:1.5*t.paddingBody}},[t._t("default")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("navbar",{attrs:{dataRole:t.dataRole,height:t.height,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),t._v(" "),n("div",{staticClass:"wrapper",style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():n("text",{staticClass:"right-text",style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t._v(" "),t.rightItemSrc?n("image",{staticClass:"right-image",attrs:{naviItemPosition:"right",src:t.rightItemSrc},on:{click:t.onclickrightitem}}):t._e(),t._v(" "),t.leftItemSrc?t._e():n("text",{staticClass:"left-text",style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t._v(" "),t.leftItemSrc?n("image",{staticClass:"left-image",attrs:{naviItemPosition:"left",src:t.leftItemSrc},on:{click:t.onclickleftitem}}):t._e(),t._v(" "),n("text",{staticClass:"center-text",style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){var o=n(7);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("6f139cd2",o,!1)},function(t,e,n){var o=n(8);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("fa1ff818",o,!1)},function(t,e,n){var o=n(9);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("26170a8d",o,!1)},function(t,e,n){"use strict";t.exports={props:{type:{default:"success"},value:{default:""}}}},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.tip[data-v-53062420] {\n  padding-left: 36px;\n  padding-right: 36px;\n  padding-top: 36px;\n  padding-bottom: 36px;\n  border-radius: 10px;\n}\n.tip-txt[data-v-53062420]{\n  font-size: 28px;\n}\n.tip-success[data-v-53062420] {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.tip-txt-success[data-v-53062420] {\n  color: #3c763d;\n}\n.tip-info[data-v-53062420] {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.tip-txt-info[data-v-53062420] {\n  color: #31708f;\n}\n.tip-warning[data-v-53062420] {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.tip-txt-warning[data-v-53062420] {\n  color: #8a6d3b;\n}\n.tip-danger[data-v-53062420] {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.tip-txt-danger[data-v-53062420] {\n  color: #a94442;\n}\n",""])},function(t,e,n){n(23);var o=n(0)(n(19),n(22),"data-v-53062420",null);o.options.__file="/Users/jsonlu/Desktop/jcut/src/include/tip.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] tip.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["tip","tip-"+t.type]},[n("text",{class:["tip-txt","tip-txt-"+t.type]},[t._v(t._s(t.value))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){var o=n(20);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("772161f7",o,!1)},,function(t,e,n){n(63);var o=n(0)(n(30),n(55),null,null);o.options.__file="/Users/jsonlu/Desktop/jcut/src/a.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] a.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},,,,,function(t,e,n){"use strict";t.exports={data:function(){return{img:"//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg",logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World",title:"Index",refresh_display:"hide",loading_display:"hide"}},components:{navpage:n(11),panel:n(12),tip:n(21)},methods:{update:function(t){this.target="Weex",console.log("target:",this.target)},onrefresh:function(t){var e=this;e.refresh_display="show",setTimeout(function(){e.refresh_display="hide"},3e3)},onloading:function(t){var e=this;e.loading_display="show",setTimeout(function(){e.loading_display="hide"},3e3)},pullingdown:function(t){}}}},,,,,,,,,function(t,e,n){"use strict";var o=n(25);o.el="#root",new Vue(o)},,,,,,function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.refresh-view {\n  height: 120px;\n  width: 750px;\n  display: -ms-flex;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  -webkit-box-align: center;\n  align-items: center;\n}\n.loading-view {\n  height: 80px;\n  width: 750px;\n  justify-content: center;\n  align-items: center;\n  background-color: #c0c0c0;\n}\n.wrapper {\n  align-items: center;\n  margin-top: 120px;\n}\n.title {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 48px;\n}\n.logo {\n  width: 360px;\n  height: 156px;\n}\n.desc {\n  padding-top: 20px;\n  color: #888;\n  font-size: 24px;\n}\n",""])},,,,,,,,,,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("navpage",{attrs:{dataRole:"none",title:t.title,backgroundColor:"#3F51B5"}},[n("scroller",[n("refresh",{staticClass:"refresh-view",attrs:{display:t.refresh_display},on:{refresh:t.onrefresh,pullingdown:t.pullingdown}},[n("img",{ref:"roate",staticStyle:{width:"50px",height:"50px"},attrs:{id:"roate",src:"http://gw.alicdn.com/bao/uploaded/TB1xDrVNFXXXXbEXFXXXXXXXXXX-48-48.png"}})]),t._v(" "),n("div",{staticClass:"wrapper",on:{click:t.update}},[n("image",{staticClass:"logo",attrs:{src:t.logoUrl}}),t._v(" "),n("text",{staticClass:"title"},[t._v("Hello "+t._s(t.target))]),t._v(" "),n("text",{staticClass:"desc"},[t._v("Now, let's use vue to build your weex app.")])]),t._v(" "),n("loading",{staticClass:"loading-view",attrs:{display:t.loading_display},on:{loading:t.onloading}},[n("loading-indicator",{staticStyle:{height:"60px",width:"60px"}})],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,,,,,function(t,e,n){var o=n(45);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("7d37cbdc",o,!1)}]);