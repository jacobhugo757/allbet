(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd3d0ea0"],{"0f10":function(t,e,a){"use strict";var s=a("8325"),i=a.n(s);i.a},"44b8a":function(t,e,a){t.exports=a.p+"img/allbet_mobile.2ce133f5.png"},8325:function(t,e,a){},"8ede":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register-page",style:{minHeight:t.$window.innerHeight+"px"}},[s("div",{staticClass:"top"},[s("a",{staticClass:"backarrow",attrs:{href:"javascript:;"},on:{click:function(e){t.$router.go(-1)}}}),s("img",{staticClass:"logo",attrs:{src:a("44b8a"),alt:""}}),s("div",{staticClass:"tab"},[s("a",{staticClass:"phone",class:{active:"phone"==t.registerType},attrs:{href:"javascript:;"},on:{click:function(e){t.registerType="phone"}}},[t._v(t._s(t.$t("message.PopPhoneRegister")))]),s("a",{class:{active:"email"==t.registerType},attrs:{href:"javascript:;"},on:{click:function(e){t.registerType="email"}}},[t._v(t._s(t.$t("message.PopEmailRegister")))])])]),s("div",{staticClass:"bottom"},["phone"==t.registerType?s("div",{staticClass:"input-wrap"},[s("label",[t._v(t._s(t.$t("message.PopPhone")))]),s("div",{staticClass:"input-flex prefix"},[s("mu-menu",{attrs:{cover:"",open:t.prefixMenu},on:{"update:open":function(e){t.prefixMenu=e}}},[s("span",{attrs:{color:"primary"}},[t._v(t._s(t.formData.prefix))]),s("mu-list",{attrs:{slot:"content"},slot:"content"},t._l(t.prefixs,function(e){return s("mu-list-item",{key:e,attrs:{button:""},on:{click:function(a){t.formData.prefix=e,t.prefixMenu=!1}}},[s("mu-list-item-title",[t._v(t._s(e))])],1)}))],1),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.phone,expression:"formData.phone",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("message.PopRegisterPhone")},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})],1)]):s("div",{staticClass:"input-wrap"},[s("label",[t._v(t._s(t.$t("message.PopEmail")))]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.email,expression:"formData.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("message.PopRegisterEmail")},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),s("div",{staticClass:"input-wrap"},[s("label",[t._v(t._s(t.$t("message.PopGraphic")))]),s("div",{staticClass:"input-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.picCode,expression:"formData.picCode"}],attrs:{type:"text",placeholder:t.$t("message.PopGraphicEnter")},domProps:{value:t.formData.picCode},on:{input:function(e){e.target.composing||t.$set(t.formData,"picCode",e.target.value)}}}),s("img",{ref:"imgcode",attrs:{src:t.$window.SERVERPATH+"/open/pic_captcha?type=REGISTER&macCode="+t.macCode,alt:""},on:{click:function(e){t.getImgCode("REGISTER")}}})])]),s("div",{staticClass:"input-wrap"},[s("label",[t._v(t._s(t.$t("message.PopCaptcha")))]),s("div",{staticClass:"input-flex"},["phone"==t.registerType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],attrs:{type:"text",placeholder:t.$t("message.PopInputCaptcha")},domProps:{value:t.formData.captcha},on:{input:function(e){e.target.composing||t.$set(t.formData,"captcha",e.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],attrs:{type:"text",placeholder:t.$t("message.PopInputEmailCaptcha")},domProps:{value:t.formData.captcha},on:{input:function(e){e.target.composing||t.$set(t.formData,"captcha",e.target.value)}}}),"phone"==t.registerType?s("AEFcountDownBtn",{nativeOn:{click:function(e){t.getSMScode("REGISTER")}},model:{value:t.captchaDisabled,callback:function(e){t.captchaDisabled=e},expression:"captchaDisabled"}}):s("AEFcountDownBtn",{nativeOn:{click:function(e){t.getEmailCode("REGISTER")}},model:{value:t.captchaDisabled,callback:function(e){t.captchaDisabled=e},expression:"captchaDisabled"}})],1)]),s("div",{staticClass:"input-wrap"},[s("label",[t._v(t._s(t.$t("message.PopInviteCode")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.inviteCode,expression:"formData.inviteCode"}],attrs:{type:"text",placeholder:t.$t("message.PopInviteCodePlaceholder")},domProps:{value:t.formData.inviteCode},on:{input:function(e){e.target.composing||t.$set(t.formData,"inviteCode",e.target.value)}}})]),s("div",{staticClass:"input-wrap"},[s("label",[t._v(t._s(t.$t("message.PopPassword")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:t.$t("message.PopPasswordPlaceholder")},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),s("div",{staticClass:"input-wrap"},[s("label",[t._v(t._s(t.$t("message.PopPasswordConfirm")))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password2,expression:"formData.password2"}],attrs:{type:"password",placeholder:t.$t("message.PopPassword2Placeholder")},domProps:{value:t.formData.password2},on:{input:function(e){e.target.composing||t.$set(t.formData,"password2",e.target.value)}}})]),s("button",{staticClass:"primary-btn",on:{click:function(e){t.registerDo("phone")}}},[t._v(t._s(t.$t("message.PopRegister")))]),s("p",[s("router-link",{attrs:{to:"login",replace:""}},[t._v(t._s(t.$t("message.gotoLogin")))])],1)])])},i=[],o=(a("ac6a"),a("be94")),r=(a("cadf"),a("551c"),a("097d"),a("2f62")),n=a("1720"),c=a("2ba1"),p={props:["registerAccount"],data:function(){return{prefixs:["+86","+852","+853","+886","+8801","+8802","+001","+44","+0061"],formData:{phone:"",inviteCode:"",prefix:"+86",captcha:"",password:"",password2:"",email:"",picCode:"",resetType:"PHONE"},macCode:(new Date).getTime(),registerType:"phone",captchaDisabled:!1,prefixMenu:!1,currentAddr:""}},methods:Object(o["a"])({getImgCode:function(t){this.$refs.imgcode.src=this.$window.SERVERPATH+"/open/pic_captcha?type="+t+"&macCode="+this.macCode+"&"+Math.random()},getSMScode:function(t){var e=this;this.verifyPhone()&&this.verifyPicCode()&&(this.captchaDisabled=!0,this.$http.post("/open/captcha",{macCode:this.macCode,phone:this.formData.phone,picCode:this.formData.picCode,prefix:this.formData.prefix,type:t}).then(function(a){200!=a.code&&(e.captchaDisabled=!1,e.getImgCode(t))}).catch(function(t){e.captchaDisabled=!1}))},getEmailCode:function(t){var e=this;this.verifyEmail()&&this.verifyPicCode()&&(this.captchaDisabled=!0,this.$http.get("/open/email_captcha",{params:{email:this.formData.email,picCode:this.formData.picCode,captchaType:t}}).then(function(a){200!=a.code&&(e.captchaDisabled=!1,e.getImgCode(t))}).catch(function(t){e.captchaDisabled=!1}))},registerDo:function(){var t=this,e=this.registerType,a="/open/register/phone",s={captcha:this.formData.captcha,loginPwd:Object(c["a"])(this.formData.password),phone:this.formData.phone,prefix:this.formData.prefix,inviteCode:this.formData.inviteCode};if("email"==e){if(a="/open/register/email",!this.verifyEmail())return;s.email=this.formData.email}else if(!this.verifyPhone())return;this.verifyCaptcha()&&this.verifyPassword()&&this.$http.post(a,s).then(function(e){200==e.code&&(t.alert({type:"success",msg:e.msg}),t.displayStatus.registerAccount=!1,t.displayStatus.emailRegisterAccount=!1,t.setUserInfo(e.result))})},verifyPassword:function(){var t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/;return t.test(this.formData.password)?this.formData.password===this.formData.password2||(this.alert({type:"info",msg:this.$t("message.PopPassDiff")}),!1):(this.alert({type:"info",msg:this.$t("message.PopPassRequest")}),!1)},verifyPhone:function(){return("+86"!=this.formData.prefix||/^1[34578]\d{9}$/.test(this.formData.phone))&&!(""==this.formData.phone||!/^[0-9]*$/.test(this.formData.phone))||(this.alert({type:"info",msg:this.$t("message.PopPhoneWrong")}),!1)},verifyPicCode:function(){return""!=this.formData.picCode||(this.alert({type:"info",msg:this.$t("message.PopGraphicEmpty")}),!1)},verifyCaptcha:function(){return""!=this.formData.captcha||(this.alert({type:"info",msg:this.$t("message.PopCaptchaEmpty")}),!1)},verifyEmail:function(){return!(""==this.formData.email||!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.formData.email))||(this.alert({type:"info",msg:this.$t("message.PopEmailWrong")}),!1)}},Object(r["b"])({alert:"alert",setUserInfo:"SET_USERINFO",setCurrentAddr:"SET_CURRENTADDR"})),watch:{addressList:function(t){var e=this,a=null;if(t.length>0){var s=!1;t.forEach(function(t,i){t.coinAddress==e.storeCurrentAddr.coinAddress&&(s=!0,e.setCurrentAddr(t)),t.coinAddress==e.storeWeb3.coinbase&&(a=t)}),s||(a?(this.currentAddr=a.coinAddress,this.setCurrentAddr(a)):(this.currentAddr=t[0].coinAddress,this.setCurrentAddr(t[0])))}},currentAddr:function(t){var e=this;this.addressList.forEach(function(a){a.coinAddress==t&&e.setCurrentAddr(a)})}},computed:Object(o["a"])({},Object(r["c"])({userInfo:function(t){return t.user.userInfo},storeCurrentAddr:function(t){return t.user.currentAddr},lastCurAddrPf:function(t){return t.user.lastCurAddrPf},storeWeb3:function(t){return t.web3Handler.web3}}),{addressList:function(){return this.$store.getters.getUserAddress}}),components:{AEFcountDownBtn:n["a"]}},m=p,d=(a("0f10"),a("2877")),l=Object(d["a"])(m,s,i,!1,null,null,null);l.options.__file="Register.vue";e["default"]=l.exports}}]);