!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var r,i,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function j(e){return c=e,u=setTimeout(T,t),s?y(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function T(){var e=p();if(O(e))return h(e);u=setTimeout(T,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function h(e){return u=void 0,m&&r?y(e):(r=i=void 0,f)}function w(){var e=p(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return j(l);if(d)return u=setTimeout(T,t),y(l)}return void 0===u&&(u=setTimeout(T,t)),f}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},w.flush=function(){return void 0===u?f:h(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var j="feedback-form-state",O={form:document.querySelector(".feedback-form"),formEmail:document.querySelector('[name="email"]'),formMessage:document.querySelector('[name="message"]')},T={};O.form.addEventListener("input",(function(e){T[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(T))})),O.form.addEventListener("submit",e(t)((function(e){e.preventDefault(),O.formEmail.value&&O.formMessage.value?(console.log(JSON.parse(localStorage["feedback-form-state"])),e.currentTarget.reset(),localStorage.removeItem(j)):alert("Please, fill all fields. Thanks!")}),500)),function(e){var t=localStorage.getItem(j),n=JSON.parse(t);if(!t)return;O.formEmail.value=n.email||"",O.formMessage.value=n.message||""}()}();
//# sourceMappingURL=03-feedback.60f7ec16.js.map