(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-351f62a0"],{"9de7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-security"},[a("HeaderBar"),a("div",{staticClass:"main",style:{minHeight:t.$window.innerHeight-150+"px"}},[a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[a("span",[t._v(t._s(t.$t("message.accountSecurity")))])]),a("div",{staticClass:"li-div"},[t.pageData.haveTrustee?a("li",[a("div",[t._v(t._s(t.$t("message.accountPlatform"))+"：")]),a("div",[t._v(t._s(t.pageData.userName))])]):a("li",[a("div",[t._v(t._s(t.$t("message.accountPlatform"))+"：")]),a("div",{staticClass:"operation"},[t._v(t._s(t.$t("message.accountNotBound"))),a("span",{on:{click:function(e){t.displayStatus.phoneBind=!0}}},[t._v(t._s(t.$t("message.accountToBound")))])])]),t._l(t.pageData.MetaMaskAddress,function(e){return a("li",["DISPATCHER"==e.platform?a("div",[t._v(t._s(t.$t("message.accountPlatformAddress"))+"：")]):a("div",[t._v(t._s(t.$t("message.accountMetaMaskAddress"))+"：")]),a("div",{class:{import:"IMPORT"==e.platform,dispatcher:"DISPATCHER"==e.platform}},[t._v(t._s(e.coinAddress))])])}),0==t.pageData.MetaMaskAddress.length&&t.pageData.haveTrustee?a("li",[a("div",[t._v(t._s(t.$t("message.accountMetaMaskAddress"))+"：")]),a("div",[t._v(t._s(t.$t("message.accountBindDesc")))])]):t._e(),t.pageData.haveTrustee?a("li",[a("div",[t._v(t._s(t.$t("message.accountLoginPassword"))+"：")]),a("div",{staticClass:"operation"},[t._v("********"),a("span",{on:{click:function(e){t.displayStatus.resetPassDialog=!0}}},[t._v(t._s(t.$t("message.accountChange")))])])]):a("li",[a("div",[t._v(t._s(t.$t("message.accountChange"))+"：")]),a("div",[t._v(t._s(t.$t("message.accountNotExist")))])])],2)])]),a("mu-dialog",{staticClass:"bind-accout",attrs:{open:t.displayStatus.phoneBind,"append-body":!1},on:{"update:open":function(e){t.$set(t.displayStatus,"phoneBind",e)}}},[a("h4",[t._v(t._s(t.$t("message.PopBindAccount")))]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopAccount")))]),a("div",{staticClass:"input-flex prefix"},[a("mu-menu",{attrs:{cover:"",open:t.prefixMenu},on:{"update:open":function(e){t.prefixMenu=e}}},[a("span",{attrs:{color:"primary"}},[t._v(t._s(t.formData.prefix))]),a("mu-list",{attrs:{slot:"content"},slot:"content"},t._l(t.prefixs,function(e){return a("mu-list-item",{key:e,attrs:{button:""},on:{click:function(a){t.formData.prefix=e,t.prefixMenu=!1}}},[a("mu-list-item-title",[t._v(t._s(e))])],1)}))],1),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.phone,expression:"formData.phone",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("message.PopRegisterPhone")},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})],1)]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopGraphic")))]),a("div",{staticClass:"input-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.picCode,expression:"formData.picCode"}],attrs:{type:"text",placeholder:t.$t("message.PopGraphicEnter")},domProps:{value:t.formData.picCode},on:{input:function(e){e.target.composing||t.$set(t.formData,"picCode",e.target.value)}}}),a("img",{ref:"imgcode",attrs:{src:t.$window.SERVERPATH+"/open/pic_captcha?type=ACCOUNT_BINDING&macCode="+t.macCode,alt:""},on:{click:function(e){t.getImgCode("ACCOUNT_BINDING")}}})])]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopCaptcha")))]),a("div",{staticClass:"input-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],attrs:{type:"text",placeholder:t.$t("message.PopInputCaptcha")},domProps:{value:t.formData.captcha},on:{input:function(e){e.target.composing||t.$set(t.formData,"captcha",e.target.value)}}}),a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.getSMScode("ACCOUNT_BINDING")}}},[t._v(t._s(t.formData.btnText))])])]),a("button",{staticClass:"primary-btn",on:{click:function(e){t.bindingOneDo("PHONE")}}},[t._v(t._s(t.$t("message.PopBindBtn")))]),a("p",[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.displayStatus.phoneBind=!1,t.displayStatus.emailBind=!0}}},[t._v(t._s(t.$t("message.PopBindEmail")))])])]),a("mu-dialog",{staticClass:"bind-accout",attrs:{open:t.displayStatus.emailBind,"append-body":!1},on:{"update:open":function(e){t.$set(t.displayStatus,"emailBind",e)}}},[a("h4",[t._v(t._s(t.$t("message.PopBindAccount")))]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopAccount")))]),a("div",{staticClass:"input-flex"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formData.email,expression:"formData.email",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:t.$t("message.PopRegisterEmail")},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopGraphic")))]),a("div",{staticClass:"input-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.picCode,expression:"formData.picCode"}],attrs:{type:"text",placeholder:t.$t("message.PopGraphicEnter")},domProps:{value:t.formData.picCode},on:{input:function(e){e.target.composing||t.$set(t.formData,"picCode",e.target.value)}}}),a("img",{ref:"imgcode",attrs:{src:t.$window.SERVERPATH+"/open/pic_captcha?type=ACCOUNT_BINDING&macCode="+t.macCode,alt:""},on:{click:function(e){t.getImgCode("ACCOUNT_BINDING")}}})])]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopCaptcha")))]),a("div",{staticClass:"input-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.captcha,expression:"formData.captcha"}],attrs:{type:"text",placeholder:t.$t("message.PopInputCaptcha")},domProps:{value:t.formData.captcha},on:{input:function(e){e.target.composing||t.$set(t.formData,"captcha",e.target.value)}}}),a("AEFcountDownBtn",{nativeOn:{click:function(e){t.getEmailCode("ACCOUNT_BINDING")}},model:{value:t.captchaDisabled,callback:function(e){t.captchaDisabled=e},expression:"captchaDisabled"}})],1)]),a("button",{staticClass:"primary-btn",on:{click:function(e){t.bindingOneDo("EMAIL")}}},[t._v(t._s(t.$t("message.PopBindBtn")))]),a("p",[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.displayStatus.phoneBind=!0,t.displayStatus.emailBind=!1}}},[t._v(t._s(t.$t("message.PopBindPhone")))])])]),a("mu-dialog",{staticClass:"bind-accout",attrs:{open:t.displayStatus.confirmAccountNotExist,"append-body":!1},on:{"update:open":function(e){t.$set(t.displayStatus,"confirmAccountNotExist",e)}}},[a("h4",[t._v(t._s(t.$t("message.PopBindAccount")))]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopInviteCode")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.inviteCode,expression:"formData.inviteCode"}],attrs:{type:"text",placeholder:t.$t("message.PopInviteCodePlaceholder")},domProps:{value:t.formData.inviteCode},on:{input:function(e){e.target.composing||t.$set(t.formData,"inviteCode",e.target.value)}}})]),a("div",{staticClass:"input-wrap",staticStyle:{width:"338px"}},[a("label",[t._v(t._s(t.$t("message.PopPassword")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.loginPwd,expression:"formData.loginPwd"}],attrs:{type:"password",placeholder:t.$t("message.PopPasswordPlaceholder")},domProps:{value:t.formData.loginPwd},on:{input:function(e){e.target.composing||t.$set(t.formData,"loginPwd",e.target.value)}}})]),a("div",{staticClass:"input-wrap",staticStyle:{width:"338px"}},[a("label",[t._v(t._s(t.$t("message.PopPasswordConfirm")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.loginPwd2,expression:"formData.loginPwd2"}],attrs:{type:"password",placeholder:t.$t("message.PopPassword2Placeholder")},domProps:{value:t.formData.loginPwd2},on:{input:function(e){e.target.composing||t.$set(t.formData,"loginPwd2",e.target.value)}}})]),a("button",{staticClass:"primary-btn",on:{click:function(e){t.bindingTwoDo("PHONE")}}},[t._v(t._s(t.$t("message.PopConfirm")))])]),a("mu-dialog",{staticClass:"bind-accout",attrs:{open:t.displayStatus.resetPassDialog,"append-body":!1},on:{"update:open":function(e){t.$set(t.displayStatus,"resetPassDialog",e)}}},[a("h4",[t._v(t._s(t.$t("message.PopResetPass")))]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopAccount"))+":")]),a("input",{attrs:{type:"text",placeholder:t.$t("message.PopGraphicEnter"),disabled:""},domProps:{value:t.currentAddr.userName}})]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopGraphic")))]),a("div",{staticClass:"input-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.picCode,expression:"formData.picCode"}],attrs:{type:"text",placeholder:t.$t("message.PopGraphicEnter")},domProps:{value:t.formData.picCode},on:{input:function(e){e.target.composing||t.$set(t.formData,"picCode",e.target.value)}}}),a("img",{ref:"imgcode",attrs:{src:t.$window.SERVERPATH+"/open/pic_captcha?type=RESET_PWD&macCode="+t.macCode,alt:""},on:{click:function(e){t.getImgCode("RESET_PWD")}}})])]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopCaptcha")))]),a("div",{staticClass:"input-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.resetCaptcha,expression:"formData.resetCaptcha"}],attrs:{type:"text",placeholder:t.$t("message.PopInputCaptcha")},domProps:{value:t.formData.resetCaptcha},on:{input:function(e){e.target.composing||t.$set(t.formData,"resetCaptcha",e.target.value)}}}),a("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.getSMScode("RESET_PASS")}}},[t._v(t._s(t.formData.btnText))])])]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopNewPassword")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.resetLoginPwd,expression:"formData.resetLoginPwd"}],attrs:{type:"password",placeholder:t.$t("message.PopPasswordPlaceholder")},domProps:{value:t.formData.resetLoginPwd},on:{input:function(e){e.target.composing||t.$set(t.formData,"resetLoginPwd",e.target.value)}}})]),a("div",{staticClass:"input-wrap"},[a("label",[t._v(t._s(t.$t("message.PopPasswordConfirm")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.resetLoginPwd2,expression:"formData.resetLoginPwd2"}],attrs:{type:"password",placeholder:t.$t("message.PopPassword2Placeholder")},domProps:{value:t.formData.resetLoginPwd2},on:{input:function(e){e.target.composing||t.$set(t.formData,"resetLoginPwd2",e.target.value)}}})]),a("button",{staticClass:"primary-btn",on:{click:t.passResetDo}},[t._v(t._s(t.$t("message.PopConfirmChange")))])]),a("FooterBar",{ref:"ft"})],1)},i=[],o=(a("ac6a"),a("be94")),n=a("ade3"),r=(a("f751"),a("fca0")),c=a("348c"),p=a("1720"),d=a("2ba1"),m=a("2f62"),l={data:function(){return{displayStatus:{phoneBind:!1,emailBind:!1,confirmAccountNotExist:!1,resetPassDialog:!1},prefixs:["+86","+852","+853","+886","+8801","+8802","+001","+44","+0061"],prefixMenu:!1,formData:{phone:"",phone2:"",prefix:"+86",captcha:"",picCode:"",loginPwdCheck:"",inviteCode:sessionStorage.getItem("inviteCode")||"",loginPwd:"",loginPwd2:"",s:60,btnText:this.$t("message.PopGetCaptcha"),timer:null,email:"",email2:"",resetCaptcha:"",resetLoginPwd:"",resetLoginPwd2:"",bindingType:"PHONE"},pageData:{isBind:!1,haveTrustee:!1,userName:"",MetaMaskAddress:[]},captchaDisabled:!1,macCode:(new Date).getTime()}},watch:{currentAddr:function(){this.pageData={isBind:!1,haveTrustee:!1,MetaMaskAddress:[]},this.currentAddr.token&&this.getAssets()},displayStatus:{handler:function(){var t;this.formData=Object.assign(this.formData,(t={phone:"",email:"",picCode:"",captcha:"",emailCaptcha:"",resetCaptcha:"",loginPwd:"",loginPwd2:""},Object(n["a"])(t,"picCode",""),Object(n["a"])(t,"resetLoginPwd",""),Object(n["a"])(t,"resetLoginPwd2",""),t))},deep:!0}},mounted:function(){this.currentAddr.token&&this.getAssets(),this.$route.query.bind&&(this.displayStatus.phoneBind=!0)},computed:Object(o["a"])({},Object(m["c"])({currentAddr:function(t){return t.user.currentAddr},storeWeb3:function(t){return t.web3Handler.web3}})),components:{HeaderBar:r["a"],FooterBar:c["a"],AEFcountDownBtn:p["a"]},methods:Object(o["a"])({getImgCode:function(t){this.$refs.imgcode.src=this.$window.SERVERPATH+"/open/pic_captcha?type="+t+"&macCode="+this.macCode+"&"+Math.random()},getSMScode:function(t){var e=this,a={macCode:this.macCode,picCode:this.formData.picCode};if("ACCOUNT_BINDING"==t){if(!this.verifyPhone()||!this.verifyPicCode())return;a.phone=this.formData.phone,a.prefix=this.formData.prefix,a.type=t,this.registerSMScountDown(),this.$http.post("/open/captcha",a).then(function(t){200!=t.code&&(clearTimeout(e.formData.timer),e.formData.btnText=e.$t("message.PopGetCaptcha"),e.getImgCode("ACCOUNT_BINDING"))}).catch(function(t){clearTimeout(e.formData.timer),e.formData.btnText=e.$t("message.PopGetCaptcha")})}else{if(!this.verifyPicCode())return;this.registerSMScountDown(),this.$http.get("/app/user/password/captcha",{params:a}).then(function(t){200!=t.code&&(clearTimeout(e.formData.timer),e.formData.btnText=e.$t("message.PopGetCaptcha"),e.getImgCode("RESET_PWD"))}).catch(function(t){clearTimeout(e.formData.timer),e.formData.btnText=e.$t("message.PopGetCaptcha")})}},getEmailCode:function(t){var e=this;this.verifyEmail()&&this.verifyPicCode()&&(this.captchaDisabled=!0,this.$http.get("/open/email_captcha",{params:{email:this.formData.email,picCode:this.formData.picCode,captchaType:t,macCode:this.macCode}}).then(function(a){console.log(a),200!=a.code&&(e.captchaDisabled=!1,e.getImgCode(t))}).catch(function(t){e.captchaDisabled=!1}))},registerSMScountDown:function(){this.formData.s>0?(this.formData.s--,this.formData.btnText=this.formData.s+"s",this.formData.timer=setTimeout(this.registerSMScountDown,1e3)):(this.formData.s=60,this.formData.btnText=this.$t("message.PopGetCaptcha"))},bindingOneDo:function(t){var e=this;this.formData.bindingType=t;var a={account:this.formData.phone,bindingType:t,captcha:this.formData.captcha};if("PHONE"==t){if(this.formData.phone2=this.formData.phone,!this.verifyPhone()||!this.verifyCaptcha())return}else{if(this.formData.email2=this.formData.email,!this.verifyEmail()||!this.verifyCaptcha())return;a.account=this.formData.email}this.$http.post("/app/user/binding",a).then(function(t){200==t.code&&(e.displayStatus.phoneBind=!1,e.displayStatus.emailBind=!1,t.result?e.web3BindAddress(t.result):e.displayStatus.confirmAccountNotExist=!0)})},bindingTwoDo:function(){var t=this,e=this.formData.bindingType,a={account:this.formData.phone2,password:Object(d["a"])(this.formData.loginPwd),inviteCode:this.formData.inviteCode};"EMAIL"==e&&(a.account=this.formData.email2),this.verifyPassword()&&this.$http.post("/app/user/binding_two",a).then(function(e){t.displayStatus.phoneBind=!1,t.displayStatus.emailBind=!1,console.log(e),200==e.code&&e.result&&(t.displayStatus.confirmAccountNotExist=!1,t.web3BindAddress(e.result))})},passResetDo:function(){var t=this;if(""!=this.formData.resetCaptcha)if(""!=this.formData.resetLoginPwd)if(""!=this.formData.resetLoginPwd2)if(this.formData.resetLoginPwd==this.formData.resetLoginPwd2){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/;if(!e.test(this.formData.resetLoginPwd))return this.alert({type:"info",msg:this.$t("message.PopPassRequest")}),!1;this.$http.post("/app/user/password/reset",{captcha:this.formData.resetCaptcha,pwd:Object(d["a"])(this.formData.resetLoginPwd)}).then(function(e){200==e.code&&(t.alert({type:"success",msg:e.msg}),t.displayStatus.resetPassDialog=!1)})}else this.alert({type:"info",msg:this.$t("message.PopPassDiff")});else this.alert({type:"info",msg:this.$t("message.PopPass2Empty")});else this.alert({type:"info",msg:this.$t("message.PopPassEmpty")});else this.alert({type:"info",msg:this.$t("message.PopCaptchaEmpty")})},getAssets:function(){var t=this;this.$http.get("/app/user/assets").then(function(e){if(200==e.code){var a=e.result.assets;a.length>1&&(t.pageData.isBind=!0),t.pageData.MetaMaskAddress=a,a.forEach(function(e){"IMPORT"==e.platform||(t.pageData.haveTrustee=!0,t.pageData.userName=e.userName)})}})},verifyPhone:function(){return!(""==this.formData.phone||!/^[0-9]*$/.test(this.formData.phone)||"+86"==this.formData.prefix&&!/^1[34578]\d{9}$/.test(this.formData.phone))||(this.alert({type:"info",msg:this.$t("message.PopPhoneWrong")}),!1)},verifyPicCode:function(){return""!=this.formData.picCode||(this.alert({type:"info",msg:this.$t("message.PopGraphicEmpty")}),!1)},verifyCaptcha:function(){return""!=this.formData.captcha||(this.alert({type:"info",msg:this.$t("message.PopCaptchaEmpty")}),!1)},verifyPassword:function(){var t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,12}$/;return t.test(this.formData.loginPwd)?this.formData.loginPwd===this.formData.loginPwd2||(this.alert({type:"info",msg:this.$t("message.PopPassDiff")}),!1):(this.alert({type:"info",msg:this.$t("message.PopPassRequest")}),!1)},verifyEmail:function(){return!(""==this.formData.email||!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.formData.email))||(this.alert({type:"info",msg:"邮箱输入有误"}),!1)},web3BindAddress:function(t){var e=this;this.storeWeb3.apiHandle.methods.bindAddress(t).send({from:this.currentAddr.coinAddress}).on("receipt",function(t){e.alert({type:"success",msg:e.$t("message.Popsuccess")})}).on("error",function(t){e.alert({type:"error",msg:e.$t("message.PopFail")})})}},Object(m["b"])({changeLanguage:"CHANGE_LANGUAGE",alert:"alert"}))},u=l,f=(a("d384"),a("2877")),h=Object(f["a"])(u,s,i,!1,null,null,null);h.options.__file="Account-security.vue";e["default"]=h.exports},c244:function(t,e,a){},d384:function(t,e,a){"use strict";var s=a("c244"),i=a.n(s);i.a}}]);