(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 5001:
/***/ ((module) => {

// Exports
module.exports = {
	"ModalConfirmContact": "ModalConfirmContact_ModalConfirmContact__rz5Ua",
	"headModal": "ModalConfirmContact_headModal__XZG9A",
	"closeModal": "ModalConfirmContact_closeModal__X9aSU",
	"modalInfos": "ModalConfirmContact_modalInfos__SCQKg",
	"slidein": "ModalConfirmContact_slidein__vN2Xp",
	"fadein": "ModalConfirmContact_fadein__xi_yG"
};


/***/ }),

/***/ 5161:
/***/ ((module) => {

// Exports
module.exports = {
	"privacyPolicy": "PrivacyPolicy_privacyPolicy__nQYMJ",
	"fadein": "PrivacyPolicy_fadein__N1sdB",
	"policyHead": "PrivacyPolicy_policyHead__TS3Ad",
	"closePolicy": "PrivacyPolicy_closePolicy__Gdvig",
	"policyText": "PrivacyPolicy_policyText__AzHHG",
	"slidein": "PrivacyPolicy_slidein__wTOEU"
};


/***/ }),

/***/ 5337:
/***/ ((module) => {

// Exports
module.exports = {
	"contact": "contact_contact___aHw6",
	"slidein": "contact_slidein__rMb2Y",
	"contactForm": "contact_contactForm__OtYPM",
	"fadein": "contact_fadein__fTo9t",
	"contactInfos": "contact_contactInfos__GYcKu",
	"recaptcha": "contact_recaptcha__IimN1",
	"send": "contact_send__zvYHJ",
	"disabledBtn": "contact_disabledBtn__Skp1a",
	"textPolicy": "contact_textPolicy__KI22P",
	"policyLink": "contact_policyLink__K_UB6"
};


/***/ }),

/***/ 6677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Contact),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/contact.module.scss
var contact_module = __webpack_require__(5337);
var contact_module_default = /*#__PURE__*/__webpack_require__.n(contact_module);
// EXTERNAL MODULE: ./components/PrivacyPolicy/PrivacyPolicy.module.scss
var PrivacyPolicy_module = __webpack_require__(5161);
var PrivacyPolicy_module_default = /*#__PURE__*/__webpack_require__.n(PrivacyPolicy_module);
;// CONCATENATED MODULE: ./components/PrivacyPolicy/PrivacyPolicy.js



function PrivacyPolicy() {
    const policyRef = (0,external_react_.useRef)();
    const hidePolicy = ()=>{
        policyRef.current.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: policyRef,
        className: (PrivacyPolicy_module_default()).privacyPolicy,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PrivacyPolicy_module_default()).policyHead,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Politique de confidentialit\xe9 des donn\xe9es"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        onClick: ()=>hidePolicy()
                        ,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "48",
                        height: "48",
                        fill: "currentColor",
                        className: (PrivacyPolicy_module_default()).closePolicy,
                        viewBox: "0 0 16 16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PrivacyPolicy_module_default()).policyText,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Cette politique de confidentialit\xe9 a pour objectif de vous informer sur mes politiques et pratiques concernant la collecte, l'utilisation et la divulgation de toute information que vous soumettez via mon site internet ou fotostudio.io (plateforme de gestion sp\xe9cialis\xe9e pour les photographes professionnels)."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Responsabilit\xe9 pour le traitement des donn\xe9es"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Charles Cantin Photographe, Charles Cantin, 15 rue de l\xe0-bas, 62000 Arras, France, SIREN: 123 456 789, SIRET: 12345678900012,  est responsable du traitement de vos donn\xe9es collect\xe9es sur son site Internet ",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://c-cantin-photo.netlify.app/",
                                    children: "https://c-cantin-photo.netlify.app/"
                                })
                            }),
                            " (formulaire de contact, questionnaire et signature de contrat)."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Finalit\xe9s des donn\xe9es"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Les donn\xe9es que vous me communiquez ne seront utilis\xe9es que pour la bonne gestion de notre relation client-prestataire (organisation de votre s\xe9ance, remise de devis, facture, ...). Elles ne sont enregistr\xe9es que dans ce but."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Je collecte \xe9galement les informations que vous me fournissez dans vos emails ou de vive voix. Ces informations sont collect\xe9es pour m'aider \xe0 fournir un service de qualit\xe9 selon vos attentes."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: " Formulaire de contact"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Lorsque vous soumettez une demande de contact depuis mon site internet, je collecte vos donn\xe9es telles que votre nom et pr\xe9nom, votre adresse e-mail et les informations pr\xe9cis\xe9es dans le message."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Signature d'un contrat"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Il vous sera demand\xe9 de signer un contrat pour valider votre commande. Ce contrat reprendra vos donn\xe9es personnelles ainsi que les informations relatives \xe0 la prestation (date et lieu de la s\xe9ance, tarif, ...)."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Questionnaire"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Je vous soumets des questionnaires pour m'aider \xe0 mieux comprendre vos attentes et ainsi r\xe9aliser une prestation qui r\xe9pond \xe0 vos attentes. Vous n'\xeates nullement oblig\xe9 de r\xe9pondre \xe0 toutes les questions si vous souhaitez \xe9viter de fournir certaines informations."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Divulgation de vos donn\xe9es"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Charles Cantin Photographe ne vend pas, ne loue pas et ne partage pas vos informations avec des tiers. Aucune information que vous transmettez ne sera divulgu\xe9e."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Droit d'Acc\xe8s et r\xe9clamation"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "En tant que d\xe9tenteur des donn\xe9es, vous avez le droit d'acc\xe9der, de mettre \xe0 jour, de corriger des donn\xe9es inexactes ou de demander la suppression des donn\xe9es. Vous avez aussi le droit de faire une r\xe9clamation concernant toute question relative au traitement de ces donn\xe9es."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Vous pouvez exercer ces droits en envoyant un mail \xe0 charlescantint@exemple.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "S\xe9curit\xe9 de vos donn\xe9es"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Charles Cantin Photographe s'engage \xe0 prendre toutes les mesures en son pouvoir pour prot\xe9ger les donn\xe9es mises \xe0 sa disposition par ses clients. La solution fotostudio.io a \xe9t\xe9 choisie dans ce sens pour stocker vos donn\xe9es. Il s'agit d'une plateforme professionnelle et s\xe9curis\xe9e."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Dur\xe9e de conservation de vos donn\xe9es"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Je conserve vos informations aussi longtemps que n\xe9cessaire pour fournir les services que vous avez demand\xe9 ou pour d'autres raisons essentielles telles que le respect des obligations l\xe9gales, la r\xe9solution des litiges et l'application de mes politiques."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Statistiques et mesures d’audience"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Des cookies enregistrent votre navigation \xe0 des fins statistiques. Ils me permettent par exemple de mesurer la fr\xe9quentation de mon site et d'analyser votre parcours sur celui-ci avant de vous offrir une meilleure exp\xe9rience."
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "@emailjs/browser"
const browser_namespaceObject = require("@emailjs/browser");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_namespaceObject);
// EXTERNAL MODULE: ./components/ModalConfirmContact/ModalConfirmContact.module.scss
var ModalConfirmContact_module = __webpack_require__(5001);
var ModalConfirmContact_module_default = /*#__PURE__*/__webpack_require__.n(ModalConfirmContact_module);
;// CONCATENATED MODULE: ./components/ModalConfirmContact/ModalConfirmContact.js



function ModalConfirmContact() {
    const modalRef = (0,external_react_.useRef)();
    const hideModal = ()=>{
        modalRef.current.parentNode.parentNode.childNodes[1].style.pointerEvents = 'auto';
        modalRef.current.parentNode.parentNode.childNodes[1].style.opacity = '1';
        modalRef.current.style.display = 'none';
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: modalRef,
        className: (ModalConfirmContact_module_default()).ModalConfirmContact,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ModalConfirmContact_module_default()).headModal,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Confirmation"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        onClick: ()=>hideModal()
                        ,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "32",
                        height: "32",
                        fill: "currentColor",
                        className: (ModalConfirmContact_module_default()).closeModal,
                        viewBox: "0 0 16 16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ModalConfirmContact_module_default()).modalInfos,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Merci de m'avoir contact\xe9, je reviens vers vous au plus vite."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Cordialement,"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "Charles Cantin"
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react-google-recaptcha"
const external_react_google_recaptcha_namespaceObject = require("react-google-recaptcha");
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_namespaceObject);
;// CONCATENATED MODULE: ./pages/contact.js











function Contact(props) {
    const { 0: selectedPrestation , 1: setSelectedPrestation  } = (0,external_react_.useState)('');
    const reduxPresta = (0,external_react_redux_.useSelector)((state)=>state.presta
    );
    const { 0: verifiedCaptcha , 1: setVerifiedCaptcha  } = (0,external_react_.useState)(false);
    const recaptchaRef = (0,external_react_.useRef)();
    const policyRef = (0,external_react_.useRef)();
    const formRef = (0,external_react_.useRef)();
    const firstnameRef = (0,external_react_.useRef)();
    const modalRef = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        setSelectedPrestation(reduxPresta);
    }, [
        reduxPresta
    ]);
    const displayPolicy = ()=>{
        policyRef.current.childNodes[0].style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    const hidePolicy = (e)=>{
        if (e.target.id === 'contact') {
            policyRef.current.childNodes[0].style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    const sendEmail = (e)=>{
        e.preventDefault();
        browser_default().sendForm("service_cckovgi", "template_iopljzj", formRef.current, "3sul1bwAg788hRlkj").then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
        formRef.current.reset();
        modalRef.current.childNodes[0].style.display = 'block';
        formRef.current.style.pointerEvents = 'none';
        formRef.current.style.opacity = '0.3';
        recaptchaRef.current.reset();
        onReCAPTCHAChange();
        setSelectedPrestation('');
    };
    const onReCAPTCHAChange = (captchaCode)=>{
        setVerifiedCaptcha(!verifiedCaptcha);
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
                        children: "CONTACT | Charles Cantin - Photographe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Photographe professionnel, besoin de plus d'information, utilisez mon formulaire de contact et je r\xe9pondrais le plus rapidement possible."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "CONTACT | Charles Cantin - Photographe"
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
                        content: "Photographe professionnel, besoin de plus d'information, utilisez mon formulaire de contact et je r\xe9pondrais le plus rapidement possible."
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
                        content: "CONTACT | Charles Cantin - Photographe"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: "Photographe professionnel, besoin de plus d'information, utilisez mon formulaire de contact et je r\xe9pondrais le plus rapidement possible."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image:src",
                        content: "https://c-cantin-photo.netlify.app/resources/homeOg.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                id: "contact",
                className: (contact_module_default()).contact,
                onClick: (e)=>hidePolicy(e)
                ,
                onSubmit: sendEmail,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "CONTACTEZ MOI"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        ref: formRef,
                        id: "contact-form",
                        className: (contact_module_default()).contactForm,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (contact_module_default()).contactInfos,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: "- PARLEZ-MOI DE L' EXP\xc9RIENCE PHOTO DE VOS R\xcaVES -"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "L'exp\xe9rience de vos r\xeaves se pr\xe9pare et celle-ci doit \xeatre r\xe9serv\xe9e bien en avance, le plus t\xf4t possible.",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Pour une exp\xe9rience de qualit\xe9, il y a peu de cr\xe9neaux disponibles, contactez-moi rapidement pour prendre rendez-vous.",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "Merci"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "firstname",
                                children: [
                                    "Votre pr\xe9nom ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            color: 'red'
                                        },
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                ref: firstnameRef,
                                type: "text",
                                name: "firstname",
                                id: "firstname",
                                required: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "lastname",
                                children: [
                                    "Votre nom ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            color: 'red'
                                        },
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "lastname",
                                id: "lastname",
                                required: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "email",
                                children: [
                                    "Votre adresse email ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            color: 'red'
                                        },
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                name: "email",
                                id: "email",
                                required: true
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "presta",
                                children: [
                                    "Quelle prestation vous int\xe9resse ? ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            color: 'red'
                                        },
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                name: "presta",
                                id: "presta",
                                value: selectedPrestation,
                                onChange: (e)=>setSelectedPrestation(e.target.value)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "",
                                        children: "- Choisissez une option -"
                                    }),
                                    props.prestations.map((prestation)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                            value: prestation.file,
                                            children: prestation.data.title
                                        }, prestation.file)
                                    ),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "other",
                                        children: "Autre"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "message",
                                children: [
                                    "Parlez-moi de l'exp\xe9rience photo dont vous r\xeavez : ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            color: 'red'
                                        },
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                name: "message",
                                id: "message",
                                rows: "12",
                                required: true
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (contact_module_default()).recaptcha,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_google_recaptcha_default()), {
                                    sitekey: "6LfVZQUfAAAAANBPou330qcdZyKHaUe_L8RARiCH",
                                    onChange: onReCAPTCHAChange,
                                    ref: recaptchaRef
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                role: "submit",
                                disabled: !verifiedCaptcha,
                                className: !verifiedCaptcha ? (contact_module_default()).disabledBtn : null,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: (contact_module_default()).send,
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                                        })
                                    }),
                                    "Envoyer"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (contact_module_default()).textPolicy,
                                children: [
                                    "En soumettant ce formulaire, vous reconnaissez avoir pris connaissance de notre politique de confidentialit\xe9 (traitement et utilisation des donn\xe9es) : ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        onClick: ()=>displayPolicy()
                                        ,
                                        className: (contact_module_default()).policyLink,
                                        children: "Cliquez ici"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                ref: policyRef,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(PrivacyPolicy, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: modalRef,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ModalConfirmContact, {})
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
var __webpack_exports__ = (__webpack_exec__(6677));
module.exports = __webpack_exports__;

})();