!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var r,o,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,u=e.apply(i,n)}function T(e){return c=e,f=setTimeout(O,t),s?y(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function O(){var e=p();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,d&&r?y(e):(r=o=void 0,u)}function w(){var e=p(),n=j(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return T(l);if(m)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var T="feedback-form-state",j={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},O={email:"",message:""},h=JSON.parse(localStorage.getItem(T));h&&(j.email.value=h.email,j.message.value=h.message,O.email=j.email.value,O.message=j.message.value),j.email.addEventListener("input",e(t)((function(e){O.email=e.target.value,localStorage.setItem(T,JSON.stringify(O))})),500),j.message.addEventListener("input",e(t)((function(e){O.message=e.target.value,localStorage.setItem(T,JSON.stringify(O))})),500),j.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.email.value&&e.currentTarget.message.value&&(e.currentTarget.reset(),console.log(O),localStorage.removeItem(T),O.email="",O.message="")}))}();
//# sourceMappingURL=03-feedback.ec292220.js.map
