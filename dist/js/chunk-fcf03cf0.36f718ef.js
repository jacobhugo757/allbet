(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fcf03cf0"],{"0da4":function(t,e,s){"use strict";var n=s("81c6"),a=s.n(n);a.a},"30c9":function(t,e,s){"use strict";var n=s("4922"),a=s.n(n);a.a},"32a2":function(t,e,s){},4127:function(t,e,s){"use strict";var n=s("d233"),a=s("b313"),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Date.prototype.toISOString,r={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(t){return o.call(t)},skipNulls:!1,strictNullHandling:!1},l=function t(e,s,a,i,o,l,c,u,p,d,m,f){var h=e;if("function"===typeof c)h=c(s,h);else if(h instanceof Date)h=d(h);else if(null===h){if(i)return l&&!f?l(s,r.encoder):s;h=""}if("string"===typeof h||"number"===typeof h||"boolean"===typeof h||n.isBuffer(h)){if(l){var y=f?s:l(s,r.encoder);return[m(y)+"="+m(l(h,r.encoder))]}return[m(s)+"="+m(String(h))]}var v,b=[];if("undefined"===typeof h)return b;if(Array.isArray(c))v=c;else{var g=Object.keys(h);v=u?g.sort(u):g}for(var w=0;w<v.length;++w){var _=v[w];o&&null===h[_]||(b=Array.isArray(h)?b.concat(t(h[_],a(s,_),a,i,o,l,c,u,p,d,m,f)):b.concat(t(h[_],s+(p?"."+_:"["+_+"]"),a,i,o,l,c,u,p,d,m,f)))}return b};t.exports=function(t,e){var s=t,o=e?n.assign({},e):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!==typeof o.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof o.delimiter?r.delimiter:o.delimiter,u="boolean"===typeof o.strictNullHandling?o.strictNullHandling:r.strictNullHandling,p="boolean"===typeof o.skipNulls?o.skipNulls:r.skipNulls,d="boolean"===typeof o.encode?o.encode:r.encode,m="function"===typeof o.encoder?o.encoder:r.encoder,f="function"===typeof o.sort?o.sort:null,h="undefined"!==typeof o.allowDots&&o.allowDots,y="function"===typeof o.serializeDate?o.serializeDate:r.serializeDate,v="boolean"===typeof o.encodeValuesOnly?o.encodeValuesOnly:r.encodeValuesOnly;if("undefined"===typeof o.format)o.format=a["default"];else if(!Object.prototype.hasOwnProperty.call(a.formatters,o.format))throw new TypeError("Unknown format option provided.");var b,g,w=a.formatters[o.format];"function"===typeof o.filter?(g=o.filter,s=g("",s)):Array.isArray(o.filter)&&(g=o.filter,b=g);var _,A=[];if("object"!==typeof s||null===s)return"";_=o.arrayFormat in i?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var C=i[_];b||(b=Object.keys(s)),f&&b.sort(f);for(var T=0;T<b.length;++T){var k=b[T];p&&null===s[k]||(A=A.concat(l(s[k],k,C,u,p,d?m:null,g,f,h,y,w,v)))}var B=A.join(c),R=!0===o.addQueryPrefix?"?":"";return B.length>0?R+B:""}},4328:function(t,e,s){"use strict";var n=s("4127"),a=s("9e6a"),i=s("b313");t.exports={formats:i,parse:a,stringify:n}},"44ac":function(t,e,s){},4922:function(t,e,s){},"4f25":function(t,e,s){"use strict";var n=s("32a2"),a=s.n(n);a.a},"6e8e":function(t,e,s){t.exports=s.p+"img/gold.f85f418d.png"},7263:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"roller-page"},[s("HeaderBar"),s("div",{staticClass:"main",style:{minHeight:t.$window.innerHeight-150+"px"}},[s("Bet",{attrs:{diceStatistics:t.diceStatistics}}),s("Record",{on:{setDiceStatistics:t.setDiceStatistics}})],1),s("FooterBar")],1)},a=[],i=(s("cadf"),s("551c"),s("097d"),s("fca0")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"module-roller-bet"},[n("ul",{staticClass:"coin-select"},[n("li",{staticClass:"online",class:{active:"ETH"==t.coinType},on:{click:function(e){t.changeCoinType("ETH")}}},[n("img",{attrs:{src:s("1eb1"),alt:""}}),n("span",[t._v("ETH")])]),n("li",{staticClass:"online",class:{active:"TRX"==t.coinType},on:{click:function(e){t.changeCoinType("TRX")}}},[n("img",{attrs:{src:s("1d0a"),alt:""}}),n("span",[t._v("TRX")])]),n("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[n("img",{attrs:{src:s("1663"),alt:""}}),n("span",[t._v("EOS")])]),n("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[n("img",{attrs:{src:s("8960"),alt:""}}),n("span",[t._v("AB")])])]),n("div",{ref:"gameContent",staticClass:"game-content"},[n("div",{staticClass:"ctn-top"},[n("div",{staticClass:"bet-input"},[n("p",[t._v(t._s(t.$t("message.GameBetAmount")))]),n("div",{staticClass:"flex-wrap"},[n("div",{staticClass:"input-wrap"},[n("label",{class:{eth:"ETH"==t.coinType,trx:"TRX"==t.coinType}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",oninput:"value=value.replace(/[^0-9\\.]/g,'')",onkeyup:"value=value.replace(/[^0-9\\.]/g,'')",onpaste:"value=value.replace(/[^0-9\\.]/g,'')"},domProps:{value:t.amount},on:{blur:t.inputAmountBlur,input:function(e){e.target.composing||(t.amount=e.target.value)}}}),n("span",[t._v(t._s(t.coinType))])]),n("div",{staticClass:"hotkeys"},[n("span",{on:{click:function(e){t.onHotkeys("min")}}},[t._v("MIN")]),n("span",{on:{click:function(e){t.onHotkeys(.5)}}},[t._v("1/2")]),n("span",{on:{click:function(e){t.onHotkeys(2)}}},[t._v("2X")]),n("span",{on:{click:function(e){t.onHotkeys("max")}}},[t._v("MAX")])])])]),n("div",{staticClass:"award"},[n("p",[t._v(t._s(t.$t("message.GamePlayOutWin")))]),n("div",[n("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1"),alt:""}}),n("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a"),alt:""}}),n("span",[t._v(t._s(t.bonus))]),n("i",[t._v(t._s(t.coinType))])])])]),n("ul",{staticClass:"ctn-mdl"},[n("li",[n("label",[t._v(t._s(t.$t("message.GameRUTW")))]),n("span",[t._v(t._s(t.odds)+" "),n("img",{attrs:{src:s("a522")}})])]),n("li",[n("label",[t._v(t._s(t.$t("message.GameOdds")))]),n("span",[t._v(t._s(Math.floor(1e3*t.peilv)/1e3)+" x")])]),n("li",[n("label",[t._v(t._s(t.$t("message.GameProbability")))]),n("span",[t._v(t._s(t.odds-1)+" "),n("i",{staticStyle:{"font-size":"31px","font-style":"normal"}},[t._v("%")])])])]),n("div",{staticClass:"slider-wrap",on:{touchstart:function(t){t.preventDefault()}}},[t._m(0),n("div",{ref:"slider",staticClass:"slider",on:{click:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.onHandleClick(e)},touchstart:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.onHandleTouchS(e)}}},[n("div",{ref:"bar",staticClass:"bar",on:{click:t.onHandleClick,touchstart:t.onHandleTouchS}}),n("div",{ref:"handle",staticClass:"handle",on:{mousedown:function(e){return e.preventDefault(),t.onHandleMouseD(e)},touchstart:function(e){return e.preventDefault(),t.onHandleTouchS(e)}}},[n("i",[t._v(t._s(t.odds))])])])]),n("div",{staticClass:"ctn-btm"},[n("div",{staticClass:"auto-bet"},[n("p",{}),n("div",{staticClass:"mid"},[n("label",[t._v(t._s(t.$t("message.GameAutoBet")))]),n("span",{staticClass:"switch",class:{on:t.autoBet},on:{click:function(e){t.autoBet=!t.autoBet}}}),n("i",{staticClass:"help",attrs:{"data-text":t.$t("message.GameAutoBetHelp")}})]),n("a",{staticClass:"rule",attrs:{href:"javascript:;"},on:{click:function(e){t.isShowHelp=!0}}},[t._v(t._s(t.$t("message.GameHowToPlay")))])]),n("div",{staticClass:"bet-wrap"},[n("span",{staticClass:"fl nominscreen"},[n("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1")}}),n("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a")}}),t.userInfo.token&&t.currentAddr.assets?n("i",[n("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):n("i",[t._v("0")]),t._v(" "+t._s(t.coinType))]),t.userInfo.token&&"ETH"==t.coinType?n("button",{staticClass:"enter",on:{click:t.betDo}},[t._v(t._s(t.$t("message.GameLuckNum"))+" "+t._s(t.odds))]):t.userInfo.token&&"TRX"==t.coinType?n("button",{staticClass:"enter",on:{click:t.openFundraiy}},[t._v(t._s(t.$t("message.GamePresell")))]):n("button",{staticClass:"enter",on:{click:t.openLogin}},[t._v(t._s(t.$t("message.login")))]),n("span",{staticClass:"fl minscreen"},[n("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1")}}),n("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a")}}),t.userInfo.token&&t.currentAddr.assets?n("i",[n("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):n("i",[t._v("0")]),t._v(" "+t._s(t.coinType))]),n("span",{staticClass:"fr"},[n("img",{attrs:{src:s("8960")}}),t.userInfo.token?n("i",[n("DigitalRoll",{attrs:{value:1*t.currentAddr.bet}})],1):n("i",[t._v("0")]),t._v(" AB")])])]),n("div",{staticClass:"dig-wrap"},[n("img",{attrs:{src:s("fcaa"),alt:""}}),n("div",{staticClass:"content"},[n("h4",[t._v(t._s(t.$t("message.GameBetToGet"))+" "+t._s((1/t.rule.winDig*t.amount).toFixed(3))+" AB")]),n("p",[t._v(t._s(t.$t("message.GameHigGet"))+" "+t._s(1/t.rule.winDig)+" x AB ")]),n("span",[t._v(t._s(t.$t("message.GameDigProportion"))+"　 WIN 1 : "+t._s(1/t.rule.winDig)+" 　  LOSE 1 : "+t._s(1/t.rule.failDig))])]),n("i",{staticClass:"help nominscreen",on:{click:function(e){t.isShowABpopup=!0}}}),n("i",{staticClass:"help minscreen",on:{click:function(e){t.$router.push("ab")}}})])]),n("mu-dialog",{staticClass:"gamerule",attrs:{width:"600",open:t.isShowHelp,"append-body":!1},on:{"update:open":function(e){t.isShowHelp=e}}},[n("a",{staticClass:"close-btn",attrs:{href:"javascript:;"},on:{click:function(e){t.isShowHelp=!1}}}),n("h4",[t._v(t._s(t.$t("message.GameRule")))]),n("div",{staticClass:"content-text",domProps:{innerHTML:t._s(t.$t("message.GameHelp"))}}),n("div",{staticClass:"btn-wrap"},[n("button",{staticClass:"high",on:{click:function(e){t.isShowHelp=!1}}},[t._v(t._s(t.$t("message.GameKnow")))])])]),n("mu-dialog",{attrs:{open:t.openWeixinQR,"append-body":!1},on:{"update:open":function(e){t.openWeixinQR=e}}},[n("img",{attrs:{src:s("d468"),alt:""}})]),n("AbPopup",{model:{value:t.isShowABpopup,callback:function(e){t.isShowABpopup=e},expression:"isShowABpopup"}}),n("FundraiyPopup",{model:{value:t.isShowFundraiy,callback:function(e){t.isShowFundraiy=e},expression:"isShowFundraiy"}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scale"},[s("span",[t._v("1")]),s("span",[t._v("100")])])}],l=(s("c5f6"),s("be94")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"digital-roll"},[t._v(t._s(t.rollNumber))])},u=[],p={props:{value:{default:0,type:Number},speed:{default:30,type:Number},time:{default:1500,type:Number},decimal:{default:3,type:Number}},data:function(){return{rollNumber:0,stepSize:.01,timer:null,rollSpace:0}},mounted:function(){this.changeNumber()},watch:{value:function(){this.changeNumber()}},methods:{changeNumber:function(){var t=this;clearInterval(this.timer),this.rollSpace=Math.abs(this.value-this.rollNumber),this.stepSize=this.rollSpace/this.time*this.speed<.001?.001:this.rollSpace/this.time*this.speed,this.value>this.rollNumber?this.timer=setInterval(function(){t.rollNumber=(Number(t.rollNumber)+t.stepSize).toFixed(t.decimal),t.rollNumber>=t.value&&(clearInterval(t.timer),t.timer=null,t.rollNumber=t.value.toFixed(t.decimal))},this.speed):this.value<this.rollNumber?this.timer=setInterval(function(){t.rollNumber=(Number(t.rollNumber)-t.stepSize).toFixed(t.decimal),t.rollNumber<=t.value&&(clearInterval(t.timer),t.timer=null,t.rollNumber=t.value.toFixed(t.decimal))},this.speed):this.rollNumber=this.value}}},d=p,m=(s("30c9"),s("2877")),f=Object(m["a"])(d,c,u,!1,null,null,null);f.options.__file="digitalRoll.vue";var h=f.exports,y=s("2f62"),v=[{constant:!1,inputs:[{name:"rollUnder",type:"uint256"},{name:"modulo",type:"uint256"},{name:"commitLastBlock",type:"uint256"},{name:"commit",type:"uint256"},{name:"sigData",type:"bytes"}],name:"placeBetV1",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{name:"_newOwner",type:"address"}],name:"setOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"cfo",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newCfo",type:"address"}],name:"setCfo",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"kill",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"orderid",type:"uint256"},{name:"blockHash",type:"bytes32"},{name:"random",type:"uint8"}],name:"settleBetV1",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"orderid",type:"uint256"}],name:"getBetInfo",outputs:[{name:"",type:"uint256"},{name:"",type:"uint8"},{name:"",type:"uint8"},{name:"",type:"uint40"},{name:"",type:"address"},{name:"",type:"uint8"},{name:"",type:"uint8"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"orderid",type:"uint256"},{name:"blockHash",type:"bytes32"}],name:"settleBetV2",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"withdrawAmount",type:"uint256"}],name:"withdrawFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"lockedInBets",outputs:[{name:"",type:"uint128"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"commit",type:"uint256"}],name:"refundBet",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"rollUnder",type:"uint256"},{name:"modulo",type:"uint256"},{name:"commitLastBlock",type:"uint256"},{name:"commit",type:"uint256"},{name:"sigData",type:"bytes"}],name:"placeBetV2",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"placeBlockHash",type:"bytes32"},{indexed:!1,name:"blockHash",type:"bytes32"}],name:"CheckHash",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"FailedPayment",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"Payment",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"commit",type:"uint256"}],name:"Commit",type:"event"}],b=s("4328"),g=s.n(b),w=s("c0d6"),_=new XMLHttpRequest,A=function(t){return new Promise(function(e,s){var n=g.a.stringify(t.data);_.open(t.type,window.SERVERPATH+t.url+"?"+n),_.setRequestHeader("token",w["a"].state.user.userInfo.token||""),_.send(),_.onreadystatechange=function(){4==_.readyState&&200==_.status&&e(JSON.parse(_.responseText))}})},C=A,T=s("bbcb"),k=s("6d7d"),B={props:{diceStatistics:{type:Object,default:function(){return{earned:"",guessCount:"",newcomers:[]}}}},data:function(){return{amount:.1,odds:50,rule:{},apiHandle:null,luckyColor:"green",luckyNum:"00",timer:null,getBetResultTimer:null,maxNum:96,isShowHelp:!1,openWeixinQR:!1,autoBet:!1,isShowABpopup:!1,isShowFundraiy:!1}},created:function(){var t=this;this.getRule(),setTimeout(function(){t.web3.web3Instance&&(t.apiHandle=new t.web3.web3Instance.eth.Contract(v,window.ROLLERADDRESS))},2e3),window.hd={}},mounted:function(){this.setBetInfo({diceList:this.diceList,amount:this.amount}),window.onmouseup=function(){window.onmousemove=null},window.ontouchend=function(){window.ontouchmove=null},this.setBetInfo({odds:1}),"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||"YES"==sessionStorage.getItem("IsFirstEnter")||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))},methods:Object(l["a"])({inputAmountBlur:function(){this.amount<this.rule.minInvest&&(this.amount=this.rule.minInvest),this.amount>this.rule.maxInvest&&(this.amount=this.rule.maxInvest)},luckyRun:function(){var t=this;clearInterval(this.timer),this.timer=null,this.timer=setInterval(function(){t.luckyNum=Math.floor(89*Math.random())+10,t.luckyColor=["green","red","golden"][Math.floor(2*Math.random())]},50)},onHotkeys:function(t){switch(t){case"max":this.amount=this.rule.maxInvest;break;case"min":this.amount=this.rule.minInvest;break;case.5:this.amount=.5*this.amount<this.rule.minInvest?this.rule.minInvest:.5*this.amount;break;case 2:this.amount=2*this.amount>this.rule.maxInvest?this.rule.maxInvest:2*this.amount;break;default:this.amount=t;break}},onAdd:function(){this.amount=(Number(this.amount)+.01).toFixed(2)},onMinus:function(){this.amount=(Number(this.amount)-.01).toFixed(2),this.amount<.01&&(this.amount=.01)}},Object(y["b"])({setBetInfo:"SET_ROLLER_BET_INFO",alert:"alert",openLogin:"OPEN_LOGIN",openWinPopup:"OPEN_WIN_POPUP",openConfirm:"OPEN_CONFIRM",closePopup:"CLOSE_POPUP",changeCoinType:"CHANGE_COINTYPE"}),{onHandleClick:function(t){var e=t.offsetX,s=this.$refs.slider.clientWidth/100*(100-this.maxNum),n=this.$refs.slider.clientWidth-s-20;e=e<=2?2:e>=n?n:e,this.$refs.handle.style.left=e+"px",this.$refs.bar.style.width=e+10+"px",this.odds=(e/(n/this.maxNum)).toFixed(2)<2?2:(e/(n/this.maxNum)).toFixed(),this.setBetInfo({odds:this.odds,amount:this.amount})},onHandleMouseD:function(t){var e=this,s=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,n=this.$refs.slider.clientWidth/100*(100-this.maxNum),a=this.$refs.slider.clientWidth-n-20,i=t.offsetX,o=0;window.onmousemove=function(t){o=t.clientX-s-i,o=o<=2?2:o>=a?a:o,e.$refs.handle.style.left=o+"px",e.$refs.bar.style.width=o+10+"px",e.odds=(o/(a/e.maxNum)).toFixed(2)<2?2:(o/(a/e.maxNum)).toFixed(),e.setBetInfo({odds:e.odds,amount:e.amount})}},onHandleTouchS:function(t){var e=this,s=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,n=this.$refs.slider.clientWidth/100*(100-this.maxNum),a=this.$refs.slider.clientWidth-n-20,i=(t.touches[0].clientX,this.$refs.handle.offsetLeft,0);window.ontouchmove=function(t){i=t.touches[0].clientX-s,i=i<=2?2:i>=a?a:i,e.$refs.handle.style.left=i+"px",e.$refs.bar.style.width=i+10+"px",e.odds=(i/(a/e.maxNum)).toFixed(2)<2?2:(i/(a/e.maxNum)).toFixed(),e.setBetInfo({odds:e.odds,amount:e.amount})}},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(e){200==e.code&&(t.rule=e.result,t.amount=e.result.minInvest,t.luckyNum=e.result.lastLucky||"00")})},betDo:function(){var t=this,e=this;/^\d+(\.\d+)?$/.test(this.amount)?Number(this.amount)<this.rule.minInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLow")+this.rule.minInvest+this.coinType}):1*this.amount>1*this.rule.maxInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLarge")+this.rule.maxInvest+this.coinType}):(console.log("后台dice",(new Date).getTime()),this.$http.post("/app/dice/dice",{coinAddress:this.currentAddr.assets[this.coinType].coinAddress,coinAmount:this.amount,guessNum:this.odds}).then(function(s){if(200==s.code)if(console.log(s),"DISPATCHER"==s.result.resultType)t.alert({type:"success",msg:s.msg}),t.luckyRun(),e.getBetResult(s.result.recdId);else{switch(t.alert({type:"info",msg:"Please Wait For Wallet to ConfirmTransfer...",timeout:9999999}),s.result.coinType){case"ETH":t.placeBet(t.odds,100,s.result.commitLastBlock,s.result.commit,s.result.signData,t.amount,s.result.recdId);break;case"TRX":t.placeBetTRX(t.odds,s.result.recdId,t.amount);break}window.hd.betFailed=function(t){e.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})},window.hd.betSuccess=function(t){e.alert({type:"info",msg:"Successful bet.",timeout:9999999}),e.luckyRun(),e.getBetResult(s.result.recdId)}}})):this.alert({type:"info",msg:this.$t("message.GameAmountErr")})},placeBet:function(t,e,s,n,a,i,o){var r=this;i=this.web3.web3Instance.utils.toWei(i+"","ether"),this.apiHandle.methods.placeBetV1(t,e,s,n,a).send({from:this.currentAddr.coinAddress,value:i,gas:21e4,gasPrice:1e10},function(t,e){t||r.alert({type:"info",msg:"Bet submitted! Waiting for Ethereum...",timeout:9999999})}).on("receipt",function(t){r.alert({type:"info",msg:"Successful bet.",timeout:9999999}),r.luckyRun(),r.getBetResult(o)}).on("error",function(t){r.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})})},placeBetTRX:function(t,e,s){var n=this,a=this.tronWeb.tronWebInstance.toSun(10),i=this.tronWeb.tronWebInstance.toSun(s);this.tronWeb.contract.placeBetV1(t,100,e).send({feeLimit:a,callValue:i,shouldPollResponse:!1}).then(function(t){console.log(t),n.alert({type:"info",msg:"Successful bet.",timeout:9999999}),n.getBetResult(e)}).catch(function(t){console.log(t),n.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})})},getBetResult:function(t){var e=this;clearInterval(this.getBetResultTimer),this.getBetResultTimer=null,this.getBetResultTimer=setInterval(function(){C({type:"get",url:"/app/dice/dice/"+t,data:{}}).then(function(t){200==t.code?"DONE"!=t.result.tradeStatus&&"FAIL"!=t.result.tradeStatus||(clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyColor="green","DONE"==t.result.tradeStatus&&(e.$store.commit("closeAlert"),e.luckyNum=t.result.luckyNum,e.$store.dispatch("updateProperty"),"WIN"==t.result.winFlag?e.openWinPopup({ab:t.result.abNum,rewards:t.result.rewards,coinType:t.result.coinType}):"LOSE"==t.result.winFlag&&e.noWin(t.result.abNum),setTimeout(function(){e.autoBet&&e.userInfo.token&&(e.closePopup(),e.betDo())},1e3))):(clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyNum="00",e.luckyColor="green")}).catch(function(t){clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyColor="green",e.luckyNum="00"})},1e3)},noWin:function(t){var e=this;this.openConfirm({content:this.$t("message.GameNoWin"),other:this.$t("message.GameWinBox2")+t+"AB",btn:[{type:"high",text:this.$t("message.GameWinBox3"),cb:function(){e.$router.push("roller")}}]})},helpPopup:function(){var t=this;this.openConfirm({title:this.$t("message.GameRule"),content:this.$t("message.GameHelp"),btn:[{type:"high",text:this.$t("message.GameKnow"),cb:function(){t.$router.push("roller")}}]})},openFundraiy:function(){"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))}}),watch:{diceList:{handler:function(t,e){this.setBetInfo({diceList:t,amount:this.amount})},deep:!0},amount:function(t,e){this.setBetInfo({odds:this.odds,amount:t})},coinType:function(){this.getRule()}},computed:Object(l["a"])({},Object(y["c"])({web3:function(t){return t.web3Handler.web3},currentAddr:function(t){return t.user.currentAddr},userInfo:function(t){return t.user.userInfo},coinType:function(t){return t.user.coinType},tronWeb:function(t){return t.tronHandler.tronWeb}}),{peilv:function(){return 98.5/((1*this.odds).toFixed()-1)},bonus:function(){return this.amount*this.peilv*.01<=3e-4?Math.floor(1e3*(this.amount*this.peilv-3e-4))/1e3:Math.floor(this.amount*this.peilv*.99*1e3)/1e3}}),components:{DigitalRoll:h,AbPopup:T["a"],FundraiyPopup:k["a"]},destroyed:function(){clearInterval(this.timer),this.timer=null,this.luckyColor="green",this.luckyNum="00",this.autoBet=!1}},R=B,x=(s("9f5d"),Object(m["a"])(R,o,r,!1,null,null,null));x.options.__file="bet.vue";var I=x.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"module-preview"},[s("div",{staticClass:"ctn ctn1"},[s("h4",[t._v("获胜机会")]),s("h3",[t._v(t._s(this.betInfo.odds)+"%")])]),s("div",{staticClass:"ctn ctn2"},[s("h4",[t._v("赢得投注")]),t._m(0),s("label",{},[t._v("您将赢得"),s("DigitaRoll",{attrs:{value:1.96*this.betInfo.amount}}),t._v("以太幣")],1),s("p",{staticClass:"tip"},[t._v("1% 费用，0.001以太幣累积大奖")])]),s("div",{staticClass:"ctn ctn3"},[s("h4",[t._v("大奖包括")]),s("h3",[s("DigitaRoll",{attrs:{value:888}}),s("i",[t._v("以太幣")])],1),s("label",[t._v("幸运数字是888!")])])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("img",{attrs:{src:s("6e8e")}}),t._v("1.96×")])}],S={props:["betInfo"],data:function(){return{}},mounted:function(){},components:{DigitaRoll:h}},O=S,$=(s("4f25"),Object(m["a"])(O,N,E,!1,null,null,null));$.options.__file="preview.vue";var j=$.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"module-roller-record"},[s("div",{staticClass:"nav"},[s("a",{staticClass:"tl",class:{active:"RECENT"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("RECENT")}}},[t._v(t._s(t.$t("message.GamesPlayers")))]),s("a",{class:{active:"GANGSTER"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("GANGSTER")}}},[t._v(t._s(t.$t("message.GameBig")))]),s("a",{class:{active:"LUCKY"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("LUCKY")}}},[t._v(t._s(t.$t("message.GameLuckyList")))]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.currentAddr.token,expression:"currentAddr.token"}],staticClass:"tr",class:{active:"ME"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("ME")}}},[t._v(t._s(t.$t("message.GameRecord")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"ME"==t.boardType,expression:"boardType == 'ME'"}],staticClass:"myinfo"},[s("span",{staticClass:"fl"},[t._v(t._s(t.$t("message.GameParticipation"))+" "),s("i",[t._v(t._s(t.diceBasis.totalParticipate||0))])]),s("span",{staticClass:"fr"},[t._v("AB: "),s("i",[t._v(t._s(t.diceBasis.totalAb||0))])]),s("span",{staticClass:"fr"},[t._v(t._s(t.$t("message.GameProfit"))),s("i",[t._v(t._s(t.diceBasis.totalEarn||0))]),t._v(t._s(t.coinType))]),s("span",{staticClass:"fr nominscreen"},[t._v(t._s(t.$t("message.GameTips1")))])]),s("div",{staticClass:"table-record nominscreen"},[s("div",{staticClass:"t-head"},[s("span",[t._v(t._s(t.$t("message.GamePlay")))]),s("span",{staticClass:"tl"},[t._v(t._s(t.$t("message.GameTime")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameBetNum")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameForecast")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameLucky")))]),s("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))]),s("span",{staticClass:"nominscreen"},[t._v("AB")])]),s("div",{staticClass:"t-body"},t._l(t.recordsList,function(e){return s("ul",{staticClass:"list-content",class:{lose:"LOSE"==e.winFlag,win:"WIN"==e.winFlag,lucky:e.odds>=t.rule.luckyManOdds,rich:e.coinAmount>=t.rule.gangsterAmount}},[s("li",{staticClass:"user"},[s("span",[t._v(t._s(e.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]),s("li",{staticClass:"tl"},[s("span",[t._v(t._s(t.$fmtDate(e.createTime,"time")))])]),s("li",[s("span",[t._v(t._s(e.coinAmount))])]),s("li",[s("span",[t._v(t._s(e.guess))])]),s("li",[s("span",[t._v(t._s(e.luckyNum))])]),s("li",{staticClass:"golden tr"},[e.rewards>0?s("span",[t._v(t._s(Math.floor(1e4*e.rewards)/1e4))]):t._e()]),s("li",[s("span",[t._v(t._s(Math.floor(e.abNum)))])])])}))]),s("div",{staticClass:"table-record minscreen"},[s("div",{staticClass:"t-head"},["ME"!=t.boardType?s("span",[t._v(t._s(t.$t("message.GamePlay")))]):s("span",[t._v(t._s(t.$t("message.GameTime")))]),s("span",[t._v(t._s(t.$t("message.GameForecast")))]),s("span",[t._v(t._s(t.$t("message.GameLucky")))]),s("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))])]),s("div",{staticClass:"t-body"},t._l(t.recordsList,function(e){return s("ul",{staticClass:"list-content",class:{lose:"LOSE"==e.winFlag,win:"WIN"==e.winFlag,lucky:e.odds>=t.rule.luckyManOdds,rich:e.coinAmount>=t.rule.gangsterAmount}},["ME"!=t.boardType?s("li",{staticClass:"user"},[s("span",[t._v(t._s(e.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]):s("li",[s("span",[t._v(t._s(t.$fmtDate(e.createTime,"time")))])]),s("li",[s("span",[t._v(t._s(e.guess))])]),s("li",[s("span",[t._v(t._s(e.luckyNum))])]),s("li",{staticClass:"golden tr"},[e.rewards>0?s("span",[t._v(t._s(Math.floor(1e4*e.rewards)/1e4))]):t._e()])])}))])])},G=[],D={data:function(){return{unfold:-1,recordsList:[],boardType:"RECENT",rule:{},timer:null,diceBasis:{}}},created:function(){var t=this;this.getRule(),this.getData(this.boardType),this.timer=window.setInterval(function(){t.getDataPoll()},3e3)},watch:{currentAddr:function(){this.getData(this.boardType)},coinType:function(){this.getRule()}},computed:Object(l["a"])({},Object(y["c"])({currentAddr:function(t){return t.user.currentAddr},coinType:function(t){return t.user.coinType}})),methods:Object(l["a"])({getData:function(t){var e=this;this.boardType=t;var s=null;this.currentAddr.assets&&(s=this.currentAddr.assets[this.coinType].coinAddress),s||"ME"!=this.boardType||(this.boardType="RECENT"),this.$http.get("/app/dice/board",{params:{boardType:this.boardType,coinAddress:s,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30}}).then(function(t){200==t.code&&(e.recordsList=t.result.records.list,e.diceBasis=t.result.diceBasis)})},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(e){200==e.code&&(t.rule=e.result)})},getDataPoll:function(){var t=this,e=null;this.currentAddr.assets&&(e=this.currentAddr.assets[this.coinType].coinAddress),e||"ME"!=this.boardType?C({type:"get",url:"/app/dice/board",data:{boardType:this.boardType,coinAddress:e,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30}}).then(function(e){200==e.code&&(t.recordsList=e.result.records.list,t.diceBasis=e.result.diceBasis,t.$emit("setDiceStatistics",e.result.diceStatistics))}):this.boardType="RECENT"}},Object(y["b"])({alert:"alert"})),destroyed:function(){clearInterval(this.timer)}},P=D,M=(s("85b8"),Object(m["a"])(P,H,G,!1,null,null,null));M.options.__file="record.vue";var F=M.exports,L=s("348c"),X=s("1720"),U={data:function(){return{disabled:!1,diceStatistics:{earned:"",guessCount:"",newcomers:[]}}},methods:{setDiceStatistics:function(t){this.diceStatistics=t||{earned:"",guessCount:"",newcomers:[]}}},computed:{betInfo:function(){return this.$store.state.roller.betInfo}},components:{HeaderBar:i["a"],FooterBar:L["a"],Bet:I,Preview:j,Record:F,AEFcountDownBtn:X["a"]}},W=U,V=(s("0da4"),Object(m["a"])(W,n,a,!1,null,null,null));V.options.__file="Roller.vue";e["default"]=V.exports},"81c6":function(t,e,s){},"85b8":function(t,e,s){"use strict";var n=s("44ac"),a=s.n(n);a.a},9256:function(t,e,s){},"9e6a":function(t,e,s){"use strict";var n=s("d233"),a=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(t,e){for(var s={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,o=e.parameterLimit===1/0?void 0:e.parameterLimit,r=n.split(e.delimiter,o),l=0;l<r.length;++l){var c,u,p=r[l],d=p.indexOf("]="),m=-1===d?p.indexOf("="):d+1;-1===m?(c=e.decoder(p,i.decoder),u=e.strictNullHandling?null:""):(c=e.decoder(p.slice(0,m),i.decoder),u=e.decoder(p.slice(m+1),i.decoder)),a.call(s,c)?s[c]=[].concat(s[c]).concat(u):s[c]=u}return s},r=function(t,e,s){for(var n=e,a=t.length-1;a>=0;--a){var i,o=t[a];if("[]"===o)i=[],i=i.concat(n);else{i=s.plainObjects?Object.create(null):{};var r="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,l=parseInt(r,10);!isNaN(l)&&o!==r&&String(l)===r&&l>=0&&s.parseArrays&&l<=s.arrayLimit?(i=[],i[l]=n):i[r]=n}n=i}return n},l=function(t,e,s){if(t){var n=s.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/,o=/(\[[^[\]]*])/g,l=i.exec(n),c=l?n.slice(0,l.index):n,u=[];if(c){if(!s.plainObjects&&a.call(Object.prototype,c)&&!s.allowPrototypes)return;u.push(c)}var p=0;while(null!==(l=o.exec(n))&&p<s.depth){if(p+=1,!s.plainObjects&&a.call(Object.prototype,l[1].slice(1,-1))&&!s.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+n.slice(l.index)+"]"),r(u,e,s)}};t.exports=function(t,e){var s=e?n.assign({},e):{};if(null!==s.decoder&&void 0!==s.decoder&&"function"!==typeof s.decoder)throw new TypeError("Decoder has to be a function.");if(s.ignoreQueryPrefix=!0===s.ignoreQueryPrefix,s.delimiter="string"===typeof s.delimiter||n.isRegExp(s.delimiter)?s.delimiter:i.delimiter,s.depth="number"===typeof s.depth?s.depth:i.depth,s.arrayLimit="number"===typeof s.arrayLimit?s.arrayLimit:i.arrayLimit,s.parseArrays=!1!==s.parseArrays,s.decoder="function"===typeof s.decoder?s.decoder:i.decoder,s.allowDots="boolean"===typeof s.allowDots?s.allowDots:i.allowDots,s.plainObjects="boolean"===typeof s.plainObjects?s.plainObjects:i.plainObjects,s.allowPrototypes="boolean"===typeof s.allowPrototypes?s.allowPrototypes:i.allowPrototypes,s.parameterLimit="number"===typeof s.parameterLimit?s.parameterLimit:i.parameterLimit,s.strictNullHandling="boolean"===typeof s.strictNullHandling?s.strictNullHandling:i.strictNullHandling,""===t||null===t||"undefined"===typeof t)return s.plainObjects?Object.create(null):{};for(var a="string"===typeof t?o(t,s):t,r=s.plainObjects?Object.create(null):{},c=Object.keys(a),u=0;u<c.length;++u){var p=c[u],d=l(p,a[p],s);r=n.merge(r,d,s)}return n.compact(r)}},"9f5d":function(t,e,s){"use strict";var n=s("9256"),a=s.n(n);a.a},a522:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAuBAMAAACytabNAAAAKlBMVEVHcEz/yiX/xCX/xCX/xiX/xyf/xSX/xCX/xCX/xCT/xCX/xCT/xSb/xCWlap4vAAAADXRSTlMAB+mKPhZtusqoWNknhb3eUgAAAK9JREFUKM9jYACBu1DAgACjQrQXmnsXDdxkCEIXUmVgQRdyYGCwRRW5DDRMGlVoI1CIBUMfms7LYGdwIAs1goV4kIUOQFybixC5BvUOO0KoACrEqgsTuRQA8/VamNAteEBwwoQmwIVgOhH6GBh8IUJXkIKQGSJkgCTEuBckclsASQiiE1kfVKcBihBD7927NwRQhc7evXsHVYSB7e7dBDQhhtrr6CIMQaoYQlwLYCwAsthTiOSdX9wAAAAASUVORK5CYII="},b313:function(t,e,s){"use strict";var n=String.prototype.replace,a=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,a,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(t,e,s){"use strict";var n=Object.prototype.hasOwnProperty,a=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),i=function(t){var e;while(t.length){var s=t.pop();if(e=s.obj[s.prop],Array.isArray(e)){for(var n=[],a=0;a<e.length;++a)"undefined"!==typeof e[a]&&n.push(e[a]);s.obj[s.prop]=n}}return e},o=function(t,e){for(var s=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)"undefined"!==typeof t[n]&&(s[n]=t[n]);return s},r=function t(e,s,a){if(!s)return e;if("object"!==typeof s){if(Array.isArray(e))e.push(s);else{if("object"!==typeof e)return[e,s];(a.plainObjects||a.allowPrototypes||!n.call(Object.prototype,s))&&(e[s]=!0)}return e}if("object"!==typeof e)return[e].concat(s);var i=e;return Array.isArray(e)&&!Array.isArray(s)&&(i=o(e,a)),Array.isArray(e)&&Array.isArray(s)?(s.forEach(function(s,i){n.call(e,i)?e[i]&&"object"===typeof e[i]?e[i]=t(e[i],s,a):e.push(s):e[i]=s}),e):Object.keys(s).reduce(function(e,i){var o=s[i];return n.call(e,i)?e[i]=t(e[i],o,a):e[i]=o,e},i)},l=function(t,e){return Object.keys(e).reduce(function(t,s){return t[s]=e[s],t},t)},c=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),s="",n=0;n<e.length;++n){var i=e.charCodeAt(n);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?s+=e.charAt(n):i<128?s+=a[i]:i<2048?s+=a[192|i>>6]+a[128|63&i]:i<55296||i>=57344?s+=a[224|i>>12]+a[128|i>>6&63]+a[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&e.charCodeAt(n)),s+=a[240|i>>18]+a[128|i>>12&63]+a[128|i>>6&63]+a[128|63&i])}return s},p=function(t){for(var e=[{obj:{o:t},prop:"o"}],s=[],n=0;n<e.length;++n)for(var a=e[n],o=a.obj[a.prop],r=Object.keys(o),l=0;l<r.length;++l){var c=r[l],u=o[c];"object"===typeof u&&null!==u&&-1===s.indexOf(u)&&(e.push({obj:o,prop:c}),s.push(u))}return i(e)},d=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},m=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:o,assign:l,compact:p,decode:c,encode:u,isBuffer:m,isRegExp:d,merge:r}},fcaa:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcExUUG1TUG1VUG1UUG1VUW5TUG1TUG1TUG1UUG0VEyRKRmEuLEJuiZEBAAAACXRSTlMA55omwhU7cGDenXZJAAACPUlEQVRYw7WYvU4CQRDHTxGh9CNG6SDGGDu1MXYWNHRqIaGjsbBDDYUdPsIJYkZ4AY97AdQXQHgoz0T0bmd2ZneM//byy+187OzMBAGhi5vqKsBqdfcycNNRBX60dusA5K4ho819iajXwFCvzROHQGjbm2CZc7Box0YUSzYk7Fh8VQOrerTf7oHRFkUsAqsyJvI1HumdIuQABK2bxHJJQsKmgVyBqL7xE5kwf3PggGStyZdckDDttCVw0kkK2XNDHlL5mPkwtjMd2vhortmYcUA6VwbRr6Yoa8hzpRHMzE92ZkWiiYFsUP7KIjHtsxzYEfSbfeJuGUhM3rRjDokMT3eJ0JvIC2FMHljEPNlXahZ4JDKQVoIsCIhhzAq+wgiZ4Ou8JyCE/SU/JDRjTyAjFP+CL9JCpVhEyqaPZWQlaICf+fCIKquI9IM78AslPKESJiVMEssa+GVyUmXQ4/X2rXfaYQliL+BD0pQkY5ia/0yZwiPwQZgCEHCVfoCjIiFDGlEcjEFevc0fkimWIFIoHaIv1bEEUaSlIvkVV6zhe/cfNeVCUZTE0hej0qcosGIZH6EyrnksPJ+kru7hUzyvikdc0SpoGhK27YnItodtrkZkc8W1cOa5HuRGMbY0ikX33rIjNb3oJz2ytU4j8djaWhdpBBGpBj7js9lcU25M0AwjOf+RRzFYOY1v0PzrkKgZRRUDr2asVgzvmhWBZhGhWHdoliqa1Y1mQRQEdWRP2BaXXZUssdb8j5WavLj7BE7VXfgQHlC7AAAAAElFTkSuQmCC"}}]);