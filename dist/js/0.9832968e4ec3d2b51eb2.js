webpackJsonp([0,1],{265:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(274),i=a(275);var n=function(t){a(272)},o=a(19)(s.a,i.a,!1,n,"data-v-c4303a6e",null);e.default=o.exports},268:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(286),i=a(287);var n=function(t){a(284)},o=a(19)(s.a,i.a,!1,n,null,null);e.default=o.exports},271:function(t,e,a){"use strict";e.a={icon:function(t){return"BROWSER"===t.type?"tab":"DESKTOP"===t.type?"flash_on":"MOBILE"===t.type?"phone_android":"add"},color:function(t){return"OFFLINE"===t.status?"grey":"ONLINE"===t.status?"blue":"ACTIVE"===t.status?"green":void 0}}},272:function(t,e,a){var s=a(273);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(264)("4a2b2840",s,!0)},273:function(t,e,a){(t.exports=a(263)(void 0)).push([t.i,".layout-padding[data-v-c4303a6e]{max-width:700px}",""])},274:function(t,e,a){"use strict";var s=a(13),i=a.n(s),n=a(14),o=a.n(n),r=a(271);a(12);e.a={data:function(){return{parseDevice:r.a,thisDevice:{name:"",power:"",status:"",id:"",meta:{},icon:"",type:""},pending:!1,toggle:!1}},computed:{},methods:{},props:["thisUser","authenticated","api","deviceId","thisModal","ch"],mounted:function(){},watch:{deviceId:function(){var t=o()(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=8;break}return this.pending=!0,t.next=4,this.api.device.get(this.deviceId);case 4:this.thisDevice=t.sent,"ACTIVE"==this.thisDevice.status&&(this.toggle=!0),this.thisDevice.icon=r.a.icon(this.thisDevice),this.pending=!1;case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),toggle:function(){var t=o()(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),this.$e.$emit("ch.toggle",e);case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}},275:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-transition",{attrs:{appear:"appear",enter:"fadeIn",leave:"fadeOut"}},[a("div",{staticClass:"layout-padding relative-position"},[a("h5",{staticClass:"text-center"},[t._v("Configure Device")]),a("p",{staticClass:"text-center inline"},[t._v(t._s(t.thisDevice.name)),a("q-icon",{staticClass:"on-right",attrs:{name:t.thisDevice.icon,color:t.parseDevice.color(t.thisDevice)}})],1),a("q-alert",{attrs:{color:"green",icon:"info",enter:"fadeIn",leave:"fadeOut",dismissible:"dismissible"}},[a("p",[t._v("You can manaully configure the secure applications which Boid will run on this device.")])]),a("p",{staticClass:"light-paragraph text-center"}),a("div",{staticClass:"text-center",staticStyle:{"margin-top":"10px"}},[a("q-btn",{attrs:{color:"blue"},on:{click:function(e){t.thisModal.close()}}},[t._v("finished")])],1),a("q-inner-loading",{attrs:{visible:t.pending}},[a("q-spinner-ball",{attrs:{size:"70px",color:"blue"}})],1)],1)])},staticRenderFns:[]};e.a=s},284:function(t,e,a){var s=a(285);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(264)("479aa6d6",s,!0)},285:function(t,e,a){(t.exports=a(263)(void 0)).push([t.i,".q-card{padding:10px;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.tokenimg{width:50px}.tokenlist:hover{background-color:#f5f5f5}.hovericon:hover{color:#2196f3}.hovericon{color:#bdbdbd}.power{color:#fff176}.infobtn{color:#9e9e9e;font-size:15px;right:10px}.infobtn:hover{color:#4caf50}.q-btn-round.q-btn-small{width:30px;height:30px}",""])},286:function(t,e,a){"use strict";var s,i=a(54),n=a.n(i),o=a(13),r=a.n(o),l=a(14),c=a.n(l),d=a(265),u=a(271),h=a(12),p={wallet:{heading:"Your Wallet",body:"Tokens and coins which you earn from your team will show up in your wallet.\n          To earn more, you need to increase your Power by running Boid on more devices or inviting more users.\n          During the Alpha, only BOIDs are generated."},power:{heading:"Boid Power",body:"Your Boid Power is your score that shows how much influence you have on Boid.  The higher your Power,\n          the more you will earn and the higher you will climb in the leaderboards. When you invite others, you\n          earn some power when they run the app."},devices:{heading:"Your Devices",body:"When you install the Boid application on multiple devices (desktops, laptops, phones), \n          you will be able to manage your devices here."},team:{heading:"Your Team",body:"Your power generated goes towards your Team, in eachange, each team will distribute exclusive rewards. \n          You are automatically on the team of the user who has invited you."},social:{heading:"Social",body:"When users join Boid using your invite link you will receive a small percentage of bonus power based\n          on their contributions. Your Invite link changes if you change your username."}};e.a={name:"index",data:function(){return{openURL:h.openURL,info:p,currentDevice:null,devices:[],parseDevice:u.a,leaderboard:[],teamLeaderboard:[],pollLeaderboard:null}},computed:{userPower:function(){return"lul"}},methods:(s={updateLeaderboards:function(){var t=c()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.api.leaderboard.global();case 2:return this.leaderboard=t.sent,t.next=5,this.api.leaderboard.teams();case 5:this.teamLeaderboard=t.sent,console.log("updateLeaderboard",this.leaderboard);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),toggleDevice:function(t){console.log(t)},configDevice:function(t){this.currentDevice=t,this.$refs.deviceModal.open()}},n()(s,"toggleDevice",function(){var t=c()(r.a.mark(function t(e){var a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("TOGGLE STATE",e.toggle),t.prev=1,e.toggle){t.next=8;break}return t.next=5,this.api.device.updateStatus({deviceId:e.id,status:"ACTIVE"});case 5:a=t.sent,t.next=12;break;case 8:return console.log("online"),t.next=11,this.api.device.updateStatus({deviceId:e.id,status:"ONLINE"});case 11:a=t.sent;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:return t.prev=17,console.log(a),this.$e.$emit("refreshUser"),this.$e.$emit("ch.toggle",e.toggle),t.finish(17);case 22:case"end":return t.stop()}},t,this,[[1,14,17,22]])}));return function(e){return t.apply(this,arguments)}}()),n()(s,"init",function(){this.devices=this.thisUser.devices}),s),mounted:function(){this.init(),this.updateLeaderboards(),setInterval(this.updateLeaderboard,2e5)},watch:{thisUser:function(){this.init()},adBlock:function(){console.log("here we are")}},props:["thisUser","authenticated","api","ch","adBlock"],components:{device:d.default}}},287:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"layout-padding"},[t.authenticated?a("big",{staticClass:"thin-paragraph"},[t._v("User Dashboard")]):a("big",{staticClass:"thin-paragraph"},[t._v("Global Leaderboards")]),a("br"),a("br"),a("div",{staticClass:"row gutter justify-center"},[t.authenticated?a("div",{staticClass:"col-md-4 col-lg-4 col-xl-3"},[a("div",[a("q-card",{staticClass:"relative-position animate-scale"},[a("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[a("q-icon",{attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.power)}}})],1),a("p",{staticClass:"light-paragraph text-center"},[t._v("Power Rating")]),a("div",{staticStyle:{margin:"auto"}},[a("p",{staticClass:"text-center"},[t._v(t._s(parseInt(t.thisUser.powerRatings[0].power))),a("q-icon",{staticClass:"text-center",staticStyle:{"font-size":"50px"},attrs:{color:"yellow",name:"flash_on"}}),a("small",{staticClass:"block light-paragraph small"},[t._v("Devices: "+t._s(parseInt(t.thisUser.powerRatings[0].meta.devices))),a("q-icon",{attrs:{name:"flash_on",color:"yellow"}})],1),a("small",{staticClass:"block light-paragraph"},[t._v("Social: "+t._s(parseInt(t.thisUser.powerRatings[0].meta.social))),a("q-icon",{attrs:{name:"flash_on",color:"yellow"}})],1)],1)])],1),a("q-card",{staticClass:"animate-scale relative-position"},[a("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[a("q-icon",{attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.social)}}})],1),a("p",{staticClass:"light-paragraph text-center"},[t._v("Social")]),a("p",[t._v("Users Invited: "+t._s(t.thisUser.invited.length))]),a("p",[t._v("Power from Invited Users: "+t._s(parseInt(t.thisUser.powerRatings[0].meta.social)))]),a("q-btn",{staticClass:"full-width",attrs:{color:"green"},on:{click:function(e){t.$e.$emit("openSocialModal")}}},[t._v("Get Invite Link")])],1),a("q-card",{staticClass:"animate-scale relative-position"},[a("div",{staticClass:"light-paragraph text-center"},[t._v("My Profile")]),a("table",{staticClass:"q-table",staticStyle:{width:"100%"}},[a("tbody",[a("tr",[a("td",[a("img",{staticClass:"tokenimg",attrs:{src:t.thisUser.image}})]),a("td",[t._v(t._s(t.thisUser.username))])])])]),a("div",{staticStyle:{"padding-left":"5px"}},[t.thisUser.tagline?a("p",[t._v(t._s(t.thisUser.tagline))]):a("p",{staticClass:"light-paragraph"},[t._v("No tagline set...")])]),a("q-btn",{staticClass:"full-width",attrs:{color:"blue"},on:{click:function(e){t.$e.$emit("openProfileEditModal")}}},[t._v("Update profile")])],1),a("q-card",{staticClass:"animate-scale relative-position"},[a("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[a("q-icon",{attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.team)}}})],1),a("div",{staticClass:"light-paragraph text-center"},[t._v("My Team")]),a("table",{staticClass:"q-table",staticStyle:{width:"100%"}},[a("tbody",[a("tr",[a("td",[a("img",{staticClass:"tokenimg",attrs:{src:t.thisUser.team.image}})]),a("td",[t._v(t._s(t.thisUser.team.name))])])])]),a("q-btn",{staticClass:"full-width",attrs:{color:"blue",outline:"outline"},on:{click:function(e){t.openURL(t.thisUser.team.meta.social.telegram)}}},[a("img",{staticClass:"on-left",staticStyle:{width:"25px"},attrs:{src:"https://telegram.org/img/t_logo.png"}}),t._v("Join Telegram Chat")])],1),a("q-card",{staticClass:"animate-scale relative-position"},[a("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[a("q-icon",{staticClass:"infobtn",attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.wallet)}}})],1),a("p",{staticClass:"light-paragraph text-center"},[t._v("Wallet")]),a("table",{staticClass:"q-table",staticStyle:{width:"100%"}},t._l(t.thisUser.wallet.tokens,function(e){return a("tbody",{key:e.id},[a("tr",{staticClass:"tokenlist cursor-pointer"},[a("td",[a("img",{staticClass:"tokenimg",attrs:{src:e.tokenType.image}})]),a("td",[t._v(t._s(e.tokenType.name))]),a("td",[t._v(t._s(e.balance.toFixed(2)))]),a("td")])])}))],1),a("q-card",{staticClass:"animate-scale"},[a("p",{staticClass:"light-paragraph text-center"},[t._v("Inventory")]),a("p",{staticClass:"text-centered text-grey"},[t._v("Inventory Items are coming soon...")])])],1)]):t._e(),a("div",{staticClass:"col"},[t.authenticated?a("q-card",{staticClass:"animate-scale relative-position"},[a("p",{staticClass:"light-paragraph text-center"},[t._v("My Devices"),a("q-btn",{staticClass:"absolute infobtn",attrs:{round:"round",small:"small",flat:"flat"}},[a("q-icon",{staticClass:"infobtn",attrs:{name:"help_outline"},on:{click:function(e){t.$e.$emit("showInfoModal",t.info.devices)}}})],1)],1),t._l(t.devices,function(e,s){return a("q-list",{key:e.id},[t.adBlock||"BROWSER"!=e.type?a("q-item",{staticClass:"relative-position bg-red",staticStyle:{height:"80px"},attrs:{color:"red"}},[a("h5",{staticClass:"text-white"},[t._v("Disable AdBlock and refresh to continue")])]):a("q-item",{staticClass:"relative-position"},[a("q-item-side",[a("q-icon",{attrs:{name:t.parseDevice.icon(e),color:t.parseDevice.color(e)}})],1),a("q-item-main",[a("q-item-tile",{staticStyle:{"user-select":"none"},attrs:{label:"label"}},[t._v(t._s(e.name))]),a("q-item-tile",{attrs:{sublabel:"sublabel"}},[t._v(t._s(e.status))])],1),e.toggle?a("h6",{staticClass:"inline float-right text-yellow-6"},[t._v(t._s(t.ch.hps))]):t._e(),e.toggle?a("q-spinner-grid",{staticClass:"inline on-right",attrs:{size:20,color:"yellow-4"}}):t._e(),a("q-item-side",{attrs:{right:"right"}},[a("q-btn",{staticClass:"on-left hovericon",attrs:{round:"round",flat:"flat"},on:{click:function(a){t.configDevice(e.id)}}},[a("q-icon",{attrs:{name:"settings",color:""}})],1)],1),a("q-toggle",{attrs:{color:"yellow"},on:{blur:function(a){e.pending=!0,t.toggleDevice(e)}},model:{value:e.toggle,callback:function(a){t.$set(e,"toggle",a)},expression:"device.toggle"}}),a("q-inner-loading",{attrs:{visible:e.pending}},[a("q-spinner",{attrs:{size:"30px",color:"blue"}})],1)],1)],1)}),a("q-btn",{staticClass:"full-width",attrs:{disabled:"disabled",small:"small",color:"green"}},[t._v("add more Devices"),a("q-icon",{staticClass:"on-right",attrs:{name:"add"}})],1)],2):t._e(),a("q-card",{staticClass:"animate-scale"},[a("p",{staticClass:"light-paragraph text-center"},[t._v("Top Users")]),a("table",{staticClass:"q-table horizontal-separator",staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("th"),a("th",[t._v("Username")]),a("th",[t._v("Team")]),a("th",[t._v("Power"),a("q-icon",{attrs:{name:"flash_on",color:"yellow"}})],1),a("th",[t._v("Rank")])])]),t._l(this.leaderboard,function(e,s){return a("tbody",{key:e.id},[a("tr",[a("td",[a("img",{staticClass:"avatar",attrs:{src:e.image}})]),a("td",{attrs:{"data-th":"Username"}},[t._v(t._s(e.username))]),a("td",{attrs:{"data-th":"Team"}},[t._v(t._s(e.team.name))]),a("td",{attrs:{"data-th":"Power"}},[t._v(t._s(parseInt(e.power)))]),a("td",[t._v(t._s(s+1))])])])})],2)]),a("q-card",{staticClass:"animate-scale"},[a("p",{staticClass:"light-paragraph text-center"},[t._v("Top Teams")]),a("table",{staticClass:"q-table horizontal-separator",staticStyle:{width:"100%"}},[a("thead",[a("tr",[a("th"),a("th"),a("th",[t._v("Leader")]),a("th",[t._v("Power"),a("q-icon",{attrs:{name:"flash_on",color:"yellow"}})],1),a("th",[t._v("Rank")])])]),t._l(this.teamLeaderboard,function(e,s){return a("tbody",{key:e.id},[a("tr",[a("td",[a("img",{staticClass:"avatar",attrs:{src:e.image}})]),a("td",{attrs:{"data-th":"Username"}},[t._v(t._s(e.name))]),a("td",{attrs:{"data-th":"Leader"}},[t._v("$10. 11")]),a("td",{attrs:{"data-th":"Power"}},[t._v(t._s(parseInt(e.power)))]),a("td",[t._v(t._s(s+1))])])])})],2)]),t.authenticated?t._e():a("div",{staticClass:"relative-position"},[a("div",{staticClass:"absolute-center"},[a("br"),a("br"),a("br"),a("br"),a("q-btn",{staticClass:"on-left",staticStyle:{"font-size":"30px"},attrs:{big:"big",color:"green"},on:{click:function(e){t.$e.$emit("openAuthModal",!0)}}},[t._v("Join")]),a("q-btn",{staticStyle:{"font-size":"30px"},attrs:{big:"big",color:"blue"},on:{click:function(e){t.openURL("https://www.boid.com")}}},[t._v("Learn More")])],1)])],1)]),a("q-modal",{ref:"deviceModal",on:{close:function(e){t.currentDevice=null}}},[a("device",{attrs:{deviceId:t.currentDevice,api:t.api,ch:t.ch,thisModal:t.$refs.deviceModal}})],1)],1)])},staticRenderFns:[]};e.a=s}});