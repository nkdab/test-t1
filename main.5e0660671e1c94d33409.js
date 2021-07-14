(()=>{"use strict";var e,t={595:(e,t,n)=>{var r=n(294),a=n(935),o=n(391),i=n(156),c=n(375),l=350,u=n(893),s=["isSimulation","gravity","acceleration","ropeLength"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){var t=e.isSimulation,n=e.gravity,a=e.acceleration,o=e.ropeLength,h=(0,c.Z)(e,s),f=(0,r.useRef)(null),v=a.valueOf(),g=0,m=10;function O(e,r){var a=(r-m)/1e3;m=r,t&&(v+=a*g,g+=a*(-n/o*Math.sin(v)-1*o/6*g*g*Math.sign(g)));var i=v+Math.PI/2,c=Math.min(l,350),u=.45*c*Math.tanh(.5*o),s=.05*c*Math.tanh(3),p=175-u*Math.cos(i),h=u*Math.sin(i)+2;e.clearRect(0,0,l,350),e.beginPath(),e.arc(p,h,s,0,2*Math.PI),e.fill(),e.moveTo(0,2),e.lineTo(l,2),e.moveTo(175,0),e.lineTo(p,h),e.stroke()}return(0,r.useEffect)((function(){var e=f.current.getContext("2d");e.lineWidth=3;var t,n=0;return function r(){O(e,n+=10),t=window.requestAnimationFrame(r)}(),function(){window.cancelAnimationFrame(t)}}),[O]),(0,u.jsx)("canvas",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ref:f},h))}function f(){var e=(0,r.useState)(!1),t=(0,o.Z)(e,2),n=t[0],a=t[1],i=(0,r.useState)(9.8),c=(0,o.Z)(i,2),s=c[0],p=c[1],f=(0,r.useState)(1.5),v=(0,o.Z)(f,2),g=v[0],m=v[1],O=(0,r.useState)(-10),b=(0,o.Z)(O,2),j=b[0],y=b[1],d=function(e){y(parseInt(e.target.value))};return(0,u.jsxs)("div",{className:"main-container",children:[(0,u.jsx)(h,{width:l,height:350,isSimulation:n,gravity:s,acceleration:j,ropeLength:g}),(0,u.jsx)("button",{onClick:function(){return a(!n)},children:n?"Остановить":"Запустить"}),(0,u.jsxs)("label",{htmlFor:"gravity-range",children:["Гравитация:",(0,u.jsx)("input",{type:"range",value:s,onChange:function(e){e.preventDefault(),p(parseInt(e.target.value))},min:"0.5",max:"50"})]}),(0,u.jsxs)("label",{htmlFor:"length-range",children:["Длина подвеса:",(0,u.jsx)("input",{type:"range",value:g,onChange:function(e){e.preventDefault(),m(parseInt(e.target.value))},min:"0.5",max:"10"})]}),(0,u.jsxs)("label",{htmlFor:"gravity-range",children:["Начальное положение:",(0,u.jsx)("input",{type:"range",value:j,onChange:d,onInput:d,min:"-160",max:"160"})]})]})}console.log("production"),a.render((0,u.jsx)(f,{}),document.getElementById("app"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,a,o]=e[u],c=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(c=!1,o<i&&(i=o));c&&(e.splice(u--,1),t=a())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[i,c,l]=n,u=0;for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(l)var s=l(r);for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0;return r.O(s)},n=self.webpackChunktest_t1=self.webpackChunktest_t1||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[739],(()=>r(595)));a=r.O(a)})();