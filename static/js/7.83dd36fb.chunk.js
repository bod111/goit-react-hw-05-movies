(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[7,8],{58:function(n,e,t){"use strict";t.d(e,"e",(function(){return s})),t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return d})),t.d(e,"c",(function(){return f})),t.d(e,"d",(function(){return m}));var r=t(62),a=t.n(r),c=t(64),o="https://api.themoviedb.org/3",i="2497cc3d1941bf2f5c8a3541a4d85ed3";function s(){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(a.a.mark((function n(){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/week?api_key=").concat(i));case 2:if(!(e=n.sent).ok){n.next=9;break}return n.next=6,e.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0="Error";case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0="Error";case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0="Error";case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0="Error";case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e?fetch("".concat(o,"/search/movie?&api_key=").concat(i,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")):"";case 2:if(!(t=n.sent).ok){n.next=9;break}return n.next=6,t.json();case 6:n.t0=n.sent,n.next=10;break;case 9:n.t0="Error";case 10:return n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},65:function(n,e,t){"use strict";t(0);var r,a=t(13),c=t(56),o=t(57).a.li(r||(r=Object(c.a)(["\n  background: white;\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),\n    0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n  margin-top: 1rem;\n  /* min-height: 3rem; */\n  padding: 10px 10px 10px 20px;\n  position: relative;\n  width: 230px;\n  .ImageGalleryItem-image {\n    width: 200px;\n    height: 300px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    margin-bottom: 10px;\n  }\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n  }\n"]))),i=t(3);e.a=function(n){var e=n.filmTrend,t=n.location,r=n.BASE_IMG;return Object(i.jsx)(i.Fragment,{children:null===e||void 0===e?void 0:e.map((function(n){return Object(i.jsx)(o,{children:Object(i.jsxs)(a.b,{to:{pathname:"/films/".concat(n.id),state:{from:t}},children:[r&&n.poster_path&&Object(i.jsx)("img",{src:"".concat(r,"/").concat(n.poster_path),alt:"",className:"ImageGalleryItem-image"}),Object(i.jsx)("p",{children:n.original_title})]},n.id)},n.id)}))})}},66:function(n,e,t){"use strict";t.r(e);t(0);var r,a=t(56),c=t(57).a.div(r||(r=Object(a.a)(["\n  .button {\n    padding: 3px 3px;\n    border-radius: 2px;\n    background-color: #3f51b5;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: inline-block;\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 15px;\n    line-height: 24px;\n    font-style: normal;\n    font-weight: 500;\n    min-width: 100px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(138, 105, 105, 0.14),\n      0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n  .button:hover,\n  .button:focus {\n    background-color: #303f9f;\n  }\n"]))),o=t(3);e.default=function(n){var e=n.onKeyPress,t=n.handler,r=n.text,a=n.spanStyles,i=n.btnStyles;return Object(o.jsx)(c,{children:Object(o.jsx)("button",{onClick:t,onKeyPress:e,type:"button",className:i,children:Object(o.jsx)("span",{className:a,children:r})})})}},73:function(n,e,t){"use strict";t.r(e);var r,a=t(59),c=t(0),o=t(1),i=t(70),s=t.n(i),u=t(19),p=t(58),l=t(65),d=t(66),b=t(56),f=t(57),h=t.p+"static/media/search.750f6c86.svg",m=f.a.div(r||(r=Object(b.a)(["\n  .SearchForm {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n    &__title {\n      margin-bottom: 40px;\n      font-style: normal;\n      font-weight: bold;\n      font-size: 34px;\n      line-height: 40px;\n      color: #474747;\n    }\n    &__label {\n      display: flex;\n      position: relative;\n    }\n  }\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url(",");\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n  .ImageGallery {\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 20px;\n    margin-bottom: 15px;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),h),x=t(3);e.default=function(){var n=Object(c.useState)(""),e=Object(a.a)(n,2),t=e[0],r=e[1],i=Object(c.useState)(""),b=Object(a.a)(i,2),f=b[0],h=b[1],g=Object(o.g)(),j=Object(o.f)(),v=Object(o.i)();Object(c.useEffect)((function(){var n=s.a.parse(g.search);n.query&&Object(p.d)(n.query).then(h).catch((function(n){return console.log(n.message)}))}),[g.search]),Object(c.useEffect)((function(){var n=function(n){"Enter"===n.code&&(Object(p.d)(t).then(h).catch((function(n){return console.log(n.message)})),j.push("".concat(v.url,"?query=").concat(t)))};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[j,v.url,t]);var y=function(n){var e;n.preventDefault(),Object(p.d)(t).then(h).catch((function(n){return console.log(n.message)})),j.push("".concat(v.url,"?query=").concat(t)),"Error"!==f&&0!==(null===(e=f.results)||void 0===e?void 0:e.length)||setTimeout((function(){return u.b.error("Not found!")}),0)};return Object(x.jsxs)(m,{children:[Object(x.jsx)("h3",{className:"SearchForm__title",children:"Movies"}),Object(x.jsxs)("label",{className:"SearchForm__label",children:[Object(x.jsx)("input",{value:t,onChange:function(n){r(n.currentTarget.value.toLowerCase())},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Movies"}),Object(x.jsx)(d.default,{onKeyPress:y,handler:y,spanStyles:"SearchForm-button-label",btnStyles:"SearchForm-button"})]}),Object(x.jsx)("ul",{className:"ImageGallery",children:Object(x.jsx)(l.a,{filmTrend:f.results,BASE_IMG:"https://image.tmdb.org/t/p/w500",location:g})})]})}}}]);
//# sourceMappingURL=7.83dd36fb.chunk.js.map