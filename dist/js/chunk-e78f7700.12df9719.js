(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e78f7700"],{"0341":function(t,e,s){"use strict";s.r(e);var i,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mobile-invite-page"},[s("HeaderBar",{attrs:{title:"邀请好友"}}),s("div",{staticClass:"main"},[s("div",{staticClass:"top"}),s("div",{staticClass:"white-div"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.inviteCode,expression:"inviteCode"}]},[s("div",{staticClass:"invite-detail"},[s("div",{},[s("p",{staticClass:"title"},[t._v(t._s(t.$t("message.invitationSuccessed")))]),s("h4",[t._v(t._s(t.inviteCount)+" "+t._s(t.$t("message.InvitePeople")))])]),s("div",{},[s("p",{staticClass:"title"},[t._v(t._s(t.$t("message.tradeInvitationReward")))]),s("h4",[t._v(t._s(t.inviteBonus)+" AB")])])]),s("div",{staticClass:"qrcode"},[s("div",{staticClass:"qrcode-content"},[s("div",{staticClass:"invite-div"},[s("p",[t._v(t._s(t.$t("message.invitationCode")))]),s("div",{staticClass:"copy-div1"},[s("span",{attrs:{id:"copy_code"}},[t._v(t._s(t.inviteCode))]),s("span",{ref:"copy1",staticClass:"copy",attrs:{"data-clipboard-action":"copy","data-clipboard-target":"#copy_code"},on:{click:t.copy1}},[t._v(t._s(t.$t("message.assetsCopy")))])])]),s("div",{staticClass:"invite-div"},[s("p",[t._v(t._s(t.$t("message.invitationLink")))]),s("div",{staticClass:"copy-div1 copy-div2"},[s("span",{attrs:{id:"copy_text"}},[t._v(t._s(t.inviteUrl))]),s("span",{ref:"copy",staticClass:"copy",attrs:{"data-clipboard-action":"copy","data-clipboard-text":t.$t("message.inviteText")+t.inviteUrl},on:{click:t.copy}},[t._v(t._s(t.$t("message.assetsCopy")))])])])])]),s("div",{staticClass:"buttom"},[s("h5",{staticClass:"title"},[t._v(t._s(t.$t("message.InvitationRules")))]),s("h5",[t._v(t._s(t.$t("message.InvitationRules1")))]),s("h5",[t._v(t._s(t.$t("message.InvitationRules2")))])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.inviteCode,expression:"!inviteCode"}],staticClass:"no-bind"},[s("p",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("message.InviteBind"))+"\n\t\t\t\t\t\t\t"),s("router-link",{staticClass:"bind-btn",attrs:{to:{name:"account-security"}}},[t._v(t._s(t.$t("message.accountToBound")))])],1),s("div",{staticClass:"buttom"},[s("h5",{staticClass:"title"},[t._v(t._s(t.$t("message.InvitationRules")))]),s("h5",[t._v(t._s(t.$t("message.InvitationRules1")))]),s("h5",[t._v(t._s(t.$t("message.InvitationRules2")))])])])])])],1)},a=[],o=s("ade3"),c=s("be94"),v=(s("cadf"),s("551c"),s("097d"),s("c190")),d=s("d044"),r=s.n(d),l=s("b311"),u=s.n(l),p=s("2f62"),C=(i={data:function(){return{inviteBonus:"0",inviteCount:"0",inviteUrl:location.origin+"/dice?inviteCode=",inviteCode:"",platformBonus:""}},computed:{getCurrentAddr:function(){return this.$store.state.user.currentAddr}},watch:{getCurrentAddr:function(t){this.makeQRcode(),this.getInvite()}},mounted:function(){this.copyBtn=new u.a(this.$refs.copy),this.copyBtn1=new u.a(this.$refs.copy1),this.getInvite()}},Object(o["a"])(i,"watch",{getCurrentAddr:function(){this.getInvite()}}),Object(o["a"])(i,"components",{HeaderBar:v["a"]}),Object(o["a"])(i,"methods",Object(c["a"])({getInvite:function(){var t=this;this.$http.get("/app/user/invite?"+this.getCurrentAddr.coinAddress,{}).then(function(e){if(200==e.code){var s=e.result||{};t.inviteBonus=s.inviteBonus||0,t.inviteCount=s.inviteCount||0,t.inviteCode=s.inviteCode,t.inviteUrl=location.origin+"/dice?inviteCode="+t.inviteCode,t.platformBonus=s.platformBonus,document.getElementById("qrcode1").innerHTML="";var i=new r.a(document.getElementById("qrcode1"),{width:108,height:108});i.makeCode(t.inviteUrl)}})},copy1:function(){var t=this,e=this.copyBtn1;e.on("success",function(){t.alert({type:"success",msg:t.$t("message.assetsSuccessCopy")})}),e.on("error",function(){t.alert({type:"success",msg:t.$t("message.assetsFailCopy")})})},copy:function(){var t=this,e=this.copyBtn;e.on("success",function(){t.alert({type:"success",msg:t.$t("message.assetsSuccessCopy")})}),e.on("error",function(){t.alert({type:"success",msg:t.$t("message.assetsFailCopy")})})}},Object(p["b"])({alert:"alert"}))),i),m=C,_=(s("d499"),s("2877")),g=Object(_["a"])(m,n,a,!1,null,null,null);g.options.__file="Mobile-invite.vue";e["default"]=g.exports},7927:function(t,e,s){},d499:function(t,e,s){"use strict";var i=s("7927"),n=s.n(i);n.a}}]);