// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=41)}([function(t,e){t.exports=function(t,e,n,o){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),o){var c=a.computed||(a.computed={});Object.keys(o).forEach(function(t){var e=o[t];c[t]=function(){return e}})}return{esModule:i,exports:r,options:a}}},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=u[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(r(n.parts[i]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(r(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function r(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(m)return h;o.parentNode.removeChild(o)}if(b){var r=f++;o=p||(p=i()),e=s.bind(null,o,r,!1),n=s.bind(null,o,r,!0)}else o=i(),e=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function s(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=v(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(3),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,m=!1,h=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){m=n;var i=l(t,e);return o(i),function(e){for(var n=[],r=0;r<i.length;r++){var s=i[r],a=u[s.id];a.refs--,n.push(a)}e?(i=l(t,e),o(i)):i=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},i=0;i<e.length;i++){var r=e[i],s=r[0],a=r[1],c=r[2],l=r[3],u={id:t+":"+i,css:a,media:c,sourceMap:l};o[s]?o[s].parts.push(u):n.push(o[s]={id:s,parts:[u]})}return n}},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.getBaseURL=function(t){var e,n=weex.config.bundleUrl,i=n.indexOf("your_current_IP")>=0||n.indexOf("file://assets/")>=0,r=n.indexOf("file:///")>=0&&n.indexOf("WeexDemo.app")>0;if(i)e="file://assets/";else if(r)e=n.substring(0,n.lastIndexOf("/")+1);else{var s="localhost:12580",a=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);a&&a.length>=2&&(s=a[1]),e="http://"+s+"/"+t.dir+"/"}var c="./index.html?page=../"+t.dir+"/",l=e;return"object"===("undefined"==typeof window?"undefined":o(window))&&(l=c),l}},,,function(t,e,n){n(65);var o=n(0)(n(35),n(57),null,null);o.options.__file="/Users/jsonlu/Desktop/jcut/src/index.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},,,,,,function(t,e,n){"use strict";t.exports={props:{tabItems:{default:[]},selectedColor:{default:"#ff0000"},unselectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:n(53)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var n=this.tabItems[e];e==t?(n.icon=n.selectedImage,n.titleColor=this.selectedColor,n.visibility="visible"):(n.icon=n.image,n.titleColor=this.unselectedColor,n.visibility="hidden")}}}}},function(t,e,n){"use strict";t.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},icon:{default:""},backgroundColor:{default:"#ffffff"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},function(t,e,n){"use strict";var o=n(24).getBaseURL,i=n(38).tabItems;t.exports={data:function(){return{dir:"dist",tabItems:i,baseURL:""}},components:{tabbar:n(52)},created:function(){this.baseURL=o(this),console.log(this.baseURL);for(var t=0;t<this.tabItems.length;t++){var e=this.tabItems[t];e.src=this.baseURL+e.src}},methods:{tabBarOnClick:function(t){var e=this.tabItems[t.index].src;console.log(e)}}}},,,function(t,e,n){"use strict";var o=[{index:0,title:"tab1",titleColor:"#000000",icon:"",image:"http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png",selectedImage:"http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png",src:"a.js",visibility:"visible"},{index:1,title:"tab2",titleColor:"#000000",icon:"",image:"http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png",selectedImage:"http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png",src:"image.js",visibility:"hidden"},{index:2,title:"tab3",titleColor:"#000000",icon:"",image:"http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png",selectedImage:"http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png",src:"text.js",visibility:"hidden"}];t.exports={tabItems:o}},,,function(t,e,n){"use strict";var o=n(27);o.el="#root",new Vue(o)},,,function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.container[data-v-0b603ead] {\n  flex: 1; \n  flex-direction: column; \n  align-items:center; \n  justify-content:center; \n  height: 88;\n}\n.top-line[data-v-0b603ead] {\n  position: absolute; \n  top: 0; \n  left: 0; \n  right: 0; \n  height: 2;\n}\n.tab-icon[data-v-0b603ead] {\n  margin-top: 5; \n  width: 40; \n  height: 40\n}\n.tab-text[data-v-0b603ead] {\n  margin-top: 5; \n  text-align: center;  \n  font-size: 20;\n}\n",""])},,,function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.title{\n  width: 750;\n  height: 30;\n  background-color: #0088fb;\n}\n",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.i,"\n.wrapper[data-v-3c427b2e] {\n  width: 750;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.content[data-v-3c427b2e] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: 0;\n  margin-bottom: 88;\n}\n.tabbar[data-v-3c427b2e] {\n  flex-direction: row;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 88;\n}\n",""])},,,,function(t,e,n){n(66);var o=n(0)(n(33),n(58),"data-v-3c427b2e",null);o.options.__file="/Users/jsonlu/Desktop/jcut/src/include/tabbar.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] tabbar.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,n){n(62);var o=n(0)(n(34),n(54),"data-v-0b603ead",null);o.options.__file="/Users/jsonlu/Desktop/jcut/src/include/tabitem.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] tabitem.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",style:{backgroundColor:t.backgroundColor},on:{click:t.onclickitem}},[n("image",{staticClass:"top-line",attrs:{src:"http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"}}),t._v(" "),n("image",{staticClass:"tab-icon",attrs:{src:t.icon}}),t._v(" "),n("text",{staticClass:"tab-text",style:{color:t.titleColor}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},,,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"flex-direction":"column"}},[n("tabbar",{attrs:{tabItems:t.tabItems},on:{tabBarOnClick:t.tabBarOnClick}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[t._l(t.tabItems,function(t,e){return n("embed",{key:e,staticClass:"content",style:{visibility:t.visibility},attrs:{src:t.src,type:"weex"}})}),t._v(" "),n("div",{staticClass:"tabbar",attrs:{append:"tree"}},t._l(t.tabItems,function(e){return n("tabitem",{key:e.index,attrs:{index:e.index,icon:e.icon,title:e.title,titleColor:e.titleColor},on:{tabItemOnClick:t.tabItemOnClick}})}))],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,function(t,e,n){var o=n(44);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("6e7db22d",o,!1)},,,function(t,e,n){var o=n(47);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("13f56ca5",o,!1)},function(t,e,n){var o=n(48);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("2dee366c",o,!1)}]);