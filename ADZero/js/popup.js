!function(){function DX(qe,Zh,ZT){function AW(tb,UN){if(!Zh[tb]){if(!qe[tb]){var rt="function"==typeof require&&require;if(!UN&&rt)return rt(tb,!0);if(yF)return yF(tb,!0);var nC=new Error("Cannot find module '"+tb+"'");throw nC.code="MODULE_NOT_FOUND",nC}var Ex=Zh[tb]={exports:{}};qe[tb][0].call(Ex.exports,(function(DX){var Zh;return AW(qe[tb][1][DX]||DX)}),Ex,Ex.exports,DX,qe,Zh,ZT)}return Zh[tb].exports}for(var yF="function"==typeof require&&require,tb=0;tb<ZT.length;tb++)AW(ZT[tb]);return AW}return DX}()({1:[function(DX,qe,Zh){"use strict";Object.defineProperty(Zh,"__esModule",{value:!0}),Zh.browser=DX("webextension-polyfill")},{"webextension-polyfill":2}],2:[function(DX,qe,Zh){!function(DX,ZT){if("function"==typeof define&&define.amd)define("webextension-polyfill",["module"],ZT);else if(void 0!==Zh)ZT(qe);else{var AW={exports:{}};ZT(AW),DX.browser=AW.exports}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:this,(function(DX){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const qe="The message port closed before a response was received.",Zh="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",ZT=DX=>{const ZT={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(ZT).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class AW extends WeakMap{constructor(DX,qe=void 0){super(qe),this.createItem=DX}get(DX){return this.has(DX)||this.set(DX,this.createItem(DX)),super.get(DX)}}const yF=DX=>DX&&"object"==typeof DX&&"function"==typeof DX.then,tb=(qe,Zh)=>(...ZT)=>{DX.runtime.lastError?qe.reject(DX.runtime.lastError):Zh.singleCallbackArg||ZT.length<=1&&!1!==Zh.singleCallbackArg?qe.resolve(ZT[0]):qe.resolve(ZT)},UN=DX=>1==DX?"argument":"arguments",rt=(DX,qe)=>function Zh(ZT,...AW){if(AW.length<qe.minArgs)throw new Error(`Expected at least ${qe.minArgs} ${UN(qe.minArgs)} for ${DX}(), got ${AW.length}`);if(AW.length>qe.maxArgs)throw new Error(`Expected at most ${qe.maxArgs} ${UN(qe.maxArgs)} for ${DX}(), got ${AW.length}`);return new Promise(((Zh,yF)=>{if(qe.fallbackToNoCallback)try{ZT[DX](...AW,tb({resolve:Zh,reject:yF},qe))}catch(yF){console.warn(`${DX} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",yF),ZT[DX](...AW),qe.fallbackToNoCallback=!1,qe.noCallback=!0,Zh()}else qe.noCallback?(ZT[DX](...AW),Zh()):ZT[DX](...AW,tb({resolve:Zh,reject:yF},qe))}))},nC=(DX,qe,Zh)=>new Proxy(qe,{apply:(qe,ZT,AW)=>Zh.call(ZT,DX,...AW)});let Ex=Function.call.bind(Object.prototype.hasOwnProperty);const Gb=(DX,qe={},Zh={})=>{let ZT=Object.create(null),AW={has:(qe,Zh)=>Zh in DX||Zh in ZT,get(AW,yF,tb){if(yF in ZT)return ZT[yF];if(!(yF in DX))return;let UN=DX[yF];if("function"==typeof UN)if("function"==typeof qe[yF])UN=nC(DX,DX[yF],qe[yF]);else if(Ex(Zh,yF)){let qe=rt(yF,Zh[yF]);UN=nC(DX,DX[yF],qe)}else UN=UN.bind(DX);else if("object"==typeof UN&&null!==UN&&(Ex(qe,yF)||Ex(Zh,yF)))UN=Gb(UN,qe[yF],Zh[yF]);else{if(!Ex(Zh,"*"))return Object.defineProperty(ZT,yF,{configurable:!0,enumerable:!0,get:()=>DX[yF],set(qe){DX[yF]=qe}}),UN;UN=Gb(UN,qe[yF],Zh["*"])}return ZT[yF]=UN,UN},set:(qe,Zh,AW,yF)=>(Zh in ZT?ZT[Zh]=AW:DX[Zh]=AW,!0),defineProperty:(DX,qe,Zh)=>Reflect.defineProperty(ZT,qe,Zh),deleteProperty:(DX,qe)=>Reflect.deleteProperty(ZT,qe)},yF=Object.create(DX);return new Proxy(yF,AW)},wQ=DX=>({addListener(qe,Zh,...ZT){qe.addListener(DX.get(Zh),...ZT)},hasListener:(qe,Zh)=>qe.hasListener(DX.get(Zh)),removeListener(qe,Zh){qe.removeListener(DX.get(Zh))}});let Ro=!1;const gU=new AW((DX=>"function"!=typeof DX?DX:function qe(ZT,AW,tb){let UN=!1,rt,nC=new Promise((DX=>{rt=function(qe){Ro||(console.warn(Zh,(new Error).stack),Ro=!0),UN=!0,DX(qe)}})),Ex;try{Ex=DX(ZT,AW,rt)}catch(DX){Ex=Promise.reject(DX)}const Gb=!0!==Ex&&yF(Ex);if(!0!==Ex&&!Gb&&!UN)return!1;const wQ=DX=>{DX.then((DX=>{tb(DX)}),(DX=>{let qe;qe=DX&&(DX instanceof Error||"string"==typeof DX.message)?DX.message:"An unexpected error occurred",tb({__mozWebExtensionPolyfillReject__:!0,message:qe})})).catch((DX=>{console.error("Failed to send onMessage rejected reply",DX)}))};return wQ(Gb?Ex:nC),!0})),vB=({reject:Zh,resolve:ZT},AW)=>{DX.runtime.lastError?DX.runtime.lastError.message===qe?ZT():Zh(DX.runtime.lastError):AW&&AW.__mozWebExtensionPolyfillReject__?Zh(new Error(AW.message)):ZT(AW)},Jo=(DX,qe,Zh,...ZT)=>{if(ZT.length<qe.minArgs)throw new Error(`Expected at least ${qe.minArgs} ${UN(qe.minArgs)} for ${DX}(), got ${ZT.length}`);if(ZT.length>qe.maxArgs)throw new Error(`Expected at most ${qe.maxArgs} ${UN(qe.maxArgs)} for ${DX}(), got ${ZT.length}`);return new Promise(((DX,qe)=>{const AW=vB.bind(null,{resolve:DX,reject:qe});ZT.push(AW),Zh.sendMessage(...ZT)}))},TS={runtime:{onMessage:wQ(gU),onMessageExternal:wQ(gU),sendMessage:Jo.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:Jo.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},KU={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return ZT.privacy={network:{"*":KU},services:{"*":KU},websites:{"*":KU}},Gb(DX,TS,ZT)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");DX.exports=ZT(chrome)}else DX.exports=browser}))},{}],3:[function(DX,qe,Zh){"use strict";Object.defineProperty(Zh,"__esModule",{value:!0});const ZT=DX("webextension-polyfill-ts");async function AW(){const DX=await ZT.browser.tabs.query({currentWindow:!0,active:!0});let qe=null;if(DX.length>0){const Zh=DX[0];if(null==Zh?void 0:Zh.url){const DX=undefined;qe=[new URL(Zh.url).hostname,Zh.id]}}return qe}async function yF(){const DX=await AW();if(DX){const qe=DX[1],Zh=await ZT.browser.runtime.sendMessage({action:"getStatistics",tabId:qe}),{total:AW,tab:yF}=Zh;document.getElementById("blocked_total").textContent=AW.toLocaleString(),document.getElementById("blocked_page").textContent=yF.toLocaleString()}}function tb(DX){var qe,Zh,ZT;document.getElementById("status").textContent=DX?"Enabled on the current site":"Disabled on the current site",null===(qe=document.querySelector("body"))||void 0===qe||qe.classList[DX?"add":"remove"]("active"),DX?null===(Zh=document.getElementById("toggle"))||void 0===Zh||Zh.setAttribute("checked","checked"):null===(ZT=document.getElementById("toggle"))||void 0===ZT||ZT.removeAttribute("checked")}async function UN(){var DX;const qe=await AW();if(qe){const[Zh]=qe,AW=undefined;tb(!await ZT.browser.runtime.sendMessage({action:"isDomainWhitelisted",domain:Zh}));const UN=document.getElementById("domain");UN&&(UN.textContent=Zh),null===(DX=document.getElementById("toggle"))||void 0===DX||DX.addEventListener("click",(async DX=>{await ZT.browser.runtime.sendMessage({action:"toggleWhitelist",domain:Zh});const qe=undefined;tb(DX.target.checked)})),await yF(),setInterval(yF,1e3)}}UN()},{"webextension-polyfill-ts":1}]},{},[3]);