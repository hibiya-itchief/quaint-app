(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{274:function(t,e,r){var content=r(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("4d6a2e0f",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";var n=r(463),o=r(464),_=r(465),c=r(470),v=r(221),l=r(208),d=r(63),m=r(454),h=r(468),f=r(453),w=r(206),y=r(210),x=r(142),N=r(211),k=r(119),C=r(90),O=r(469),E=r(467),S=r(466),j=r(235),z=r(28),F=(r(78),r(3),r(41),r(42),{name:"DefaultLayout",data:function(){return{drawer:null,user_me:{},user_me_authority:{owner_of:[],authorizer_of:[]},logged_in:!1}},fetch:function(){var t=this;return Object(z.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],!1,e.next=4,Promise.all([t.$axios.get("/users/me"),t.$axios.get("/users/me/authority")]).then((function(e){t.user_me=e[0].data,t.user_me_authority=e[1].data,t.logged_in=!0})).catch((function(){!1}));case 4:case"end":return e.stop()}}),e)})))()},methods:{logOut:function(){var t=this;return Object(z.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:location.reload();case 3:case"end":return e.stop()}}),e)})))()}}}),R=r(96),component=Object(R.a)(F,(function(){var t=this,e=t._self._c;return e(n.a,[e(l.a,{staticClass:"overflow-hidden"},[e(o.a,{attrs:{fixed:"",color:"light-blue",dark:"",app:"","elevate-on-scroll":""}},[e(_.a,{on:{click:function(e){t.drawer=!0}}}),t._v(" "),e(j.a,[e("NuxtLink",{staticClass:"ma-0 pa-0",attrs:{to:"/",tag:"div"}},[t._v("星陵祭2022")])],1),t._v(" "),e(S.a),t._v(" "),e(v.a,{attrs:{icon:""}},[e("a",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{href:"https://docs.seiryofes.com"}},[e(w.a,[t._v("\n          mdi-help-circle-outline\n        ")])],1)])],1)],1),t._v(" "),e(E.a,{attrs:{absolute:"",temporary:"",height:"100vh"},scopedSlots:t._u([{key:"append",fn:function(){return[e("div",{staticClass:"pa-0"},[e(y.a,{attrs:{nav:"",dense:""}},[e(N.a,{attrs:{"active-class":"light-blue--text text--accent-4"}},[e(x.a,[e(k.a,[e(w.a,[t._v("mdi-file-document")])],1),t._v(" "),e(C.c,[e("a",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{href:"https://docs.seiryofes.com"}},[t._v("このサイトの使い方")])])],1),t._v(" "),e(x.a,[e(k.a,[e(w.a,[t._v("mdi-github")])],1),t._v(" "),e(C.c,[e("a",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{href:"https://github.com/hibiya-itchief"}},[t._v("GitHub")])])],1),t._v(" "),e(f.a),t._v(" "),e("p",{staticClass:"ma-0 pa-0 text-caption grey--text"},[t._v("© 2022 東京都立日比谷高校 星陵祭チーフ会 IT部隊 | SeiryoFes IT Chief Tokyo Metropolitan Hibiya High School")])],1)],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(y.a,{attrs:{nav:"",dense:""}},[e(N.a,{attrs:{"active-class":"light-blue--text text--accent-4"}},[e(l.a,{directives:[{name:"show",rawName:"v-show",value:t.logged_in,expression:"logged_in"}],attrs:{elevation:"0"}},[e(d.d,{staticClass:"px-2 py-1"},[e(w.a,{staticClass:"mr-4"},[t._v("mdi-account-circle")]),t._v(t._s(t.user_me.username))],1),t._v(" "),e(d.c,{staticClass:"px-2 py-1"},[e(h.a,{attrs:{column:""}},[e(m.a,{directives:[{name:"show",rawName:"v-show",value:t.user_me_authority.is_admin,expression:"user_me_authority.is_admin"}],attrs:{outlined:""}},[t._v("\n                👑Admin\n              ")]),t._v(" "),e(m.a,{directives:[{name:"show",rawName:"v-show",value:t.user_me_authority.is_Entry,expression:"user_me_authority.is_Entry"}],attrs:{outlined:""}},[t._v("\n                Entry\n              ")]),t._v(" "),e(m.a,{directives:[{name:"show",rawName:"v-show",value:0!=t.user_me_authority.owner_of.length,expression:"user_me_authority.owner_of.length!=0"}],attrs:{outlined:""}},[t._v("\n                Owner\n              ")]),t._v(" "),e(m.a,{directives:[{name:"show",rawName:"v-show",value:0!=t.user_me_authority.authorizer_of.length,expression:"user_me_authority.authorizer_of.length!=0"}],attrs:{outlined:""}},[t._v("\n                Authorizer\n              ")]),t._v(" "),e(m.a,{directives:[{name:"show",rawName:"v-show",value:t.user_me.is_student,expression:"user_me.is_student"}],attrs:{outlined:""}},[t._v("\n                生徒用アカウント\n              ")]),t._v(" "),e(m.a,{directives:[{name:"show",rawName:"v-show",value:t.user_me.is_family,expression:"user_me.is_family"}],attrs:{outlined:""}},[t._v("\n                家族用アカウント\n              ")]),t._v(" "),e(m.a,{directives:[{name:"show",rawName:"v-show",value:t.user_me.is_active,expression:"user_me.is_active"}],attrs:{outlined:""}},[t._v("\n                校内入場処理済み\n              ")])],1),t._v(" "),e("p",{staticClass:"ma-0 pa-0 text-caption grey--text"},[t._v("ユーザーID："+t._s(t.user_me.id))])],1),t._v(" "),e(d.a,[e(S.a),t._v(" "),e(v.a,{attrs:{outlined:"",color:"primary"},on:{click:function(e){return t.logOut()}}},[t._v("\n              ログアウト\n            ")])],1)],1),t._v(" "),e(l.a,{directives:[{name:"show",rawName:"v-show",value:!t.logged_in,expression:"!logged_in"}],attrs:{elevation:"0"}},[e(d.d,{staticClass:"px-2 py-1"},[e(w.a,{staticClass:"mr-4"},[t._v("mdi-account-circle")]),e("span",{staticClass:"grey--text text-caption"},[t._v("ログインしていません")])],1),t._v(" "),e(d.c,{staticClass:"px-2 py-1"}),t._v(" "),e(d.a,[e(S.a),t._v(" "),e(v.a,{attrs:{outlined:"",color:"primary",to:"/login"}},[t._v("\n              ログイン\n            ")])],1)],1),t._v(" "),e(f.a)],1)],1)],1),t._v(" "),e(O.a,[e("Nuxt")],1),t._v(" "),e(c.a,{attrs:{color:"light-blue",fixed:"",app:""}},[e(v.a,{attrs:{to:"/"}},[e("span",[t._v("ホーム")]),t._v(" "),e(w.a,[t._v("mdi-home")])],1),t._v(" "),e(v.a,{attrs:{to:"/groups"}},[e("span",[t._v("探す")]),t._v(" "),e(w.a,[t._v("mdi-magnify")])],1),t._v(" "),e(v.a,{attrs:{to:"/tickets"}},[e("span",[t._v("整理券")]),t._v(" "),e(w.a,[t._v("mdi-ticket")])],1),t._v(" "),e(v.a,{directives:[{name:"show",rawName:"v-show",value:t.user_me_authority.is_entry,expression:"user_me_authority.is_entry"}],attrs:{to:"/scan/entry"}},[e("span",[t._v("QR")]),t._v(" "),e(w.a,[t._v("mdi-qrcode")])],1),t._v(" "),e(v.a,{directives:[{name:"show",rawName:"v-show",value:t.user_me_authority.is_admin,expression:"user_me_authority.is_admin"}],attrs:{to:"/admin"}},[e("span",[t._v("👑Admin")]),t._v(" "),e(w.a,[t._v("mdi-crown")])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},310:function(t,e,r){r(311),t.exports=r(312)},356:function(t,e,r){"use strict";r(274)},357:function(t,e,r){var n=r(17)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},427:function(t,e){},86:function(t,e,r){"use strict";var n=r(463),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},_=(r(356),r(96)),component=Object(_.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[310,15,5,16]]]);