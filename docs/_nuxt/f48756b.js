(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{525:function(t,e,r){"use strict";r(13),r(3),r(12),r(88),r(38),r(302),r(472),r(76),r(95);var n=r(1);var o,c=r(123);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},528:function(t,e,r){"use strict";r(8),r(13),r(14),r(15);var n=r(2),o=(r(3),r(27),r(12),r(24),r(68),r(482),r(41),r(483),r(484),r(485),r(486),r(487),r(488),r(489),r(490),r(491),r(492),r(493),r(494),r(495),r(42),r(59),r(9),r(88),r(472),r(1)),c=r(123),l=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.H)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.H)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(O)};function h(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var n=r[t],o=h(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},615:function(t,e,r){"use strict";r.r(e);var n=r(463),o=r(528),c=r(525),l=r(206),f=r(609),d=r(28),v=(r(78),r(3),r(41),r(42),{data:function(){return{}},asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,r=t.error,n=t.$axios,{},o={owner_of:[],authorizer_of:[]},e.next=5,Promise.all([n.get("/users/me/authority")]).then((function(t){o=t[0].data})).catch((function(t){}));case 5:if(1==o.is_admin){e.next=7;break}return e.abrupt("return",r({statusCode:404,message:"Not Found"}));case 7:case"end":return e.stop()}}),e)})))()}}),m=r(96),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e(n.a,[e(c.a,[e(f.a,{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},[e(o.a,{staticClass:"ma-0 pa-0",attrs:{cols:"12",md:"8",lg:"6"}},[e("p",{staticClass:"text-h5"},[e(l.a,{attrs:{color:"amber"}},[t._v("mdi-crown")]),t._v("Admin Settings")],1),t._v(" "),e("NuxtLink",{attrs:{to:"/admin/logs"}},[t._v("ログの表示")]),t._v(" "),e("NuxtLink",{attrs:{to:"/admin/users"}},[t._v("ユーザー")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);