(() => {
var exports = {};
exports.id = 818;
exports.ids = [818];
exports.modules = {

/***/ 4420:
/***/ ((module) => {

// Exports
module.exports = {
	"categoryName": "CategorySelect_categoryName__5ABsX",
	"slidein": "CategorySelect_slidein__P9q3p",
	"fadein": "CategorySelect_fadein__Rnz1p"
};


/***/ }),

/***/ 4787:
/***/ ((module) => {

// Exports
module.exports = {
	"picturesList": "PictureGallery_picturesList__ODJPo",
	"fadein": "PictureGallery_fadein__jouf7",
	"pictureItem": "PictureGallery_pictureItem__5pBzs",
	"picture": "PictureGallery_picture__f4CRD",
	"slidein": "PictureGallery_slidein__C4_Uy"
};


/***/ }),

/***/ 981:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery": "galerie_gallery__xxIIl",
	"slidein": "galerie_slidein__Zz_kB",
	"categoriesList": "galerie_categoriesList__3En_l",
	"allCategories": "galerie_allCategories__OgXZR",
	"galleriesList": "galerie_galleriesList__PlYRM",
	"fadein": "galerie_fadein__DcbV8"
};


/***/ }),

/***/ 470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Gallery),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CategorySelect/CategorySelect.module.scss
var CategorySelect_module = __webpack_require__(4420);
var CategorySelect_module_default = /*#__PURE__*/__webpack_require__.n(CategorySelect_module);
;// CONCATENATED MODULE: ./components/CategorySelect/CategorySelect.js



function CategorySelect({ categoryName , categoryId , handlerCategory  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
        onClick: handlerCategory,
        id: categoryId,
        className: (CategorySelect_module_default()).categoryName,
        children: categoryName
    }));
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/PictureGallery/PictureGallery.module.scss
var PictureGallery_module = __webpack_require__(4787);
var PictureGallery_module_default = /*#__PURE__*/__webpack_require__.n(PictureGallery_module);
// EXTERNAL MODULE: external "simple-react-lightbox"
var external_simple_react_lightbox_ = __webpack_require__(3732);
;// CONCATENATED MODULE: ./components/PictureGallery/PictureGallery.js





function PictureGallery({ gallery  }) {
    const options = {
        buttons: {
            showDownloadButton: false
        },
        caption: {
            showCaption: false
        },
        progressBar: {
            backgroundColor: '#47555E'
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_simple_react_lightbox_.SRLWrapper, {
        options: options,
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (PictureGallery_module_default()).picturesList,
            children: gallery.data.pictures.map((picture)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: (PictureGallery_module_default()).pictureItem,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: picture,
                        "data-lightbox": "models",
                        "data-title": "Caption1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (PictureGallery_module_default()).picture,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: picture,
                                alt: gallery.file + '_' + gallery.data.pictures.indexOf(picture),
                                width: "1920",
                                height: "1280"
                            })
                        })
                    })
                }, gallery.data.pictures.indexOf(picture)));
            })
        })
    }));
};

// EXTERNAL MODULE: ./styles/galerie.module.scss
var galerie_module = __webpack_require__(981);
var galerie_module_default = /*#__PURE__*/__webpack_require__.n(galerie_module);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/galerie.js








function Gallery(props) {
    const { 0: selectedGallery1 , 1: setSelectedGallery  } = (0,external_react_.useState)([]);
    const { 0: displayCancelFilter , 1: setDisplayCancelFilter  } = (0,external_react_.useState)(false);
    const categoriesListRef = (0,external_react_.useRef)();
    const cancelBtnRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        setSelectedGallery(props.galleries);
    }, [
        props.galleries
    ]);
    const handlerCategory = (e)=>{
        categoriesListRef.current.childNodes.forEach((item)=>{
            console.dir(item);
            item.childNodes[0].style.background = '#E8E9E9';
            item.childNodes[0].style.color = '#47555E';
        });
        e.target.style.background = '#47555E';
        e.target.style.color = '#E8E9E9';
        setDisplayCancelFilter(true);
        props.galleries.forEach((gallery)=>{
            if (gallery.file === e.target.id) {
                setSelectedGallery([]);
                setSelectedGallery((selectedGallery)=>[
                        ...selectedGallery,
                        gallery
                    ]
                );
            }
        });
    };
    const handlerAllCategories = ()=>{
        categoriesListRef.current.childNodes.forEach((item)=>{
            item.childNodes[0].style.background = '#E8E9E9';
            item.childNodes[0].style.color = '#47555E';
        });
        setDisplayCancelFilter(false);
        setSelectedGallery(props.galleries);
    };
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
                        children: "GALERIE | Charles Cantin - Photographe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Photographe professionnel, d\xe9couvrez ma galerie photos de portrait, d'\xe9v\xe9nement tels que les bapt\xeames ou mariages, en couple ou en famille, pendant votre grossesse ou avec votre b\xe9b\xe9."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "GALERIE | Charles Cantin - Photographe"
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
                        content: "Photographe professionnel, d\xe9couvrez ma galerie photos de portrait, d'\xe9v\xe9nement tels que les bapt\xeames ou mariages, en couple ou en famille, pendant votre grossesse ou avec votre b\xe9b\xe9."
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
                        content: "GALERIE | Charles Cantin - Photographe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: "Photographe professionnel, d\xe9couvrez ma galerie photos de portrait, d'\xe9v\xe9nement tels que les bapt\xeames ou mariages, en couple ou en famille, pendant votre grossesse ou avec votre b\xe9b\xe9."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image:src",
                        content: "https://c-cantin-photo.netlify.app/resources/homeOg.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (galerie_module_default()).gallery,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: selectedGallery1.length > 1 || selectedGallery1[0] === undefined ? 'GALERIE' : 'GALERIE - ' + selectedGallery1[0].data.category
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        ref: categoriesListRef,
                        className: (galerie_module_default()).categoriesList,
                        children: props.galleries.map((gallery)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CategorySelect, {
                                    handlerCategory: handlerCategory,
                                    categoryId: gallery.file,
                                    categoryName: gallery.data.category
                                })
                            }, gallery.file)
                        )
                    }),
                    displayCancelFilter && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        ref: cancelBtnRef,
                        onClick: ()=>handlerAllCategories()
                        ,
                        className: (galerie_module_default()).allCategories,
                        children: "Annuler le filtre"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (galerie_module_default()).galleriesList,
                        children: selectedGallery1.map((gallery)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(PictureGallery, {
                                    gallery: gallery
                                })
                            }, gallery.file));
                        })
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    const files = external_fs_default().readdirSync('data/galleries/', 'utf-8');
    const galleries = files.map((file)=>({
            file: file.split('.')[0],
            data: external_gray_matter_default()(external_fs_default().readFileSync(`./data/galleries/${file}`, 'utf-8')).data
        })
    );
    return {
        props: {
            galleries
        }
    };
}


/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

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

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

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

/***/ 3732:
/***/ ((module) => {

"use strict";
module.exports = require("simple-react-lightbox");

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
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(470)));
module.exports = __webpack_exports__;

})();