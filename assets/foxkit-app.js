!function(){var t={6295:function(t,e,i){"use strict";i.r(e);i(2422);e.default=new class{constructor(){return this.component=this.component.bind(this),this.component}component(t,e,...i){if("function"==typeof t)return t({...e,children:i});i&&(i=i.filter((t=>null!==t))),e&&(e.class&&(e.className=e.class),delete e.children);let n="fragment"!==t?function(t,e){e=e||{};let i=document.createElement(t);try{i=Object.assign(i,e)}catch{const t=Object.keys(e);for(let n=0;n<t.length;n++)"dataSet"!==e[n]&&i.setAttribute(t[n],e[t[n]])}return i}(t,e):document.createDocumentFragment();if(-1!==["svg","path","rect","text","circle","g"].indexOf(t)){n=document.createElementNS("http://www.w3.org/2000/svg",t);for(const t in e){const i="className"===t?"class":t;n.setAttribute(i,e[t])}}for(const t of i)Array.isArray(t)?n.append(...t):n.append(t);if(null!=e&&e.dataSet)for(const t in e.dataSet)Object.prototype.hasOwnProperty.call(e.dataSet,t)&&(n.dataset[t]=e.dataSet[t]);return e&&!window.__aleartedJSXData&&Object.keys(e).find((t=>t.match(/^data-/)))&&(alert("Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info"),window.__aleartedJSXData=!0),null!=e&&e.ref&&("function"==typeof e.ref?e.ref(n):e.ref=n),null!=e&&e.on&&Object.entries(e.on).forEach((([t,e])=>{n.addEventListener(t,e)})),null!=e&&e.style&&Object.entries(e.style).forEach((([t,e])=>{n.style.setProperty(t,e)})),n}}},2422:function(){!function(){function t(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach((function(t){var i=t instanceof Node;e.appendChild(i?t:document.createTextNode(String(t)))})),this.appendChild(e)}[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:t})}))}()},643:function(t){var e="complete",i="canceled";function n(t,e,i){t.self===t?t.scrollTo(e,i):(t.scrollLeft=e,t.scrollTop=i)}function o(t){var i=t._scrollSettings;if(i){var s=i.maxSynchronousAlignments,r=function(t,e){var i,n,o,s,r,l,a,d=t.align,c=t.target.getBoundingClientRect(),u=d&&null!=d.left?d.left:.5,h=d&&null!=d.top?d.top:.5,p=d&&null!=d.leftOffset?d.leftOffset:0,f=d&&null!=d.topOffset?d.topOffset:0,m=u,w=h;if(t.isWindow(e))l=Math.min(c.width,e.innerWidth),a=Math.min(c.height,e.innerHeight),n=c.left+e.pageXOffset-e.innerWidth*m+l*m,o=c.top+e.pageYOffset-e.innerHeight*w+a*w,o-=f,s=(n-=p)-e.pageXOffset,r=o-e.pageYOffset;else{l=c.width,a=c.height,i=e.getBoundingClientRect();var v=c.left-(i.left-e.scrollLeft),y=c.top-(i.top-e.scrollTop);n=v+l*m-e.clientWidth*m,o=y+a*w-e.clientHeight*w,n-=p,o-=f,n=Math.max(Math.min(n,e.scrollWidth-e.clientWidth),0),o=Math.max(Math.min(o,e.scrollHeight-e.clientHeight),0),s=n-e.scrollLeft,r=o-e.scrollTop}return{x:n,y:o,differenceX:s,differenceY:r}}(i,t),l=Date.now()-i.startTime,a=Math.min(1/i.time*l,1);if(i.endIterations>=s)return n(t,r.x,r.y),t._scrollSettings=null,i.end(e);var d=1-i.ease(a);if(n(t,r.x-r.differenceX*d,r.y-r.differenceY*d),l>=i.time)return i.endIterations++,o(t);!function(t){if("requestAnimationFrame"in window)return window.requestAnimationFrame(t);setTimeout(t,16)}(o.bind(null,t))}}function s(t){return t.self===t}function r(t,e,n,r){var l,a=!e._scrollSettings,d=e._scrollSettings,c=Date.now(),u={passive:!0};function h(t){e._scrollSettings=null,e.parentElement&&e.parentElement._scrollSettings&&e.parentElement._scrollSettings.end(t),n.debug,r(t),l&&(e.removeEventListener("touchstart",l,u),e.removeEventListener("wheel",l,u))}d&&d.end(i);var p=n.maxSynchronousAlignments;return null==p&&(p=3),e._scrollSettings={startTime:c,endIterations:0,target:t,time:n.time,ease:n.ease,align:n.align,isWindow:n.isWindow||s,maxSynchronousAlignments:p,end:h},"cancellable"in n&&!n.cancellable||(l=h.bind(null,i),e.addEventListener("touchstart",l,u),e.addEventListener("wheel",l,u)),a&&o(e),l}function l(t){return"pageXOffset"in t||(t.scrollHeight!==t.clientHeight||t.scrollWidth!==t.clientWidth)&&"hidden"!==getComputedStyle(t).overflow}function a(){return!0}function d(t){if(t.assignedSlot)return d(t.assignedSlot);if(t.parentElement)return"BODY"===t.parentElement.tagName?t.parentElement.ownerDocument.defaultView||t.parentElement.ownerDocument.ownerWindow:t.parentElement;if(t.getRootNode){var e=t.getRootNode();if(11===e.nodeType)return e.host}}t.exports=function(t,i,n){if(t){"function"==typeof i&&(n=i,i=null),i||(i={}),i.time=isNaN(i.time)?1e3:i.time,i.ease=i.ease||function(t){return 1-Math.pow(1-t,t/2)};var o,s=d(t),c=1,u=i.validTarget||a,h=i.isScrollable;for(i.debug;s;)if(i.debug,u(s,c)&&(h?h(s,l):l(s))&&(c++,o=r(t,s,i,p)),!(s=d(s))){p(e);break}return o}function p(t){--c||n&&n(t)}}}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";function t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const e={mode:"same-origin",credentials:"same-origin",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"}};new Map,new Map;i(6295).default;String.prototype.capitalize||(String.prototype.capitalize=function(){var t,e;return this.replace(this[0],null===(t=this[0])||void 0===t||null===(e=t.toUpperCase)||void 0===e?void 0:e.call(t))});function n(t,e=document.body,i=!0,n=!1){return new Promise(((o,s)=>{const r=e.ownerDocument,l=r.querySelector(`script[src="${t}"]`);if(l)return l.dataset.loaded?o(!0):void l.addEventListener("load",(()=>{l.dataset.loaded=!0,o(!0)}));const a=r.createElement("script");a.src=t,a.async=i,a.defer=n,a.addEventListener("load",(()=>{a.dataset.loaded=!0,o(!0)})),a.onerror=s,e.appendChild(a)}))}var o=i(6295).default;function s(){return o("div",{style:{"--tw-bg-opacity":"0.3"},className:"sf-modal sf-modal__wrapper fixed inset-0 z-50 px-5 bg-black flex items-center justify-center transition-opacity opacity-0 duration-200 ease-out"},o("div",{className:"sf-modal__content bg-white relative overflow-y-scroll rounded max-h-[90vh]"},o("button",{className:"sf-modal__close text-black absolute right-4 top-4 p-2 bg-white hover:bg-gray-300 rounded-full z-10"},o("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))))}const r=({context:t=document.documentElement,event:e="click",selector:i,handler:n})=>{const o=function(t){for(let e=t.target;e&&e!==this;e=e.parentNode)if(e.matches(i)){n.call(e,t,e);break}};return t.addEventListener(e,o,!1),()=>{t.removeEventListener(e,o,!1)}};var l=class{constructor(e){t(this,"enable",(()=>{this.lastScrollPosition=window.pageYOffset,this.scrollTarget.style.overflow="hidden",this.scrollTarget.style.position="fixed",this.scrollTarget.style.top=`-${this.lastScrollPosition}px`,this.scrollTarget.style.width="100%"})),t(this,"disable",(()=>{this.scrollTarget.style.removeProperty("overflow"),this.scrollTarget.style.removeProperty("position"),this.scrollTarget.style.removeProperty("top"),this.scrollTarget.style.removeProperty("width"),window.scrollTo(0,this.lastScrollPosition)})),this.scrollTarget=e,this.lastScrollPosition=0}},a=i(6295).default;window.spratlyTheme=window.spratlyTheme||{};var d=class{constructor(){var e;t(this,"init",(()=>{r({selector:".sf-modal__wrapper",handler:t=>{var e;((null==t?void 0:t.target)===this.modal||null!=t&&null!==(e=t.target)&&void 0!==e&&e.closest(".sf-modal__close"))&&this.close(t)}})})),t(this,"setSizes",((t="")=>{this.resetSize(),this.sizes=t,t.split(" ").forEach((t=>{var e,i;null===(e=this.modalContent)||void 0===e||null===(i=e.classList)||void 0===i||i.add(t)}))})),t(this,"setWidth",(t=>{this.modalContent.style.width=t})),t(this,"resetSize",(()=>{this.sizes&&(this.sizes.split(" ").forEach((t=>{var e,i;null===(e=this.modalContent)||void 0===e||null===(i=e.classList)||void 0===i||i.remove(t)})),this.sizes="")})),t(this,"appendChild",(t=>{var e;null==this||null===(e=this.modalContent)||void 0===e||e.appendChild(t),this.children=t})),t(this,"removeChild",(()=>{var t;null==this||null===(t=this.children)||void 0===t||t.remove()})),t(this,"open",(()=>{this.scrollLock.enable(),document.body.appendChild(this.modal),setTimeout((()=>this.modal.classList.add("opacity-100"))),window.addEventListener("keydown",this.handleKeyDown)})),t(this,"close",(t=>{null==t||t.preventDefault(),this.modal.classList.remove("opacity-100"),this.scrollLock.disable(),window.removeEventListener("keydown",this.handleKeyDown),setTimeout((()=>{this.modal.remove(),this.removeChild(),this.resetSize(),this.modalContent.style.removeProperty("width")}),this.transitionDuration)})),t(this,"handleKeyDown",(t=>{27===t.keyCode&&this.close()})),this.modal=a(s,null),this.modalContent=null===(e=this.modal)||void 0===e?void 0:e.firstChild,this.transitionDuration=200,this.init(),this.scrollLock=new l(document.body)}};i(643),i(6295).default;function c(t={},e=document){return Object.entries(t).reduce(((t,[i,n])=>{var o;const s="string"==typeof n,r=s?"querySelector":"querySelectorAll",l=s?n:n[0];return t[i]=null==e||null===(o=e[r])||void 0===o?void 0:o.call(e,l),!s&&t[i]&&(t[i]=[...t[i]]),t}),{})}window.__getSectionInstanceByType=t=>window.Shopify.theme.sections.instances.find((e=>e.type===t));document.querySelector("#scroll-to-top-target");var u=i(6295).default;var h=class{constructor(e,i){t(this,"selectors",{openBtn:"[data-open-sizeguide]"}),t(this,"init",(t=>{const e=document.querySelector(".product-template");this.domNodes.openBtn.classList.remove("hidden");const i=u("div",null);i.classList.add("rte","prose"),i.innerHTML=t,this.modal=new d,r({selector:this.selectors.openBtn,handler:e=>{e.preventDefault(),t&&(this.modal.appendChild(i),this.modal.setSizes("w-max p-8 bg-white"),this.modal.open())}}),e.classList.add("size-chart-initialized")})),this.domNodes=c(this.selectors),this.init(i)}};function p(t,e){"string"==typeof t&&(t=t.replace(".",""));let i="";const n=/\{\{\s*(\w+)\s*\}\}/,o=e||"${{amount}}";function s(t,e=2,i=",",n="."){if(isNaN(t)||null==t)return 0;const o=(t=(t/100).toFixed(e)).split(".");return o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,`$1${i}`)+(o[1]?n+o[1]:"")}switch(o.match(n)[1]){case"amount":i=s(t,2);break;case"amount_no_decimals":i=s(t,0);break;case"amount_with_comma_separator":i=s(t,2,".",",");break;case"amount_no_decimals_with_comma_separator":i=s(t,0,".",",")}return o.replace(n,i)}var f=i(6295).default;class m{constructor(){t(this,"appURL",window.spratlyThemeSettings.foxkitAppURL?`https://${window.spratlyThemeSettings.foxkitAppURL}`:""),t(this,"shop",window.Shopify.shop),t(this,"page",window.spratlyThemeSettings.template),t(this,"foxKitSettings",{}),t(this,"exceptPlugins",["prePurchase","inCart"]),t(this,"selectors",{formCheckout:'form[action="/checkout"]',btnCheckout:'.sf__btn[name="checkout"]',bundleContainerOutside:"#fox-product-bundle-outside",bundleContainerInsideDesktop:".sf-prod-template__desktop #fox-product-bundle-inside",bundleContainerInsideMobile:".sf-prod-template__mobile #fox-product-bundle-inside"}),t(this,"cartSelectors",{cartDiscountsWrapper:"[data-discounts-wrapper]",cartDiscounts:"[data-discounts]",cartDiscountsList:"[data-discounts-list]",subTotalPrice:"[data-cart-subtotal-price]",cartItem:".scd-item",cartItemPrices:".scd-item__prices",cartItemOriginalPrice:"[data-cart-item-original-price]",cartItemFinalPrice:"[data-cart-item-final-price]"}),t(this,"newCart",null),t(this,"lastDiscount",void 0),t(this,"init",(async()=>{var t,e,i,o,s,l,a;let d;this.domNodes=c(this.selectors),await this.fetchData().then((t=>{d=t})).catch((t=>{})),null!==(t=d)&&void 0!==t&&t.ok&&null!==(e=d)&&void 0!==e&&e.payload&&(await function(t,e=document.body){return new Promise(((i,n)=>{const o=e.ownerDocument,s=o.querySelector(`link[href="${t}"]`);if(s)return s.dataset.loaded?i(!0):void s.addEventListener("load",(()=>{s.dataset.loaded=!0,i(!0)}));const r=o.createElement("link");r.rel="stylesheet",r.href=t,r.addEventListener("load",(()=>{r.dataset.loaded=!0,i(!0)})),r.onerror=n,e.appendChild(r)}))}(window.themeStyleURLs.foxkitApp.url),this.foxKitSettings=d.payload,this.exceptPlugins.map((t=>{var e,i,o;n(null===(e=window)||void 0===e||null===(i=e.themeScriptURLs)||void 0===i||null===(o=i[t])||void 0===o?void 0:o.url).then((()=>{var e;return null==this||null===(e=this[`init${t.capitalize()}`])||void 0===e?void 0:e.call(this)}))})),Object.entries(this.foxKitSettings).forEach((async([t,e])=>{if(!this.exceptPlugins.includes(t)&&null!=e&&e.active){var i,o,s,r;var l,a,d;if(null===(i=window)||void 0===i||null===(o=i.themeScriptURLs)||void 0===o||null===(s=o[t])||void 0===s?void 0:s.url)await n(null===(l=window)||void 0===l||null===(a=l.themeScriptURLs)||void 0===a||null===(d=a[t])||void 0===d?void 0:d.url);null==this||null===(r=this[`init${t.capitalize()}`])||void 0===r||r.call(this)}})),r({selector:this.selectors.btnCheckout,handler:this.handleCheckout})),await this.renderNewCart(null===(i=window.spratlyTheme)||void 0===i||null===(o=i.Cart)||void 0===o?void 0:o.cart),this.updateCartTotal(),null===(s=window)||void 0===s||null===(l=s._ThemeEvent)||void 0===l||null===(a=l.subscribe)||void 0===a||a.call(l,"ON_CART_UPDATE",(async t=>{t&&this.renderNewCart(t)}))})),t(this,"fetchData",(()=>new Promise(((t,e)=>{const i=document.body.dataset.productId;let n=`${this.appURL}/api/public/?shop=${this.shop}`;i&&(n+=`&productId=${i}`),fetch(n).then((t=>t.json())).then(t).catch(e)})))),t(this,"initBundle",(()=>{var t;const e=null===(t=window.spratlyTheme)||void 0===t?void 0:t.ProductBundle;if(e){const{bundle:t}=this.foxKitSettings,{bundleContainerOutside:i,bundleContainerInsideMobile:n,bundleContainerInsideDesktop:o}=this.domNodes;"inside"===t.position?this.Bundle={desktop:new e(o,t),mobile:new e(n,t)}:this.Bundle=new e(i,t)}})),t(this,"initPopup",(()=>{const{popup:t}=this.foxKitSettings;this.Popup=new window.FoxKit.Popup(t)})),t(this,"initLuckyWheel",(()=>{const{luckyWheel:t}=this.foxKitSettings;this.LuckyWheel=new window.FoxKit.LuckyWheel(t)})),t(this,"initSizeChart",(()=>{const{sizeChart:t}=this.foxKitSettings;this.SizeChart=new h(this.sizeChartEnabled,null==t?void 0:t.chart_content)})),t(this,"initSalesNotification",(()=>{const{salesNotification:t}=this.foxKitSettings,e={title:t.title,time:t.time,hideOnMobile:!t.show_on_mobile,duration:parseInt(t.display_time)||5,delay:t.delay_time||"10-15",showAfter:t.delay_show||5,maximum:parseInt(t.max_show),products:null==t?void 0:t.products,names:t.names.split(", "),locations:t.locations.split(", ")};this.SalesPop=new window.FoxKit.SalesNotifications(e)})),t(this,"initCountdown",(()=>{const{countdown:t}=this.foxKitSettings;this.Countdown=new window.spratlyTheme.ProductCountdown(t)})),t(this,"initStockCountdown",(()=>{})),t(this,"initPrePurchase",(()=>{const{prePurchase:t}=this.foxKitSettings;this.PrePurchase=new window.FoxKit.PrePurchase(t)})),t(this,"initCartGoal",(()=>{const{cartGoal:t}=this.foxKitSettings;this.CartGoal=new window.FoxKit.CartGoal(t)})),t(this,"initInCart",(()=>{this.InCart=new window.FoxKit.InCart})),t(this,"initQuantityDiscount",(()=>{const{quantityDiscount:t}=this.foxKitSettings;this.QuantityDiscount=new window.FoxKit.QuantityDiscount(t)})),t(this,"handleCheckout",(async t=>{var e,i;t.preventDefault();const n=this.prePareCart(null===(e=window.spratlyTheme)||void 0===e||null===(i=e.Cart)||void 0===i?void 0:i.cart);await fetch(`${this.appURL}/api/public/checkout?shop=${this.shop}`,{method:"POST",body:JSON.stringify(n)}).then((t=>t.json())).then((t=>{var e,i,n;null!=t&&null!==(e=t.payload)&&void 0!==e&&e.invoiceUrl?window.location.href=null==t||null===(i=t.payload)||void 0===i?void 0:i.invoiceUrl:this.domNodes.formCheckout?this.domNodes.formCheckout.submit():window.location.href=`https://${null===(n=window.Shopify)||void 0===n?void 0:n.shop}/checkout`})).catch((()=>{var t;return window.location.href=`https://${null===(t=window.Shopify)||void 0===t?void 0:t.shop}/checkout`}))})),t(this,"updateCartAttribute",(async t=>{var i,n;if(!t||null==t||!t.offer_id)return!1;const o=null===(i=window.spratlyTheme)||void 0===i||null===(n=i.Cart)||void 0===n?void 0:n.cart,{attributes:s}=o;let{_foxCartDiscounts:r}=s,l=[];if(r){r=JSON.parse(r);if(r.find((e=>JSON.parse(e).product_id===t.product_id)))return!1;l=[...r]}l.push(JSON.stringify(t)),await((t,i=e)=>fetch(t,i).then((function(t){if(!t.ok)throw t;return t.json()})))("/cart/update.js",{...JSON.parse(JSON.stringify(e)),method:"POST",body:JSON.stringify({attributes:{_foxCartDiscounts:[...l]}})})})),t(this,"getNewCart",(async t=>{const e=this.prePareCart(t);if(!e)return!1;const i=`${this.appURL}/api/public/cart/?shop=${this.shop}`;return fetch(i,{method:"POST",body:JSON.stringify(e)}).then((t=>null==t?void 0:t.json()))})),t(this,"prePareCart",(t=>{var e,i;if(!t||null==t||null===(e=t.items)||void 0===e||!e.length)return!1;const{attributes:n}=t;let{_foxCartDiscounts:o=[]}=n,s={...t};null!==(i=o)&&void 0!==i&&i.length&&(o=JSON.parse(o).map((t=>JSON.parse(t))));const{cartGoal:r}=this.foxKitSettings;return null!=r&&r.active&&100*r.goal_amount-t.total_price<=0&&o.push({offer_id:r._id,plugin:"CartGoal"}),s.attributes={...n,_foxCartDiscounts:[...o]},s})),t(this,"renderNewCart",(async t=>{this.cartNodes=c(this.cartSelectors),await this.getNewCart(t).then((t=>{this.newCart=null==t?void 0:t.payload})).catch((t=>{})),this.updateCartTotal()})),t(this,"updateCartTotal",(()=>{var t,e,i,n,o;if(!this.newCart)return;const{_foxCartPrices:s}=this.newCart;if(null===(t=this.lastDiscount)||void 0===t||t.remove(),!s)return!1;const r=(null==s?void 0:s.total_price)*Number((null===(e=window.Shopify)||void 0===e||null===(i=e.currency)||void 0===i?void 0:i.rate)||1),l=this.cartDiscountTitle(null==s?void 0:s.total_discounted_amount);null===(n=this.cartNodes.cartDiscounts)||void 0===n||n.appendChild(l),setTimeout((()=>{var t,e;return this.cartNodes.subTotalPrice.innerHTML=p(r,null===(t=window)||void 0===t||null===(e=t.spratlyThemeSettings)||void 0===e?void 0:e.money_format)}),200),null===(o=this.cartNodes.cartDiscountsWrapper)||void 0===o||o.classList.remove("hidden"),this.lastDiscount=l})),t(this,"cartDiscountTitle",(t=>{var e,i,n,o;const s=f("ul",null);s.classList.add("scd-cart__discounts"),t=p(t*Number((null===(e=window.Shopify)||void 0===e||null===(i=e.currency)||void 0===i?void 0:i.rate)||1),null===(n=window)||void 0===n||null===(o=n.spratlyThemeSettings)||void 0===o?void 0:o.money_format);const r=f("li",null);return r.innerHTML=`<svg aria-hidden="true" width="20" height="20" focusable="false" role="presentation" viewBox="0 0 12 13"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 .5h3a2 2 0 0 1 2 2v3a.995.995 0 0 1-.293.707l-6 6a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l6-6A.995.995 0 0 1 7 .5zm2 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" fill="currentColor"></path></svg> SPECIAL OFFER (-${t})`,s.appendChild(r),s}));const{appURL:i,shop:o}=this;i&&o&&this.init()}}window.FoxKit=new m}()}();