(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[9],{76:function(t,e,a){"use strict";a.r(e);var n,i=a(59),c=a(0),r=a(58),o=a(56),s=a(57).a.li(n||(n=Object(o.a)(["\n  .ImageGalleryItem-image {\n    width: 200px;\n    height: 300px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    margin-bottom: 10px;\n  }\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n  }\n  .additional-information-list__text {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n"]))),m=a(3);e.default=function(t){var e,a=t.filmsId,n=t.img,o=t.IMG_PLUG,l=Object(c.useState)(null),g=Object(i.a)(l,2),b=g[0],h=g[1];return Object(c.useEffect)((function(){Object(r.b)(a).then(h).catch((function(t){return console.log(t.message)}))}),[a]),b&&(null===(e=b.cast)||void 0===e?void 0:e.map((function(t){return Object(m.jsxs)(s,{children:[t.name,Object(m.jsxs)("p",{className:"additional-information-list__text",children:["Character: ",t.character]}),t.profile_path?Object(m.jsx)("img",{className:"ImageGalleryItem-image",src:"".concat(n,"/").concat(t.profile_path),alt:""}):Object(m.jsx)("img",{className:"ImageGalleryItem-image",src:"".concat(o),alt:""})]},t.cast_id)})))}}}]);
//# sourceMappingURL=9.cb72cab4.chunk.js.map