!function(){var e={216:function(){const e=document.querySelector(".burger-menu"),t=document.querySelector(".burger-menu__list"),i=document.querySelectorAll(".burger-menu__list a");let n=!1;e.onclick=e=>{if(n){for(item of i)item.style.cssText="height: 0;\n      opacity: 0;\n      padding: 0;\n      border-top: none;";n=!1}else{for(item of(console.log(i),i))item.style.cssText="height: initial;\n    opacity: 1;\n    padding: 12px 30px;\n    border-top: 1px solid #D7D7D7;";n=!0}},t.onclick=e=>{for(item of i)item.style.cssText="height: 0;\n      opacity: 0;\n      padding: 0;\n      border-top: none;";e.stopPropagation(),n=!1}},553:function(){const e=document.querySelector(".catalog"),t=document.querySelector(".page_blackoutAfterCatalog"),i=document.querySelectorAll(".catalog div");let n=!1;const s=(e,i)=>{n||(t.style.filter="brightness(0.5)",i.style.visibility="visible",n=!0),document.body.onclick=e=>{e.target.closest(".dropdowns_wrapper")||(t.style.filter="none",i.style.visibility="hidden",n=!1)}};e.onclick=e=>{if(e.stopPropagation(),!n&&e.target.closest(".catalog"))for($category of i){const e=$category.getAttribute("id");if(e){const t=e.slice(9),i=document.querySelector(`.${t}__dropdown_wrapper`);return void s(0,i)}}}},271:function(){const e=document.querySelectorAll(".accordion__item");function t(){e.forEach((e=>e!=this?e.classList.remove("accordion__item--active"):null)),"accordion__item--active"!=this.classList&&this.classList.toggle("accordion__item--active")}e.forEach((e=>e.addEventListener("click",t)))},753:function(){function e(e){e.stopPropagation();const t=e.target.previousElementSibling.innerText;navigator.clipboard.writeText(t),e.target.remove()}document.querySelector(".chapter_copyEmail").addEventListener("click",(function(t){let i=document.getElementById("copyEmailButton");i||(t.currentTarget.insertAdjacentHTML("beforeend",'<button type="button" id="copyEmailButton">Скопировать</button>'),i=document.getElementById("copyEmailButton"),i.addEventListener("click",e))}))},630:function(){"use strict";const e=document.getElementsByClassName("chapter_telephone")[0],t=document.getElementsByClassName("page")[0];new class{constructor(e,t,i,n,s){this.sensitivity=e,this.interval=t,this.$elem=i,this.over=n,this.out=s,this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.trackSpeed=this.trackSpeed.bind(this),i.addEventListener("mouseover",this.onMouseOver),i.addEventListener("mouseout",this.onMouseOut)}onMouseOver(t){this.isOverElement||(this.isOverElement=!0,this.prevX=t.pageX,this.prevY=t.pageY,this.prevTime=Date.now(),e.addEventListener("mousemove",this.onMouseMove),this.checkSpeedInterval=setInterval(this.trackSpeed,this.interval),this.over)}onMouseOut(t){t.relatedTarget&&e.contains(t.relatedTarget)||(this.isOverElement=!1,this.$elem.removeEventListener("mousemove",this.onMouseMove),clearInterval(this.checkSpeedInterval),this.isHover&&(this.out.call(this.$elem,t),this.isHover=!1)),this.out}onMouseMove(e){this.lastX=e.pageX,this.lastY=e.pageY,this.lastTime=Date.now()}trackSpeed(){let e;e=this.lastTime&&this.lastTime!=this.prevTime?Math.sqrt(Math.pow(this.prevX-this.lastX,2)+Math.pow(this.prevY-this.lastY,2))/(this.lastTime-this.prevTime):0,e<this.sensitivity?(clearInterval(this.checkSpeedInterval),this.isHover=!0,this.over.call(this.$elem)):(this.prevX=this.lastX,this.prevY=this.lastY,this.prevTime=this.lastTime)}}(.1,100,e,(()=>{e.lastElementChild.style.zIndex=2,setTimeout(e.lastElementChild.style.opacity=1,10),t.style.filter="brightness(0.5)"}),(()=>{e.lastElementChild.style.opacity=0,setTimeout(e.lastElementChild.style.zIndex=-1,10),t.style.filter="none"})),document.getElementById("btn_close_block").onclick=function(){e.lastElementChild.style.opacity=0,setTimeout(e.lastElementChild.style.zIndex=-1,10),t.style.filter="none"}},192:function(){new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpointsBase:"container"})},975:function(){const e=document.getElementsByClassName("form__category")[0],t=document.getElementsByClassName("category__dropdown")[0],i=document.getElementsByClassName("category__checked")[0],n=document.getElementById("searchLine");t.onclick=t=>{let n=t.target.closest("li");n&&(t=>{let n=document.querySelector(".highlightGreen");n&&n.classList.remove("highlightGreen"),t.classList.add("highlightGreen"),i.innerText=`${t.textContent}`;const s=`${e.firstElementChild.clientWidth+20}px`;e.style.width=s})(n)},window.onunload=()=>n.value=""},60:function(){function e(){const e=document.getElementById("supplierPortal__image");"images/upper-menu/supplier-portal.svg"===e.getAttribute("src")?e.setAttribute("src","images/upper-menu/supplier-portal-hover.svg"):e.setAttribute("src","images/upper-menu/supplier-portal.svg")}const t=document.getElementsByClassName("upperMenu__supplierPortal")[0];t.addEventListener("mouseenter",e),t.addEventListener("mouseleave",e)}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,i),o.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";i(753),i(630),i(60),i(975),i(553),i(192),i(216),i(271)}()}();
//# sourceMappingURL=scripts.85c586f32b715f38b342.js.map