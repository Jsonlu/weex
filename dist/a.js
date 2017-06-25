// { "framework": "Vue"} 

!function(t){function e(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=31)}([function(t,e,r){var o,i,n=[];n.push(r(6)),o=r(3);var a=r(9);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jsonlu/Desktop/jcut/src/include/navbar.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-2741cc20",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o},function(t,e,r){var o,i,n=[];n.push(r(7)),o=r(4);var a=r(10);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jsonlu/Desktop/jcut/src/include/navpage.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-5f693552",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o},function(t,e,r){var o,i,n=[];n.push(r(8)),o=r(5);var a=r(11);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jsonlu/Desktop/jcut/src/include/tip.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-ac82498a",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o},function(t,e,r){"use strict";t.exports={props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"white"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"white"}},methods:{onclickrightitem:function(t){this.$emit("naviBarRightItemClick")},onclickleftitem:function(t){this.$emit("naviBarLeftItemClick")}}}},function(t,e,r){"use strict";t.exports={components:{navbar:r(0)},props:{dataRole:{default:"navbar"},backgroundColor:{default:"black"},height:{default:88},title:{default:""},titleColor:{default:"white"},rightItemSrc:{default:""},rightItemTitle:{default:""},rightItemColor:{default:"white"},leftItemSrc:{default:""},leftItemTitle:{default:""},leftItemColor:{default:"white"}},methods:{naviBarRightItemClick:function(t){this.$emit("naviBarRightItemClick",t)},naviBarLeftItemClick:function(t){this.$emit("naviBarLeftItemClick",t)}}}},function(t,e,r){"use strict";t.exports={props:{type:{default:"success"},value:{default:""}}}},function(t,e){t.exports={container:{flexDirection:"row",position:"fixed",top:0,left:0,right:0,width:750},"right-text":{position:"absolute",bottom:28,right:32,textAlign:"right",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"left-text":{position:"absolute",bottom:28,left:32,textAlign:"left",fontSize:32,fontFamily:"'Open Sans', sans-serif"},"center-text":{position:"absolute",bottom:25,left:172,right:172,textAlign:"center",fontSize:36},"left-image":{position:"absolute",bottom:20,left:28,width:50,height:50},"right-image":{position:"absolute",bottom:20,right:28,width:50,height:50}}},function(t,e){t.exports={wrapper:{position:"absolute",top:0,left:0,right:0,bottom:0,width:750}}},function(t,e){t.exports={tip:{paddingLeft:36,paddingRight:36,paddingTop:36,paddingBottom:36,borderRadius:10},"tip-txt":{fontSize:28},"tip-success":{backgroundColor:"#dff0d8",borderColor:"#d6e9c6"},"tip-txt-success":{color:"#3c763d"},"tip-info":{backgroundColor:"#d9edf7",borderColor:"#bce8f1"},"tip-txt-info":{color:"#31708f"},"tip-warning":{backgroundColor:"#fcf8e3",borderColor:"#faebcc"},"tip-txt-warning":{color:"#8a6d3b"},"tip-danger":{backgroundColor:"#f2dede",borderColor:"#ebccd1"},"tip-txt-danger":{color:"#a94442"}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["container"],style:{height:t.height,backgroundColor:t.backgroundColor},attrs:{dataRole:t.dataRole}},[t.rightItemSrc?t._e():r("text",{staticClass:["right-text"],style:{color:t.rightItemColor},attrs:{naviItemPosition:"right"},on:{click:t.onclickrightitem}},[t._v(t._s(t.rightItemTitle))]),t.rightItemSrc?r("image",{staticClass:["right-image"],attrs:{naviItemPosition:"right",src:t.rightItemSrc},on:{click:t.onclickrightitem}}):t._e(),t.leftItemSrc?t._e():r("text",{staticClass:["left-text"],style:{color:t.leftItemColor},attrs:{naviItemPosition:"left"},on:{click:t.onclickleftitem}},[t._v(t._s(t.leftItemTitle))]),t.leftItemSrc?r("image",{staticClass:["left-image"],attrs:{naviItemPosition:"left",src:t.leftItemSrc},on:{click:t.onclickleftitem}}):t._e(),r("text",{staticClass:["center-text"],style:{color:t.titleColor},attrs:{naviItemPosition:"center"}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:["wrapper"]},[r("navbar",{attrs:{dataRole:t.dataRole,height:t.height,backgroundColor:t.backgroundColor,title:t.title,titleColor:t.titleColor,leftItemSrc:t.leftItemSrc,leftItemTitle:t.leftItemTitle,leftItemColor:t.leftItemColor,rightItemSrc:t.rightItemSrc,rightItemTitle:t.rightItemTitle,rightItemColor:t.rightItemColor},on:{naviBarRightItemClick:t.naviBarRightItemClick,naviBarLeftItemClick:t.naviBarLeftItemClick}}),r("div",{staticClass:["wrapper"],style:{marginTop:t.height}},[t._t("default")],2)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["tip","tip-"+t.type]},[r("text",{class:["tip-txt","tip-txt-"+t.type]},[t._v(t._s(t.value))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,r){var o,i,n=[];n.push(r(14)),o=r(13);var a=r(15);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jsonlu/Desktop/jcut/src/include/panel.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-ce89f3b8",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o},function(t,e,r){"use strict";t.exports={props:{type:{default:"default"},title:{default:""},paddingBody:{default:20},paddingHead:{default:20},dataClass:{default:""},border:{default:0}}}},function(t,e){t.exports={panel:{marginBottom:20,backgroundColor:"#ffffff",borderColor:"#dddddd",borderWidth:1},"panel-primary":{borderColor:"rgb(40,96,144)"},"panel-success":{borderColor:"rgb(76,174,76)"},"panel-info":{borderColor:"rgb(70,184,218)"},"panel-warning":{borderColor:"rgb(238,162,54)"},"panel-danger":{borderColor:"rgb(212,63,58)"},"panel-header":{backgroundColor:"#f5f5f5",fontSize:40,color:"#333333"},"panel-header-primary":{backgroundColor:"rgb(40,96,144)",color:"#ffffff"},"panel-header-success":{backgroundColor:"rgb(92,184,92)",color:"#ffffff"},"panel-header-info":{backgroundColor:"rgb(91,192,222)",color:"#ffffff"},"panel-header-warning":{backgroundColor:"rgb(240,173,78)",color:"#ffffff"},"panel-header-danger":{backgroundColor:"rgb(217,83,79)",color:"#ffffff"},"panel-body":{paddingLeft:12,paddingRight:12,paddingTop:20,paddingBottom:20}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["panel","panel-"+t.type],style:{borderWidth:t.border}},[r("text",{class:["panel-header","panel-header-"+t.type],style:{paddingTop:t.paddingHead,paddingBottom:t.paddingHead,paddingLeft:1.5*t.paddingHead,paddingRight:1.5*t.paddingHead}},[t._v(t._s(t.title))]),r("div",{class:["panel-body","panel-body-"+t.type],style:{paddingTop:t.paddingBody,paddingBottom:t.paddingBody,paddingLeft:1.5*t.paddingBody,paddingRight:1.5*t.paddingBody}},[t._t("default")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},,function(t,e,r){"use strict";t.exports={data:function(){return{img:"//gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg",logoUrl:"http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png",target:"World",title:"Index",refresh_display:"hide",loading_display:"hide"}},components:{navpage:r(1),panel:r(12),tip:r(2)},methods:{update:function(t){this.target="Weex",console.log("target:",this.target)},onrefresh:function(t){var e=this;e.refresh_display="show",setTimeout(function(){e.refresh_display="hide"},3e3)},pullingdown:function(t){}}}},,,,,function(t,e){t.exports={"refresh-view":{height:120,width:750,display:"flex",MsFlexAlign:"center",WebkitAlignItems:"center",WebkitBoxAlign:"center",alignItems:"center"},wrapper:{alignItems:"center",marginTop:120},title:{paddingTop:40,paddingBottom:40,fontSize:48},logo:{width:360,height:156},desc:{paddingTop:20,color:"#888888",fontSize:24}}},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("navpage",{attrs:{dataRole:"none",title:t.title,backgroundColor:"#EA2228"}},[r("scroller",[r("refresh",{staticClass:["refresh-view"],attrs:{display:t.refresh_display},on:{refresh:t.onrefresh,pullingdown:t.pullingdown}},[r("loading-indicator",{staticStyle:{height:"60px",width:"60px"}})],1),r("div",{staticClass:["wrapper"],on:{click:t.update}},[r("image",{staticClass:["logo"],attrs:{src:t.logoUrl}}),r("text",{staticClass:["title"]},[t._v("Hello "+t._s(t.target))]),r("text",{staticClass:["desc"]},[t._v("Now, let's use vue to build your weex app.")])])],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,,,function(t,e,r){var o,i,n=[];n.push(r(22)),o=r(17);var a=r(25);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i=o=o.default),"function"==typeof i&&(i=i.options),i.__file="/Users/jsonlu/Desktop/jcut/src/a.vue",i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-5162a5b0",i.style=i.style||{},n.forEach(function(t){for(var e in t)i.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(i._scopeId,n),t.exports=o,t.exports.el="true",new Vue(t.exports)}]);