!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),a=document.querySelector(".form"),u=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');a.addEventListener("submit",(function(n){var o=function(n){var o,a;(o=n,a=t,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:o,delay:a}):n({position:o,delay:a})}),a)}))).then((function(o){o.position;var t=o.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(o){o.position;var t=o.delay;e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),t+=i};n.preventDefault();for(var t=u.value,i=c.value,a=l.value,d=1;d<=a;d+=1)o(d)}))}();
//# sourceMappingURL=03-promises.5518914b.js.map
