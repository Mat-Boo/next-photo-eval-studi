(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 8220:
/***/ ((module) => {

// Exports
module.exports = {
	"prestaCard": "PrestaCard_prestaCard__lzbq6",
	"picture": "PrestaCard_picture__j5xfZ",
	"prestaInfos": "PrestaCard_prestaInfos__Qxzkj",
	"titleFare": "PrestaCard_titleFare___FZSC",
	"title": "PrestaCard_title__XZVzo",
	"fare": "PrestaCard_fare__KRKz9",
	"content": "PrestaCard_content__fQQZf",
	"slidein": "PrestaCard_slidein__G4xZj",
	"fadein": "PrestaCard_fadein__IEnnj"
};


/***/ }),

/***/ 3685:
/***/ ((module) => {

// Exports
module.exports = {
	"presta": "prestations_presta__zL7fk",
	"slidein": "prestations_slidein__J8Upw",
	"prestaList": "prestations_prestaList__Bqohh",
	"fadein": "prestations_fadein__ANwuN"
};


/***/ }),

/***/ 6760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Prestations),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/PrestaCard/PrestaCard.module.scss
var PrestaCard_module = __webpack_require__(8220);
var PrestaCard_module_default = /*#__PURE__*/__webpack_require__.n(PrestaCard_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/PrestaCard/PrestaCard.js




function PrestaCard({ prestaPicture , prestaTitle , prestaContent , prestaFare  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PrestaCard_module_default()).prestaCard,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (PrestaCard_module_default()).picture,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: prestaPicture,
                    alt: prestaTitle + 'Picture',
                    width: "1920",
                    height: "1280"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PrestaCard_module_default()).prestaInfos,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (PrestaCard_module_default()).titleFare,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (PrestaCard_module_default()).title,
                                children: prestaTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (PrestaCard_module_default()).fare,
                                children: prestaFare + (isNaN(prestaFare) ? '' : ' €')
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (PrestaCard_module_default()).content,
                        children: prestaContent
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./styles/prestations/prestations.module.scss
var prestations_module = __webpack_require__(3685);
var prestations_module_default = /*#__PURE__*/__webpack_require__.n(prestations_module);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/prestations/index.js








function Prestations(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "PRESTATIONS | Charles Cantin - Photographe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Photographe professionnel, retrouvez mes diff\xe9rentes prestations et tarifs, mes offres sur mesures pour vos \xe9v\xe9nements, adapt\xe9es \xe0 vos besoins."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "PRESTATIONS | Charles Cantin - Photographe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: "https://c-cantin-photo.netlify.app/"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: "https://c-cantin-photo.netlify.app/resources/homeOg.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: "Photographe professionnel, retrouvez mes diff\xe9rentes prestations et tarifs, mes offres sur mesures pour vos \xe9v\xe9nements, adapt\xe9es \xe0 vos besoins."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Charles Cantin - Photographe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@ccantin_photo"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: "PRESTATIONS | Charles Cantin - Photographe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: "Photographe professionnel, retrouvez mes diff\xe9rentes prestations et tarifs, mes offres sur mesures pour vos \xe9v\xe9nements, adapt\xe9es \xe0 vos besoins."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image:src",
                        content: "https://c-cantin-photo.netlify.app/resources/homeOg.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (prestations_module_default()).presta,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "PRESTATIONS"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (prestations_module_default()).prestaList,
                        children: props.prestations.map((prestation)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: '/prestations/' + prestation.file,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(PrestaCard, {
                                            prestaPicture: prestation.data.picture,
                                            prestaTitle: prestation.data.title,
                                            prestaContent: prestation.data.subtitle,
                                            prestaFare: prestation.data.fare
                                        })
                                    })
                                })
                            }, prestation.file)
                        )
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    const files = external_fs_default().readdirSync('data/prestations/', "utf-8");
    const prestations = files.map((file)=>({
            file: file.split('.')[0],
            data: external_gray_matter_default()(external_fs_default().readFileSync(`./data/prestations/${file}`, 'utf-8')).data
        })
    );
    return {
        props: {
            prestations
        }
    };
}


/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(6760)));
module.exports = __webpack_exports__;

})();