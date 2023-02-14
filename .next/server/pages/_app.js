(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2810:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__Dhw_9",
	"copyright": "Footer_copyright__lw16R",
	"slidein": "Footer_slidein__9FuWj",
	"fadein": "Footer_fadein__IECa4"
};


/***/ }),

/***/ 1339:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar___JEvD",
	"logoNav": "Navbar_logoNav__4Y32u",
	"menu": "Navbar_menu__w7Wyh",
	"menuItem": "Navbar_menuItem__Xc42t",
	"social": "Navbar_social__iV7pK",
	"socialItem": "Navbar_socialItem__ElHX4",
	"miniMenuBtn": "Navbar_miniMenuBtn__UINwJ",
	"closeMiniMenu": "Navbar_closeMiniMenu__R_9dD",
	"slidein": "Navbar_slidein__l6RZb",
	"fadein": "Navbar_fadein__FWQom"
};


/***/ }),

/***/ 4485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(2810);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/Footer.js



function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (Footer_module_default()).copyright,
            children: "\xa9 2022 Charles Cantin | Cr\xe9\xe9 par Mathieu Bouthors"
        })
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Navbar/Navbar.module.scss
var Navbar_module = __webpack_require__(1339);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/ActiveLink/ActiveLink.js




const ActiveLink = ({ router , href , children  })=>{
    (function prefectchPages() {
        if (false) {}
    })();
    const handleClick = (event)=>{
        event.preventDefault();
        router.push(href);
    };
    let pathnameTemp = '';
    let asPathTemp = '';
    if (router.pathname === '/prestations/[prestation]') {
        pathnameTemp = asPathTemp = '/prestations';
    } else {
        pathnameTemp = router.pathname;
        asPathTemp = router.asPath;
    }
    const isCurrentPath = pathnameTemp === href || asPathTemp === href;
    return(/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        onClick: handleClick,
        className: (Navbar_module_default()).menuItem,
        style: {
            borderBottom: isCurrentPath ? '1px solid #E8E9E9' : 'none',
            opacity: isCurrentPath ? 0.8 : 1
        },
        children: children
    }));
};
/* harmony default export */ const ActiveLink_ActiveLink = ((0,router_namespaceObject.withRouter)(ActiveLink));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/redux.js
var redux = __webpack_require__(9787);
;// CONCATENATED MODULE: ./components/Navbar/Navbar.js








function Navbar() {
    const { 0: miniMenu , 1: setMiniMenu  } = (0,external_react_.useState)(false);
    const menuRef = (0,external_react_.useRef)();
    const socialRef = (0,external_react_.useRef)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const displayMiniMenu = ()=>{
        setMiniMenu(true);
        menuRef.current.style.left = 0;
        menuRef.current.style.transition = 'left 500ms linear';
        socialRef.current.style.left = 0;
        socialRef.current.style.transition = 'left 500ms linear';
    };
    const hideMiniMenu = (e)=>{
        setMiniMenu(false);
        menuRef.current.style.left = '-100vw';
        socialRef.current.style.left = '-100vw';
        if (e !== undefined) {
            if (e.target.innerText === 'CONTACT') {
                dispatch((0,redux/* updatePresta */.j)(''));
            }
        }
        if (document.body.style.overflow === 'hidden' && e.target.id !== 'closeMiniMenu') {
            document.body.style.overflow = 'auto';
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: (Navbar_module_default()).navbar,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: (Navbar_module_default()).logoNav,
                    onClick: (e)=>hideMiniMenu(e)
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/resources/LogoNavbar.png",
                        alt: "logo",
                        width: "833",
                        height: "452"
                    })
                })
            }),
            !miniMenu ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                onClick: (e)=>displayMiniMenu(e)
                ,
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                fill: "currentColor",
                className: (Navbar_module_default()).miniMenuBtn,
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                })
            }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                onClick: (e)=>hideMiniMenu(e)
                ,
                id: "closeMiniMenu",
                xmlns: "http://www.w3.org/2000/svg",
                width: "48",
                height: "48",
                fill: "currentColor",
                className: (Navbar_module_default()).closeMiniMenu,
                viewBox: "0 0 16 16",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: menuRef,
                className: (Navbar_module_default()).menu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink_ActiveLink, {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: (e)=>hideMiniMenu(e)
                            ,
                            children: "ACCUEIL"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink_ActiveLink, {
                        href: "/galerie",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: (e)=>hideMiniMenu(e)
                            ,
                            children: "GALERIE"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink_ActiveLink, {
                        href: "/prestations",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: (e)=>hideMiniMenu(e)
                            ,
                            children: "PRESTATIONS"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ActiveLink_ActiveLink, {
                        href: "/contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: (e)=>hideMiniMenu(e)
                            ,
                            children: "CONTACT"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: socialRef,
                className: (Navbar_module_default()).social,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        onClick: ()=>hideMiniMenu()
                        ,
                        href: "https://www.facebook.com/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "32",
                            height: "32",
                            fill: "currentColor",
                            className: (Navbar_module_default()).socialItem,
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        onClick: ()=>hideMiniMenu()
                        ,
                        href: "https://www.instagram.com/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "32",
                            height: "32",
                            fill: "currentColor",
                            className: (Navbar_module_default()).socialItem,
                            viewBox: "0 0 16 16",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                            })
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/Container/Container.js




function Container(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            props.children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};

// EXTERNAL MODULE: external "simple-react-lightbox"
var external_simple_react_lightbox_ = __webpack_require__(3732);
var external_simple_react_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_simple_react_lightbox_);
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: redux/* store */.h,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_simple_react_lightbox_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3732:
/***/ ((module) => {

"use strict";
module.exports = require("simple-react-lightbox");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,787], () => (__webpack_exec__(4485)));
module.exports = __webpack_exports__;

})();