// { "framework": "Vue"} 

!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=37)}([,,,,,,,,,,,,,,,,function(t,e,i){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.getBaseURL=function(t){var e,i=weex.config.bundleUrl,s=i.indexOf("your_current_IP")>=0||i.indexOf("file://assets/")>=0,o=i.indexOf("file:///")>=0&&i.indexOf("WeexDemo.app")>0;if(s)e="file://assets/";else if(o)e=i.substring(0,i.lastIndexOf("/")+1);else{var r="localhost:12580",c=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);c&&c.length>=2&&(r=c[1]),e="http://"+r+"/"+t.dir+"/"}var a="./index.html?page=../"+t.dir+"/",l=e;return"object"===("undefined"==typeof window?"undefined":n(window))&&(l=a),l}},,,function(t,e,i){"use strict";var n=i(16).getBaseURL,s=i(31).tabItems;t.exports={data:function(){return{dir:"Jsonlu/weex/master/dist/a",tabItems:s,baseURL:""}},components:{tabbar:i(35)},created:function(){this.baseURL=n(this),console.log(this.baseURL);for(var t=0;t<this.tabItems.length;t++){var e=this.tabItems[t];e.src=this.baseURL+e.src}},methods:{tabBarOnClick:function(t){var e=this.tabItems[t.index].src;console.log(e)}}}},,,,function(t,e){t.exports={title:{width:750,height:30,backgroundColor:"#0088fb"}}},,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{flexDirection:"column"}},[i("tabbar",{attrs:{tabItems:t.tabItems},on:{tabBarOnClick:t.tabBarOnClick}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,function(t,e,i){"use strict";var n=[{index:0,title:"tab1",titleColor:"#000000",icon:"",image:"http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png",selectedImage:"http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png",src:"a.js",visibility:"visible"},{index:1,title:"tab2",titleColor:"#000000",icon:"",image:"http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png",selectedImage:"http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png",src:"image.js",visibility:"hidden"},{index:2,title:"tab3",titleColor:"#000000",icon:"",image:"http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png",selectedImage:"http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png",src:"text.js",visibility:"hidden"}];t.exports={tabItems:n}},,,,function(t,e,i){var n,s,o=[];o.push(i(45)),n=i(41);var r=i(48);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jsonlu/Desktop/jcut/src/include/tabbar.vue",s.render=r.render,s.staticRenderFns=r.staticRenderFns,s._scopeId="data-v-793a1d24",s.style=s.style||{},o.forEach(function(t){for(var e in t)s.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,o),t.exports=n},function(t,e,i){var n,s,o=[];o.push(i(44)),n=i(42);var r=i(47);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jsonlu/Desktop/jcut/src/include/tabitem.vue",s.render=r.render,s.staticRenderFns=r.staticRenderFns,s._scopeId="data-v-5a61f048",s.style=s.style||{},o.forEach(function(t){for(var e in t)s.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,o),t.exports=n},function(t,e,i){var n,s,o=[];o.push(i(23)),n=i(19);var r=i(27);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(Object.keys(n).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s=n=n.default),"function"==typeof s&&(s=s.options),s.__file="/Users/jsonlu/Desktop/jcut/src/index.vue",s.render=r.render,s.staticRenderFns=r.staticRenderFns,s._scopeId="data-v-5f1174ce",s.style=s.style||{},o.forEach(function(t){for(var e in t)s.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,o),t.exports=n,t.exports.el="true",new Vue(t.exports)},,,,function(t,e,i){"use strict";t.exports={props:{tabItems:{default:[]},selectedColor:{default:"#ff0000"},unselectedColor:{default:"#000000"}},data:function(){return{selectedIndex:0}},components:{tabitem:i(36)},created:function(){this.select(this.selectedIndex)},methods:{tabItemOnClick:function(t){this.selectedIndex=t.index,this.select(t.index),this.$emit("tabBarOnClick",t)},select:function(t){for(var e=0;e<this.tabItems.length;e++){var i=this.tabItems[e];e==t?(i.icon=i.selectedImage,i.titleColor=this.selectedColor,i.visibility="visible"):(i.icon=i.image,i.titleColor=this.unselectedColor,i.visibility="hidden")}}}}},function(t,e,i){"use strict";t.exports={props:{index:{default:0},title:{default:""},titleColor:{default:"#000000"},icon:{default:""},backgroundColor:{default:"#ffffff"}},methods:{onclickitem:function(t){var e={index:this.index};this.$emit("tabItemOnClick",e)}}}},,function(t,e){t.exports={container:{flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",height:88},"top-line":{position:"absolute",top:0,left:0,right:0,height:2},"tab-icon":{marginTop:5,width:40,height:40},"tab-text":{marginTop:5,textAlign:"center",fontSize:20}}},function(t,e){t.exports={wrapper:{width:750,position:"absolute",top:0,left:0,right:0,bottom:0},content:{position:"absolute",top:0,left:0,right:0,bottom:0,marginTop:0,marginBottom:88},tabbar:{flexDirection:"row",position:"fixed",bottom:0,left:0,right:0,height:88}}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["container"],style:{backgroundColor:t.backgroundColor},on:{click:t.onclickitem}},[i("image",{staticClass:["top-line"],attrs:{src:"http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"}}),i("image",{staticClass:["tab-icon"],attrs:{src:t.icon}}),i("text",{staticClass:["tab-text"],style:{color:t.titleColor}},[t._v(t._s(t.title))])])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["wrapper"]},[t._l(t.tabItems,function(t,e){return i("embed",{key:e,staticClass:["content"],style:{visibility:t.visibility},attrs:{src:t.src,type:"weex"}})}),i("div",{staticClass:["tabbar"],appendAsTree:!0,attrs:{append:"tree"}},t._l(t.tabItems,function(e){return i("tabitem",{key:e.index,attrs:{index:e.index,icon:e.icon,title:e.title,titleColor:e.titleColor},on:{tabItemOnClick:t.tabItemOnClick}})}))],2)},staticRenderFns:[]},t.exports.render._withStripped=!0}]);