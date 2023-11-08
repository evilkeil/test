/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/transparentBkg/transparentBkg2x.png */ "./src/assets/images/transparentBkg/transparentBkg2x.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ------------------- */
/* Variables           */
/* ------------------- */
:root{
    --main-color:#000000;

    /* fonts */

    --ff-trade-gothic:trade-gothic-next-compressed, sans-serif;
    
    /* font weights */
    --fw-nav:400;

    /* hamburger menu vaiables */

    --bar-width:30px;
    --bar-height:1.17px;
    --bar-gap:11.24px;
    --foreground:#606060;
    --background:#FFFFFF;
    --animation-timing:350ms ease-in-out;
    --hamburger-height: calc(var(--bar-height) * 3  + var(--bar-gap) * 2);

    /* section background color */
    --section-bg: #F0F5F5;
    --clip: circle(63.7332% at 47.8454% 47.8454%);
}

/* fonts */


/* ------------------- */
/* CSS - Reset               */
/* ------------------- */

/* Box sizing */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
    margin: 0;
}

@media (max-width:350px){
    body{
       overflow: scroll;
    }
}

/* set up the body */
body {
    line-height: 1.5;
    min-height: 100dvh;
    max-width: 100vw;
    overflow-x: hidden;
    position: relative;
    color: var(--main-color);
    margin: 0;
    padding: 0; 
    display: flex;
    flex-direction: column;
    gap: 80px;
}
@media (max-width:600px){
    body{
        gap: 40px;
    }
}
/* make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* make form elements easier to work with */
input,
button,
textarea,
select {
    font: inherit;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* ------------------- */
/*       UTILITY CLASSES          */
/* ------------------- */
.main-grid{
    display: grid;
    grid-template-columns: 1fr 70% 1fr;
    justify-items: center;
}
@media (max-width:600px){
    .main-grid{
        display: grid;
        grid-template-columns: 1fr 85% 1fr;
    } 
}

.cursor-pointer:hover{
    cursor: pointer;
}

/* ------------------- */
/*       decor-images     */
/* ------------------- */

/* loop in company name section */

#about{
    position: relative;
    overflow: hidden;
}
.desktop-only{
    display: none;
}
@media (min-width:1200px){
    .loop-one-wrapper{
        width: 1543px;
        height: 702px;
    }

  }


/* ------------------- */
/*       Nav           */
/* ------------------- */
body{
    max-width: 100vw;
}
#nav{
    display: flex;
    background-color: white !important;
    justify-content: center;
    align-items: center;
    margin-left: 61.93px;
    margin-top: 34.38px;
    position: relative;
}

#navigation{
    box-shadow: none;
}
.primary-nav-svg{
    width: 8.8791px;
    height: 9.0395px; 
}

.logo{
    position: absolute;
    top:4px;
    left: 0;
    width: 196.19px;
    height: 57.6px;
}
.nav-links{
    text-decoration: none;
    color: var(--main-color);
    font-style: normal;
    font-family: var(--ff-trade-gothic);
    font-weight: var(--fw-nav);
    font-size: 20px;
    letter-spacing: 0.8px;
}

.primary-nav{
    display: flex;
    gap: 2.6875rem;
    height: 100%;
    padding: 0;
    background-color: white !important;
    box-shadow: none !important;
}

.primary-nav-item{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5938rem;
    height: 100%;
}

.primary-nav-item:hover{
    cursor: pointer;
}
.hamburger-menu{
    display: none;
}

.nav-link-label{
    width: 100%;
    display: flex;
}
/* tablet and mobile  */
@media (max-width:950px){
    .primary-nav-wrapper{
        background-color: white;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        transition: transform var(--animation-timing);
        transform: translateX(100%);
        z-index: 9998;
    }

    .primary-nav{
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        padding-left: 1rem;
    }

    .nav-links{
        font-size: 2rem;
    }
    .primary-nav-svg{
        width: 16px;
        height: 18px;
    }
 
    .logo{
        position: static;
    }
    #nav{
        justify-content: space-between;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 9.57px;
    }
    .hamburger-menu{
        --x-width:calc(var(--hamburger-height) * 1.41421356237); /* the length of the bar when its an X (hamburger menu height  * squareroot of 2) */
        display: flex;
        flex-direction: column;
        gap: var(--bar-gap);
        width: max-content;
        z-index: 9999;
        cursor: pointer;
    }

    .hamburger-menu::before,
    .hamburger-menu::after,
    .hamburger-menu input{
        content: "";
        width: var(--bar-width);
        height: var(--bar-height);
        background-color: var(--foreground);
        border-radius: 9999px;
        transform-origin: left center;
        transition: opacity var(--animation-timing), width var(--animation-timing),translate var(--animation-timing),rotate var(--animation-timing);
    }
    
    .hamburger-menu input{
        appearance: none;
        padding: 0;
        margin: 0;
        outline: none;
        pointer-events: none;
    }

    .hamburger-menu:has(input:checked)::before{
        rotate: 45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height) / -2);
    }

    .hamburger-menu:has(input:checked)::after{
        rotate: -45deg;
        width: var(--x-width);
        translate: 0 calc(var(--bar-height)/2);
        
    }
    .hamburger-menu input:checked{
        opacity: 0;
        width: 0;
    }

    .hamburger-menu:has(input:checked) + .primary-nav-wrapper{
        transform: translateX(0);
    }

    [type="checkbox"]:not(:checked),
    [type="checkbox"]:checked {
        opacity: 1;
        position: static;
    }

/* Style the labels for the navigation links */
.nav-link-label {
    cursor: pointer;
  }
  
  /* Style the labels when the checkbox is checked */
  .hamburger-checkbox:checked + .primary-nav-wrapper .nav-link-label {
    display: block;
  }
  
  /* Style the labels when the checkbox is unchecked */
  .hamburger-checkbox + .primary-nav-wrapper .nav-link-label {
    display: none;
  }
}

/* mobile */
@media (max-width:600px){
    .logo{
        width: 160px;
        height: 46.97px;
    }
    #nav{
        gap: 120px;
        margin-left: 20px;
        margin-top: 9.57px;
    }
}

/* ------------------- */
/*       hero          */
/* ------------------- */
#hero{
    /* min-height: 50vh; */
}
/* hero top */
.hero-top-container{
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 240px;
margin-right: 85px;
margin-bottom: 40px;
}
/* scroll to contact btn */
.scroll-btn{
    position: relative;
    width: 122.02px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
}
.scroll-btn-arrow{
    width: 37px;
    height: 37px;
    z-index: 2;
}

.rotate-text{
    position: absolute;
    inset: 0;
    animation-name: rotate-circle;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes rotate-circle {
    to {
      transform: rotate(1turn);
    }
  }

  /* hero top image styles */
  .hero-top-img{
    width: 30.208vw;
    height: 71px;
    position: relative;
  }
  .hero-top-img::after{
    content: "The future is full of likes.";
    text-align: left;
    letter-spacing: 2.95px;
    color: #F0F5F5;
    opacity: 1;
    font-size: 73.79px; 
    font-size: clamp(1.563rem, 5.124vw, 4.612rem);
    width: max-content;
    height: 90px;
    z-index: -1;
    position: absolute;
    top: 26px;
  }
  /* mobile */
  @media (max-width:950px){
    .hero-top-img{
        width: 207px;
        height: 33.84px;
        
      }
      .hero-top-img::after{
        font-size: 35.17px;
        height: 43px;
        letter-spacing: 1.41px;
      }
      .hero-top-container{
        margin-top: 0px;
        margin-left: 19.97px;
        margin-right: 18.39px;
        margin-bottom: 20px;
        }
        .scroll-btn{
            width: 73.21px;
        }
        .scroll-btn-arrow{
            width: 22px;
            height: 22.35px;
        }
  }
  @media (max-width:600px){
    .hero-top-img::after{
        font-size: 25px;
        height: 43px;
      }
    .scroll-btn{
        width: 60px;
    }
    .scroll-btn-arrow{
        width: 16px;
        height: 17px;
    }
  }


/* hero Key visual */
.carousel-container{
  overflow: hidden;
  height: 180px;
}
.kv {
    width: 320px;
    height: 180px;
}
.slides{
   width: 100%;
   display: flex;
   gap: 5px;
}
.slide{
    flex-grow: 1;
   flex-shrink: 0;
   transform: translateX(10vw);
}

@media (min-width: 720px) and (max-width: 1200px) {
    .carousel-container {
        height: 339px; 
    }
    .kv {
        width: 600px; 
        height:339px; 
    }
    .slides {
        gap: 5px; 
    }
    .slide{
        flex-grow: 1;
       flex-shrink: 0;
       transform: translateX(13vw);
       
    
    }
}

@media (min-width:1200px){
    .carousel-container {
        height:568px; 
    }
    .kv {
        width: 1010px; 
        height:568px;
    }
    .slides {
        gap: 5px; 
    }
    .slide{
        flex-grow: 1;
       flex-shrink: 0;
       transform: translateX(400px);
    }
}

    

/* company name */
.company-name{
    display: grid;
    grid-template-columns: 1fr 50% 1fr;
    justify-items: center;
    position: relative;
    width: 100vw;
    height: 48px;
}
#company-name{
    font-size: 38.6px; /* 38.6 px */
    letter-spacing: 1px;
   
}

.company-name h3{
    grid-column: 2/3;
    justify-self: end;
    font-family: var(--ff-trade-gothic);
    z-index: 3;
}

@media (max-width:600px){
    .company-name{
        display: block;
        height: 30px;
    }
    #company-name{
        /* position: absolute;
        right: 0; */
        font-size: 1.5rem; /* 24 px */
        letter-spacing: -0.77px;
        
    }
}
@media (max-width:1200px){
    .company-name{
        display: block;
    }
    #company-name{
        position: absolute;
        right: 0;
        
        
    }
}


/* ------------------- */
/*       about         */
/* ------------------- */

#about{
    height: 100%;
    color: black;
    /* border: 1px solid red; */
}

.bg-img{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    /* clip-path:circle(62.1% at 50% 50%); */
    clip-path: circle(56.1456% at 50% 50%);
    /* transition:clip-path 200ms ease-in;  */
}

.about-container{
    /* --clip:circle(63.7332% at 47.8454% 47.8454%); */
    /* background-color: var(--section-bg); */
    overflow-y: hidden;
    /* clip-path:circle(62.1% at 50% 50%); */
    /* clip-path: var(--clip); */
   
   
   padding-bottom: 50px;
   padding-top: 50px;
}

@media (min-width:900px){
    .about-container{
        padding-bottom: 100px;
        padding-top: 100px;
    }
}
/* @media (min-width:1200px){
    .about-container{
        clip-path: inset(0 0 0 0);
        
    }
} */

/* about top styles */
.about-top{
    margin-top: 3rem;
    height: 347px;
    grid-column: 2/3;
    display: flex;
}
@media (max-width:600px){
    .about-top{
    flex-direction: column;
    } 
}

/* top right */
.about-top_left{
    display: grid;
    place-items: center;
    letter-spacing: 0px;
    z-index: 3;
}
.about-top-title_eng{
    color: #FFFFFF;
    font-size: 130px;
    white-space: nowrap; 
    z-index: 2;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
}

.about-top-title_jp{
    z-index: 3;
    position: absolute;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0px;
    font-size: 30px;
}
.about-top_right p{
    font-size: 22px;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    z-index: 3;
}
.about-top_right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 370px;
}

@media (max-width:600px){
    
    .about-top-title_eng{
        color: #FFFFFF;
        font-size: 80px; 
    }
    
    .about-top-title_jp{
        font-size: 22px;
    }
    .about-top_right p{
        font-size: 16px; 
    }
    .about-top_right {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 270px;
        text-align: center;
        gap: 40px;
    }
}

/* about center */
.about-center{
    grid-column: 2/3;
    margin-top: 155px;
    display: grid;
    place-items: center;
}


.about-us-list{
    width: 660px;
    aspect-ratio: 1;
    border-radius: 50%;
    position: relative;
}

.about-us-list-item{
    width: 200px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 50%;
    top:50%;
    margin: -100px;
    z-index: 3;

}

.item-1{
    transform: rotate(22.5deg) translate(330px) rotate(-22.5deg);
}
.item-2 {
    transform: rotate( 67.5deg) translateX(330px) rotate(-67.5deg);
}

.item-3 {
    transform: rotate(112.5deg) translateX(330px) rotate(-112.5deg);
}

.item-4 {
    transform: rotate(157.5deg) translateX(330px) rotate(-157.5deg);
}

.item-5 {
    transform: rotate(202.5deg) translateX(330px) rotate(-202.5deg);
}

.item-6 {
    transform: rotate(247.5deg) translateX(330px) rotate(-247.5deg);
}

.item-7 {
    transform: rotate(292.5deg) translateX(330px) rotate(-292.5deg);
}

.item-8 {
    transform: rotate(337.5deg) translateX(330px) rotate(-337.5deg);
}
.center{
    border: none;
    font-size: 46px;
    width: 660px;
    aspect-ratio: 1;
    margin: -330px;
    letter-spacing: 0px;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    background-color: #FFFFFF;
 }
 .center p{
    width: 368px;
    height: 277px;
 }

 .sub-item{
    font-size: 24px;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
 }

 @media (max-width:600px){
    .about-us-list{
        width: 272.5px;
    }
    .about-us-list-item{
        width: 92px;
        
        margin: -46px;
        z-index: 3;
    
    }
    .sub-item{
        font-size: 14px;
        width: 92px;
        
    
     }
     .center{
        border: none;
        font-size: 46px;
        width: 272.5px;
        margin: -136.255px;
        
     }
     .center p{
        width: 152px;
        height: 114px;
        font-size: 19px;
     }
     .item-1{
        transform: rotate(22.5deg) translate(136.255px) rotate(-22.5deg);
    }
    .item-2 {
        transform: rotate( 67.5deg) translate(136.255px) rotate(-67.5deg);
    }
    
    .item-3 {
        transform: rotate(112.5deg) translate(136.255px) rotate(-112.5deg);
    }
    
    .item-4 {
        transform: rotate(157.5deg) translate(136.255px) rotate(-157.5deg);
    
    }
    
    .item-5 {
        transform: rotate(202.5deg) translate(136.255px) rotate(-202.5deg);
    }
    
    .item-6 {
        transform: rotate(247.5deg) translate(136.255px)rotate(-247.5deg);
    }
    
    .item-7 {
        transform: rotate(292.5deg) translate(136.255px) rotate(-292.5deg);
    }
    
    .item-8 {
        transform: rotate(337.5deg) translate(136.255px) rotate(-337.5deg);
    }
    
}
 /* about bottom */
 .about-bottom{
    grid-column: 2/3;
    margin-top: 169px;
 }
.contact-btn{
    border: none;
    background-color: transparent;
    z-index: 2;
 }
.contact-btn:hover{
    cursor: pointer;
 }
 .contact-btn-wrapper{
    z-index: 2;
 }
 @media (max-width:600px){
    .about-bottom{
        margin-top: 75px;
     }
     .contact-btn-wrapper{
        width: 158.11px;
        height: 64.69px;
     }
 }

/* ------------------- */
/*       service        */
/* ------------------- */

 /* mobile first */
#service{
    z-index: 5;
    position: relative;
    overflow-y: visible;
    /* height: 90vh; */
    /* aspect-ratio: 1; */
}


.service-bg-img{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    /* object-position: bottom */
    /* clip-path:circle(62.1% at 50% 50%); */
    clip-path: circle(58.1693% at 50% 50%);;
    /* transition:clip-path 200ms ease-in;  */
}


@media (min-width:650px){
    .service-bg-img{
        object-fit: fill;
    }
}
.service-container{
   
    /* background-color: var( --section-bg); */
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 90% 1fr;
    /* border-radius: 50% 50% 50% 50%/50% 50% 50% 50%; */
    /* min-height: 100vh; */
}
.service-container{
    /* clip-path:circle(62.1% at 50% 50%); */
   /* padding-bottom: 50px;
   padding-top: 50px; */
   /* --clip:circle(100%);
   clip-path: var(--clip); */
   padding-top: 50px;
   padding-bottom: 50px;
}

@media (max-width:650px){
    .service-container{
        /* padding-bottom: 200px;
        padding-top: 200px; */
    }
}

@media (min-width:650px){
    .service-container{
        /* padding-bottom: 300px;
        padding-top: 300px; */
    }
}
@media (min-width:900px){
    .service-container{
        /* padding-bottom: 400px;
        padding-top: 400px; */
    }
}
@media (min-width:1000px){
    .service-container{
        /* padding-bottom: 100px;
        padding-top: 100px; */
        /* border-radius: 50%; */
        /* clip-path: inset(0 0 0 0); */
    }
}

.service-top{
    grid-column: 2;
    justify-self: center;
    width: 100%;
}
.servive-carousel-container{
    grid-column: 2;
}
.service-contact-btn{
    grid-column: 2;
}

/* mobile service grid */

.title-wrapper{
    position: relative;
}
.title_eng{
    font-size: 5rem; /*80px*/
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    color: #FFFFFF;
    white-space: nowrap; 
    z-index: 2;
}
.title_jp{
    z-index: 3;
    position: absolute;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
    letter-spacing: 0px;
    font-size: 22px;
}
.title-wrapper{
    display: grid;
    place-items: center;
    letter-spacing: 0px;
    width: fit-content;
}
.service-top{
    margin-bottom:38.57px ;
}


/* service carosel  */


.carousel{
    grid-column: 2;
    height: 500px;
    position: relative;
    /* border: 1px solid black; */
}
.carousel .carousel-item{
    width: 308px;
    height: 408px;
    background-color: rgba(255, 255, 255, 1);
}
.carousel-item{
    z-index: 1;
}
.service-card_title{
    font-size: 1.688rem;
    text-align: center;
    letter-spacing: 1.08px;
    color: #000000;
    margin-top: 23.51px;
    margin-bottom: 9.34px;
    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
    font-weight: 300;
    font-style: normal;
}

.service_card_description{
    text-align: center;
    width: 260px;
    height: 70px;
    padding-bottom: 47.57px;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 0.875rem; /* 24px */
}

.service_card{
    width: 308px;
    height: 408px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.6);
}


#image{
    width: 218px;
    height: 169px;
    border-radius: 50%;
    margin-bottom: 30.34px;
}

.service-carosel-btn_img{
    width: 100%;
    height: 100%;
}

.carosel-btn{
    width: 80px;
    aspect-ratio: 1;
    border: none;
    background-color: transparent;
}

/*service carosel marker*/

.carousel .indicators .indicator-item {
    height: 10px !important;
    width: 10px !important;

}

.carousel .indicators .indicator-item:hover {
    border: 1px solid #000000 !important;

}


.carousel .indicators .indicator-item.active {

    height: 10px !important;
    width: 10px !important;
    background-color: #000000 !important;
    

}
.carosel-btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
.prev{
    position: absolute;
    top: 50%;
    left:10px;
    transform: translate(-50%,-50%);
}
.carosel{
    position: relative;
}
.next{
    position: absolute;
    top: 50%;
    right:0px;
    transform: translate(-50%,-50%);
   
}

.prev,
.next{
    width: 50px;
    aspect-ratio: 1;
    opacity: 0.6;
    z-index: 2;
}

.prev:hover,
.next:hover{
    opacity: 1;
    cursor: pointer;
}
.service-carosel-btn_img{
    width: 50px !important;
    height: 50px !important;
}
@media (min-width:1200px){
.prev,
.next{
    width: 80px;
    aspect-ratio: 1;
}
.prev{
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%,-50%);
}
.next{
    position: absolute;
    top: 50%;
    right: 35%;
    transform: translate(-50%,-50%);
   
}
.service-carosel-btn_img{
    width: 80px !important;
    height: 80px !important;
}
}
/* service contact button */

.service-contact-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 33.5px;
    width: 100%;
}

/* desktop version  */

@media (min-width:1200px){
    .servive-carousel-container{
        width: 100%;
    }
    .service_slides{
       justify-content: space-around;
       align-items: center;
       position: relative;
    }
    .service-card_title{
        font-size: 1.69rem;
        margin-top: 23.51px;
        margin-bottom: 9.34px;
        font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;
        font-weight: 300;
        font-style: normal;
    }

    /* current card */

    
    .service-container{
        position: static;
    }
    .title_eng{
        font-size: 8.125rem; /*130px */
    }
    .title_jp{
        font-size: 1.875rem;/*30px */
    }
    .service-contact-btn{
        margin-top: 53.7px;
    }
    .service-carousel-marker{
        display: block;
    }
}
/* ------------------- */
/*       topics         */
/* ------------------- */

#topics{
    height: 1000px;
    /* margin-top: 80px; */
    background-color: var(--section-bg);
}
/* ------------------- */
/*       company       */
/* ------------------- */

 /* mobile first */
 .company-container{
    background-color: var(--section-bg);
    /* margin-top: 80px; */
    padding-bottom: 81px;
    padding-top: 100px;
    min-height: 100vh;
 }
 .company-container{
    /* clip-path:circle(62.1% at 50% 50%); */
   padding-bottom: 50px;
   padding-top: 50px;
   --clip:circle(100%);
   clip-path: var(--clip);
}
@media (max-width:650px){
    .company-container{
        padding-bottom: 200px;
        padding-top: 200px;
    }
}

@media (min-width:650px){
    .company-container{
        padding-bottom: 300px;
        padding-top: 300px;
    }
}
@media (min-width:800px){
    .company-container{
        padding-bottom: 400px;
        padding-top: 400px;
    }
}
@media (min-width:1000px){
    .company-container{
        padding-bottom: 100px;
        padding-top: 100px;
        clip-path: inset(0 0 0 0);
    }
}
.company-title{
    width: 100%;
   
}
.company-info{
    display: grid;
    place-content: center;
}
.info-list{
    padding: 0;
    width: 100%;
    margin: 0 auto;
}
.info-list-item{
    display: grid;
    grid-template-columns: 50px  201px 1fr;
    gap:50px;
    width: 350px;
    height: 90px; 
}

.info-title{
    font-size: 1rem;
    text-align: left;
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 49px;
    
    
}
.info-description{
    font-size: 1rem;
    text-align: left;
    font-family: 'Noto Sans JP', sans-serif;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
}
@media (min-width:650px){
    .info-title{
        font-size: 18px;
        
    }
    .info-description{
        font-size: 18px;
    }
    .title_jp{
        font-size: 30px;
    }
    .title_eng{
        font-size: 130px;
    }
}
.company_tel p{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.fax{
    padding-left: 10px;
   
}

/* styles for the lines */

.info-list-item{
    position: relative;
}
.info-title::before{
    content: "";
    width: 55px;
    height: 3px;
    background-color: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;

}
.info-title::after{
    content: "";
    width: 100%;
    height: 1px;
    background-color:  rgb(230, 235, 345); ;
    position: absolute;
    top: 1px;
    left: 0;
}


@media (min-width:1200px){
    .info-list-item{
        display: flex;
        gap:50px;
        width: 609px;
        height: 90px;
    }
    .info-title{
        width: 55px;
    }
    .info-description{
       flex: 1;
    }
}

/* ------------------- */
/*       contact       */
/* ------------------- */
#contact{
    height: 1000px;
    /* margin-top: 80px; */
    background-color: var(--section-bg);  
}
/* ------------------- */
/*       footer        */
/* ------------------- */

#footer{
    width: 100%;
    height: 100px;
    background-color: #000000;
    display: grid;
    place-items: center;
}

.copyright{
    color: #FFFFFF;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
    letter-spacing: 0.48px;
    text-align: center;
}

@media (min-width:769px){
    .copyright{
        font-size: 18px;
        letter-spacing: 0.72px;
    }  
}

@media (min-width:1050px){
    .title_jp{
        font-size: 30px;
    }
    .title_eng{
        font-size: 130px;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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B;GACnB,sBAAsB;AACzB;AACA;IACI;QACI,qBAAqB;QACrB,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,qBAAqB;QACrB,kBAAkB;IACtB;AACJ;AACA;IACI;QACI,qBAAqB;QACrB,kBAAkB;IACtB;AACJ;AACA;IACI;QACI,qBAAqB;QACrB,kBAAkB;QAClB,yBAAyB;IAC7B;AACJ;AACA;IACI,WAAW;;AAEf;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,UAAU;IACV,WAAW;IACX,cAAc;AAClB;AACA;IACI,aAAa;IACb,sCAAsC;IACtC,QAAQ;IACR,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,uCAAuC;IACvC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,WAAW;;;AAGf;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,uCAAuC;IACvC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,OAAO;AACX;AACA;IACI;QACI,eAAe;;IAEnB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,gBAAgB;IACpB;AACJ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;;AAEtB;;AAEA,yBAAyB;;AAEzB;IACI,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,UAAU;;AAEd;AACA;IACI,WAAW;IACX,WAAW;IACX,WAAW;IACX,qCAAqC;IACrC,kBAAkB;IAClB,QAAQ;IACR,OAAO;AACX;;;AAGA;IACI;QACI,aAAa;QACb,QAAQ;QACR,YAAY;QACZ,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;OACG,OAAO;IACV;AACJ;;AAEA,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;AACxB;IACI,cAAc;IACd,sBAAsB;IACtB,mCAAmC;AACvC;AACA,wBAAwB;AACxB,wBAAwB;AACxB,wBAAwB;;AAExB;IACI,WAAW;IACX,aAAa;IACb,yBAAyB;IACzB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,uCAAuC;IACvC,eAAe;IACf,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI;QACI,eAAe;QACf,sBAAsB;IAC1B;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["/* ------------------- */\n/* Variables           */\n/* ------------------- */\n:root{\n    --main-color:#000000;\n\n    /* fonts */\n\n    --ff-trade-gothic:trade-gothic-next-compressed, sans-serif;\n    \n    /* font weights */\n    --fw-nav:400;\n\n    /* hamburger menu vaiables */\n\n    --bar-width:30px;\n    --bar-height:1.17px;\n    --bar-gap:11.24px;\n    --foreground:#606060;\n    --background:#FFFFFF;\n    --animation-timing:350ms ease-in-out;\n    --hamburger-height: calc(var(--bar-height) * 3  + var(--bar-gap) * 2);\n\n    /* section background color */\n    --section-bg: #F0F5F5;\n    --clip: circle(63.7332% at 47.8454% 47.8454%);\n}\n\n/* fonts */\n@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');\n\n\n/* ------------------- */\n/* CSS - Reset               */\n/* ------------------- */\n\n/* Box sizing */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Reset margins */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\nfigure,\npicture {\n    margin: 0;\n}\n\n@media (max-width:350px){\n    body{\n       overflow: scroll;\n    }\n}\n\n/* set up the body */\nbody {\n    line-height: 1.5;\n    min-height: 100dvh;\n    max-width: 100vw;\n    overflow-x: hidden;\n    position: relative;\n    color: var(--main-color);\n    margin: 0;\n    padding: 0; \n    display: flex;\n    flex-direction: column;\n    gap: 80px;\n}\n@media (max-width:600px){\n    body{\n        gap: 40px;\n    }\n}\n/* make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* make form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* remove animations for people who've turned them off */\n@media (prefers-reduced-motion: reduce) {  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* ------------------- */\n/*       UTILITY CLASSES          */\n/* ------------------- */\n.main-grid{\n    display: grid;\n    grid-template-columns: 1fr 70% 1fr;\n    justify-items: center;\n}\n@media (max-width:600px){\n    .main-grid{\n        display: grid;\n        grid-template-columns: 1fr 85% 1fr;\n    } \n}\n\n.cursor-pointer:hover{\n    cursor: pointer;\n}\n\n/* ------------------- */\n/*       decor-images     */\n/* ------------------- */\n\n/* loop in company name section */\n\n#about{\n    position: relative;\n    overflow: hidden;\n}\n.desktop-only{\n    display: none;\n}\n@media (min-width:1200px){\n    .loop-one-wrapper{\n        width: 1543px;\n        height: 702px;\n    }\n\n  }\n\n\n/* ------------------- */\n/*       Nav           */\n/* ------------------- */\nbody{\n    max-width: 100vw;\n}\n#nav{\n    display: flex;\n    background-color: white !important;\n    justify-content: center;\n    align-items: center;\n    margin-left: 61.93px;\n    margin-top: 34.38px;\n    position: relative;\n}\n\n#navigation{\n    box-shadow: none;\n}\n.primary-nav-svg{\n    width: 8.8791px;\n    height: 9.0395px; \n}\n\n.logo{\n    position: absolute;\n    top:4px;\n    left: 0;\n    width: 196.19px;\n    height: 57.6px;\n}\n.nav-links{\n    text-decoration: none;\n    color: var(--main-color);\n    font-style: normal;\n    font-family: var(--ff-trade-gothic);\n    font-weight: var(--fw-nav);\n    font-size: 20px;\n    letter-spacing: 0.8px;\n}\n\n.primary-nav{\n    display: flex;\n    gap: 2.6875rem;\n    height: 100%;\n    padding: 0;\n    background-color: white !important;\n    box-shadow: none !important;\n}\n\n.primary-nav-item{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5938rem;\n    height: 100%;\n}\n\n.primary-nav-item:hover{\n    cursor: pointer;\n}\n.hamburger-menu{\n    display: none;\n}\n\n.nav-link-label{\n    width: 100%;\n    display: flex;\n}\n/* tablet and mobile  */\n@media (max-width:950px){\n    .primary-nav-wrapper{\n        background-color: white;\n        position: fixed;\n        top: 0;\n        right: 0;\n        height: 100%;\n        width: 100%;\n        transition: transform var(--animation-timing);\n        transform: translateX(100%);\n        z-index: 9998;\n    }\n\n    .primary-nav{\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: flex-start;\n        padding-left: 1rem;\n    }\n\n    .nav-links{\n        font-size: 2rem;\n    }\n    .primary-nav-svg{\n        width: 16px;\n        height: 18px;\n    }\n \n    .logo{\n        position: static;\n    }\n    #nav{\n        justify-content: space-between;\n        margin-left: 20px;\n        margin-right: 20px;\n        margin-top: 9.57px;\n    }\n    .hamburger-menu{\n        --x-width:calc(var(--hamburger-height) * 1.41421356237); /* the length of the bar when its an X (hamburger menu height  * squareroot of 2) */\n        display: flex;\n        flex-direction: column;\n        gap: var(--bar-gap);\n        width: max-content;\n        z-index: 9999;\n        cursor: pointer;\n    }\n\n    .hamburger-menu::before,\n    .hamburger-menu::after,\n    .hamburger-menu input{\n        content: \"\";\n        width: var(--bar-width);\n        height: var(--bar-height);\n        background-color: var(--foreground);\n        border-radius: 9999px;\n        transform-origin: left center;\n        transition: opacity var(--animation-timing), width var(--animation-timing),translate var(--animation-timing),rotate var(--animation-timing);\n    }\n    \n    .hamburger-menu input{\n        appearance: none;\n        padding: 0;\n        margin: 0;\n        outline: none;\n        pointer-events: none;\n    }\n\n    .hamburger-menu:has(input:checked)::before{\n        rotate: 45deg;\n        width: var(--x-width);\n        translate: 0 calc(var(--bar-height) / -2);\n    }\n\n    .hamburger-menu:has(input:checked)::after{\n        rotate: -45deg;\n        width: var(--x-width);\n        translate: 0 calc(var(--bar-height)/2);\n        \n    }\n    .hamburger-menu input:checked{\n        opacity: 0;\n        width: 0;\n    }\n\n    .hamburger-menu:has(input:checked) + .primary-nav-wrapper{\n        transform: translateX(0);\n    }\n\n    [type=\"checkbox\"]:not(:checked),\n    [type=\"checkbox\"]:checked {\n        opacity: 1;\n        position: static;\n    }\n\n/* Style the labels for the navigation links */\n.nav-link-label {\n    cursor: pointer;\n  }\n  \n  /* Style the labels when the checkbox is checked */\n  .hamburger-checkbox:checked + .primary-nav-wrapper .nav-link-label {\n    display: block;\n  }\n  \n  /* Style the labels when the checkbox is unchecked */\n  .hamburger-checkbox + .primary-nav-wrapper .nav-link-label {\n    display: none;\n  }\n}\n\n/* mobile */\n@media (max-width:600px){\n    .logo{\n        width: 160px;\n        height: 46.97px;\n    }\n    #nav{\n        gap: 120px;\n        margin-left: 20px;\n        margin-top: 9.57px;\n    }\n}\n\n/* ------------------- */\n/*       hero          */\n/* ------------------- */\n#hero{\n    /* min-height: 50vh; */\n}\n/* hero top */\n.hero-top-container{\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nmargin-left: 240px;\nmargin-right: 85px;\nmargin-bottom: 40px;\n}\n/* scroll to contact btn */\n.scroll-btn{\n    position: relative;\n    width: 122.02px;\n    aspect-ratio: 1;\n    display: grid;\n    place-items: center;\n}\n.scroll-btn-arrow{\n    width: 37px;\n    height: 37px;\n    z-index: 2;\n}\n\n.rotate-text{\n    position: absolute;\n    inset: 0;\n    animation-name: rotate-circle;\n    animation-duration: 10s;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n}\n\n@keyframes rotate-circle {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n\n  /* hero top image styles */\n  .hero-top-img{\n    width: 30.208vw;\n    height: 71px;\n    position: relative;\n  }\n  .hero-top-img::after{\n    content: \"The future is full of likes.\";\n    text-align: left;\n    letter-spacing: 2.95px;\n    color: #F0F5F5;\n    opacity: 1;\n    font-size: 73.79px; \n    font-size: clamp(1.563rem, 5.124vw, 4.612rem);\n    width: max-content;\n    height: 90px;\n    z-index: -1;\n    position: absolute;\n    top: 26px;\n  }\n  /* mobile */\n  @media (max-width:950px){\n    .hero-top-img{\n        width: 207px;\n        height: 33.84px;\n        \n      }\n      .hero-top-img::after{\n        font-size: 35.17px;\n        height: 43px;\n        letter-spacing: 1.41px;\n      }\n      .hero-top-container{\n        margin-top: 0px;\n        margin-left: 19.97px;\n        margin-right: 18.39px;\n        margin-bottom: 20px;\n        }\n        .scroll-btn{\n            width: 73.21px;\n        }\n        .scroll-btn-arrow{\n            width: 22px;\n            height: 22.35px;\n        }\n  }\n  @media (max-width:600px){\n    .hero-top-img::after{\n        font-size: 25px;\n        height: 43px;\n      }\n    .scroll-btn{\n        width: 60px;\n    }\n    .scroll-btn-arrow{\n        width: 16px;\n        height: 17px;\n    }\n  }\n\n\n/* hero Key visual */\n.carousel-container{\n  overflow: hidden;\n  height: 180px;\n}\n.kv {\n    width: 320px;\n    height: 180px;\n}\n.slides{\n   width: 100%;\n   display: flex;\n   gap: 5px;\n}\n.slide{\n    flex-grow: 1;\n   flex-shrink: 0;\n   transform: translateX(10vw);\n}\n\n@media (min-width: 720px) and (max-width: 1200px) {\n    .carousel-container {\n        height: 339px; \n    }\n    .kv {\n        width: 600px; \n        height:339px; \n    }\n    .slides {\n        gap: 5px; \n    }\n    .slide{\n        flex-grow: 1;\n       flex-shrink: 0;\n       transform: translateX(13vw);\n       \n    \n    }\n}\n\n@media (min-width:1200px){\n    .carousel-container {\n        height:568px; \n    }\n    .kv {\n        width: 1010px; \n        height:568px;\n    }\n    .slides {\n        gap: 5px; \n    }\n    .slide{\n        flex-grow: 1;\n       flex-shrink: 0;\n       transform: translateX(400px);\n    }\n}\n\n    \n\n/* company name */\n.company-name{\n    display: grid;\n    grid-template-columns: 1fr 50% 1fr;\n    justify-items: center;\n    position: relative;\n    width: 100vw;\n    height: 48px;\n}\n#company-name{\n    font-size: 38.6px; /* 38.6 px */\n    letter-spacing: 1px;\n   \n}\n\n.company-name h3{\n    grid-column: 2/3;\n    justify-self: end;\n    font-family: var(--ff-trade-gothic);\n    z-index: 3;\n}\n\n@media (max-width:600px){\n    .company-name{\n        display: block;\n        height: 30px;\n    }\n    #company-name{\n        /* position: absolute;\n        right: 0; */\n        font-size: 1.5rem; /* 24 px */\n        letter-spacing: -0.77px;\n        \n    }\n}\n@media (max-width:1200px){\n    .company-name{\n        display: block;\n    }\n    #company-name{\n        position: absolute;\n        right: 0;\n        \n        \n    }\n}\n\n\n/* ------------------- */\n/*       about         */\n/* ------------------- */\n\n#about{\n    height: 100%;\n    color: black;\n    /* border: 1px solid red; */\n}\n\n.bg-img{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    object-fit: cover;\n    /* clip-path:circle(62.1% at 50% 50%); */\n    clip-path: circle(56.1456% at 50% 50%);\n    /* transition:clip-path 200ms ease-in;  */\n}\n\n.about-container{\n    /* --clip:circle(63.7332% at 47.8454% 47.8454%); */\n    /* background-color: var(--section-bg); */\n    overflow-y: hidden;\n    /* clip-path:circle(62.1% at 50% 50%); */\n    /* clip-path: var(--clip); */\n   \n   \n   padding-bottom: 50px;\n   padding-top: 50px;\n}\n\n@media (min-width:900px){\n    .about-container{\n        padding-bottom: 100px;\n        padding-top: 100px;\n    }\n}\n/* @media (min-width:1200px){\n    .about-container{\n        clip-path: inset(0 0 0 0);\n        \n    }\n} */\n\n/* about top styles */\n.about-top{\n    margin-top: 3rem;\n    height: 347px;\n    grid-column: 2/3;\n    display: flex;\n}\n@media (max-width:600px){\n    .about-top{\n    flex-direction: column;\n    } \n}\n\n/* top right */\n.about-top_left{\n    display: grid;\n    place-items: center;\n    letter-spacing: 0px;\n    z-index: 3;\n}\n.about-top-title_eng{\n    color: #FFFFFF;\n    font-size: 130px;\n    white-space: nowrap; \n    z-index: 2;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n}\n\n.about-top-title_jp{\n    z-index: 3;\n    position: absolute;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    letter-spacing: 0px;\n    font-size: 30px;\n}\n.about-top_right p{\n    font-size: 22px;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    z-index: 3;\n}\n.about-top_right {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 370px;\n}\n\n@media (max-width:600px){\n    \n    .about-top-title_eng{\n        color: #FFFFFF;\n        font-size: 80px; \n    }\n    \n    .about-top-title_jp{\n        font-size: 22px;\n    }\n    .about-top_right p{\n        font-size: 16px; \n    }\n    .about-top_right {\n        margin-top: 50px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        width: 270px;\n        text-align: center;\n        gap: 40px;\n    }\n}\n\n/* about center */\n.about-center{\n    grid-column: 2/3;\n    margin-top: 155px;\n    display: grid;\n    place-items: center;\n}\n\n\n.about-us-list{\n    width: 660px;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    position: relative;\n}\n\n.about-us-list-item{\n    width: 200px;\n    aspect-ratio: 1;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    left: 50%;\n    top:50%;\n    margin: -100px;\n    z-index: 3;\n\n}\n\n.item-1{\n    transform: rotate(22.5deg) translate(330px) rotate(-22.5deg);\n}\n.item-2 {\n    transform: rotate( 67.5deg) translateX(330px) rotate(-67.5deg);\n}\n\n.item-3 {\n    transform: rotate(112.5deg) translateX(330px) rotate(-112.5deg);\n}\n\n.item-4 {\n    transform: rotate(157.5deg) translateX(330px) rotate(-157.5deg);\n}\n\n.item-5 {\n    transform: rotate(202.5deg) translateX(330px) rotate(-202.5deg);\n}\n\n.item-6 {\n    transform: rotate(247.5deg) translateX(330px) rotate(-247.5deg);\n}\n\n.item-7 {\n    transform: rotate(292.5deg) translateX(330px) rotate(-292.5deg);\n}\n\n.item-8 {\n    transform: rotate(337.5deg) translateX(330px) rotate(-337.5deg);\n}\n.center{\n    border: none;\n    font-size: 46px;\n    width: 660px;\n    aspect-ratio: 1;\n    margin: -330px;\n    letter-spacing: 0px;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    background-color: #FFFFFF;\n }\n .center p{\n    width: 368px;\n    height: 277px;\n }\n\n .sub-item{\n    font-size: 24px;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    background-image: url(./assets/images/transparentBkg/transparentBkg2x.png);\n    background-size: cover;\n }\n\n @media (max-width:600px){\n    .about-us-list{\n        width: 272.5px;\n    }\n    .about-us-list-item{\n        width: 92px;\n        \n        margin: -46px;\n        z-index: 3;\n    \n    }\n    .sub-item{\n        font-size: 14px;\n        width: 92px;\n        \n    \n     }\n     .center{\n        border: none;\n        font-size: 46px;\n        width: 272.5px;\n        margin: -136.255px;\n        \n     }\n     .center p{\n        width: 152px;\n        height: 114px;\n        font-size: 19px;\n     }\n     .item-1{\n        transform: rotate(22.5deg) translate(136.255px) rotate(-22.5deg);\n    }\n    .item-2 {\n        transform: rotate( 67.5deg) translate(136.255px) rotate(-67.5deg);\n    }\n    \n    .item-3 {\n        transform: rotate(112.5deg) translate(136.255px) rotate(-112.5deg);\n    }\n    \n    .item-4 {\n        transform: rotate(157.5deg) translate(136.255px) rotate(-157.5deg);\n    \n    }\n    \n    .item-5 {\n        transform: rotate(202.5deg) translate(136.255px) rotate(-202.5deg);\n    }\n    \n    .item-6 {\n        transform: rotate(247.5deg) translate(136.255px)rotate(-247.5deg);\n    }\n    \n    .item-7 {\n        transform: rotate(292.5deg) translate(136.255px) rotate(-292.5deg);\n    }\n    \n    .item-8 {\n        transform: rotate(337.5deg) translate(136.255px) rotate(-337.5deg);\n    }\n    \n}\n /* about bottom */\n .about-bottom{\n    grid-column: 2/3;\n    margin-top: 169px;\n }\n.contact-btn{\n    border: none;\n    background-color: transparent;\n    z-index: 2;\n }\n.contact-btn:hover{\n    cursor: pointer;\n }\n .contact-btn-wrapper{\n    z-index: 2;\n }\n @media (max-width:600px){\n    .about-bottom{\n        margin-top: 75px;\n     }\n     .contact-btn-wrapper{\n        width: 158.11px;\n        height: 64.69px;\n     }\n }\n\n/* ------------------- */\n/*       service        */\n/* ------------------- */\n\n /* mobile first */\n#service{\n    z-index: 5;\n    position: relative;\n    overflow-y: visible;\n    /* height: 90vh; */\n    /* aspect-ratio: 1; */\n}\n\n\n.service-bg-img{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    object-fit: cover;\n    /* object-position: bottom */\n    /* clip-path:circle(62.1% at 50% 50%); */\n    clip-path: circle(58.1693% at 50% 50%);;\n    /* transition:clip-path 200ms ease-in;  */\n}\n\n\n@media (min-width:650px){\n    .service-bg-img{\n        object-fit: fill;\n    }\n}\n.service-container{\n   \n    /* background-color: var( --section-bg); */\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: 1fr 90% 1fr;\n    /* border-radius: 50% 50% 50% 50%/50% 50% 50% 50%; */\n    /* min-height: 100vh; */\n}\n.service-container{\n    /* clip-path:circle(62.1% at 50% 50%); */\n   /* padding-bottom: 50px;\n   padding-top: 50px; */\n   /* --clip:circle(100%);\n   clip-path: var(--clip); */\n   padding-top: 50px;\n   padding-bottom: 50px;\n}\n\n@media (max-width:650px){\n    .service-container{\n        /* padding-bottom: 200px;\n        padding-top: 200px; */\n    }\n}\n\n@media (min-width:650px){\n    .service-container{\n        /* padding-bottom: 300px;\n        padding-top: 300px; */\n    }\n}\n@media (min-width:900px){\n    .service-container{\n        /* padding-bottom: 400px;\n        padding-top: 400px; */\n    }\n}\n@media (min-width:1000px){\n    .service-container{\n        /* padding-bottom: 100px;\n        padding-top: 100px; */\n        /* border-radius: 50%; */\n        /* clip-path: inset(0 0 0 0); */\n    }\n}\n\n.service-top{\n    grid-column: 2;\n    justify-self: center;\n    width: 100%;\n}\n.servive-carousel-container{\n    grid-column: 2;\n}\n.service-contact-btn{\n    grid-column: 2;\n}\n\n/* mobile service grid */\n\n.title-wrapper{\n    position: relative;\n}\n.title_eng{\n    font-size: 5rem; /*80px*/\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    color: #FFFFFF;\n    white-space: nowrap; \n    z-index: 2;\n}\n.title_jp{\n    z-index: 3;\n    position: absolute;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n    letter-spacing: 0px;\n    font-size: 22px;\n}\n.title-wrapper{\n    display: grid;\n    place-items: center;\n    letter-spacing: 0px;\n    width: fit-content;\n}\n.service-top{\n    margin-bottom:38.57px ;\n}\n\n\n/* service carosel  */\n\n\n.carousel{\n    grid-column: 2;\n    height: 500px;\n    position: relative;\n    /* border: 1px solid black; */\n}\n.carousel .carousel-item{\n    width: 308px;\n    height: 408px;\n    background-color: rgba(255, 255, 255, 1);\n}\n.carousel-item{\n    z-index: 1;\n}\n.service-card_title{\n    font-size: 1.688rem;\n    text-align: center;\n    letter-spacing: 1.08px;\n    color: #000000;\n    margin-top: 23.51px;\n    margin-bottom: 9.34px;\n    font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n    font-weight: 300;\n    font-style: normal;\n}\n\n.service_card_description{\n    text-align: center;\n    width: 260px;\n    height: 70px;\n    padding-bottom: 47.57px;\n    font-family: 'Noto Sans JP', sans-serif;\n    font-size: 0.875rem; /* 24px */\n}\n\n.service_card{\n    width: 308px;\n    height: 408px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 40px;\n    background-color: rgba(255, 255, 255, 0.6);\n}\n\n\n#image{\n    width: 218px;\n    height: 169px;\n    border-radius: 50%;\n    margin-bottom: 30.34px;\n}\n\n.service-carosel-btn_img{\n    width: 100%;\n    height: 100%;\n}\n\n.carosel-btn{\n    width: 80px;\n    aspect-ratio: 1;\n    border: none;\n    background-color: transparent;\n}\n\n/*service carosel marker*/\n\n.carousel .indicators .indicator-item {\n    height: 10px !important;\n    width: 10px !important;\n\n}\n\n.carousel .indicators .indicator-item:hover {\n    border: 1px solid #000000 !important;\n\n}\n\n\n.carousel .indicators .indicator-item.active {\n\n    height: 10px !important;\n    width: 10px !important;\n    background-color: #000000 !important;\n    \n\n}\n.carosel-btn{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.prev{\n    position: absolute;\n    top: 50%;\n    left:10px;\n    transform: translate(-50%,-50%);\n}\n.carosel{\n    position: relative;\n}\n.next{\n    position: absolute;\n    top: 50%;\n    right:0px;\n    transform: translate(-50%,-50%);\n   \n}\n\n.prev,\n.next{\n    width: 50px;\n    aspect-ratio: 1;\n    opacity: 0.6;\n    z-index: 2;\n}\n\n.prev:hover,\n.next:hover{\n    opacity: 1;\n    cursor: pointer;\n}\n.service-carosel-btn_img{\n    width: 50px !important;\n    height: 50px !important;\n}\n@media (min-width:1200px){\n.prev,\n.next{\n    width: 80px;\n    aspect-ratio: 1;\n}\n.prev{\n    position: absolute;\n    top: 50%;\n    left: 40%;\n    transform: translate(-50%,-50%);\n}\n.next{\n    position: absolute;\n    top: 50%;\n    right: 35%;\n    transform: translate(-50%,-50%);\n   \n}\n.service-carosel-btn_img{\n    width: 80px !important;\n    height: 80px !important;\n}\n}\n/* service contact button */\n\n.service-contact-btn{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 33.5px;\n    width: 100%;\n}\n\n/* desktop version  */\n\n@media (min-width:1200px){\n    .servive-carousel-container{\n        width: 100%;\n    }\n    .service_slides{\n       justify-content: space-around;\n       align-items: center;\n       position: relative;\n    }\n    .service-card_title{\n        font-size: 1.69rem;\n        margin-top: 23.51px;\n        margin-bottom: 9.34px;\n        font-family: a-otf-ud-shin-go-con80-pr6n, sans-serif;\n        font-weight: 300;\n        font-style: normal;\n    }\n\n    /* current card */\n\n    \n    .service-container{\n        position: static;\n    }\n    .title_eng{\n        font-size: 8.125rem; /*130px */\n    }\n    .title_jp{\n        font-size: 1.875rem;/*30px */\n    }\n    .service-contact-btn{\n        margin-top: 53.7px;\n    }\n    .service-carousel-marker{\n        display: block;\n    }\n}\n/* ------------------- */\n/*       topics         */\n/* ------------------- */\n\n#topics{\n    height: 1000px;\n    /* margin-top: 80px; */\n    background-color: var(--section-bg);\n}\n/* ------------------- */\n/*       company       */\n/* ------------------- */\n\n /* mobile first */\n .company-container{\n    background-color: var(--section-bg);\n    /* margin-top: 80px; */\n    padding-bottom: 81px;\n    padding-top: 100px;\n    min-height: 100vh;\n }\n .company-container{\n    /* clip-path:circle(62.1% at 50% 50%); */\n   padding-bottom: 50px;\n   padding-top: 50px;\n   --clip:circle(100%);\n   clip-path: var(--clip);\n}\n@media (max-width:650px){\n    .company-container{\n        padding-bottom: 200px;\n        padding-top: 200px;\n    }\n}\n\n@media (min-width:650px){\n    .company-container{\n        padding-bottom: 300px;\n        padding-top: 300px;\n    }\n}\n@media (min-width:800px){\n    .company-container{\n        padding-bottom: 400px;\n        padding-top: 400px;\n    }\n}\n@media (min-width:1000px){\n    .company-container{\n        padding-bottom: 100px;\n        padding-top: 100px;\n        clip-path: inset(0 0 0 0);\n    }\n}\n.company-title{\n    width: 100%;\n   \n}\n.company-info{\n    display: grid;\n    place-content: center;\n}\n.info-list{\n    padding: 0;\n    width: 100%;\n    margin: 0 auto;\n}\n.info-list-item{\n    display: grid;\n    grid-template-columns: 50px  201px 1fr;\n    gap:50px;\n    width: 350px;\n    height: 90px; \n}\n\n.info-title{\n    font-size: 1rem;\n    text-align: left;\n    font-family: 'Noto Sans JP', sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: 49px;\n    \n    \n}\n.info-description{\n    font-size: 1rem;\n    text-align: left;\n    font-family: 'Noto Sans JP', sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 1;\n}\n@media (min-width:650px){\n    .info-title{\n        font-size: 18px;\n        \n    }\n    .info-description{\n        font-size: 18px;\n    }\n    .title_jp{\n        font-size: 30px;\n    }\n    .title_eng{\n        font-size: 130px;\n    }\n}\n.company_tel p{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n}\n.fax{\n    padding-left: 10px;\n   \n}\n\n/* styles for the lines */\n\n.info-list-item{\n    position: relative;\n}\n.info-title::before{\n    content: \"\";\n    width: 55px;\n    height: 3px;\n    background-color: #FFFFFF;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 3;\n\n}\n.info-title::after{\n    content: \"\";\n    width: 100%;\n    height: 1px;\n    background-color:  rgb(230, 235, 345); ;\n    position: absolute;\n    top: 1px;\n    left: 0;\n}\n\n\n@media (min-width:1200px){\n    .info-list-item{\n        display: flex;\n        gap:50px;\n        width: 609px;\n        height: 90px;\n    }\n    .info-title{\n        width: 55px;\n    }\n    .info-description{\n       flex: 1;\n    }\n}\n\n/* ------------------- */\n/*       contact       */\n/* ------------------- */\n#contact{\n    height: 1000px;\n    /* margin-top: 80px; */\n    background-color: var(--section-bg);  \n}\n/* ------------------- */\n/*       footer        */\n/* ------------------- */\n\n#footer{\n    width: 100%;\n    height: 100px;\n    background-color: #000000;\n    display: grid;\n    place-items: center;\n}\n\n.copyright{\n    color: #FFFFFF;\n    font-family: 'Noto Sans JP', sans-serif;\n    font-size: 12px;\n    letter-spacing: 0.48px;\n    text-align: center;\n}\n\n@media (min-width:769px){\n    .copyright{\n        font-size: 18px;\n        letter-spacing: 0.72px;\n    }  \n}\n\n@media (min-width:1050px){\n    .title_jp{\n        font-size: 30px;\n    }\n    .title_eng{\n        font-size: 130px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/transparentBkg/transparentBkg2x.png":
/*!***************************************************************!*\
  !*** ./src/assets/images/transparentBkg/transparentBkg2x.png ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "transparentBkg2x.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// new

const container = document.querySelector(".carousel-container");
const slide = document.querySelector(".slides");

let slides = document.querySelectorAll(".slide");
let index = 1;
const interval = 3000;
let slideInterval; // Variable to hold the interval ID

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

const secondClone = slides[1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.append(firstClone);
slide.prepend(lastClone);
slide.append(secondClone);

const slidesWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slidesWidth * index}px)`;

const startSlide = () => {
  slideInterval = setInterval(() => {
    index++;
    slide.style.transform = `translateX(${-slidesWidth * index}px)`;
    slide.style.transition = "0.7s";
  }, interval);
};

const pauseSlide = () => {
  clearInterval(slideInterval); // Clear the interval when not in focus
};

const resumeSlide = () => {
  startSlide(); // Resume the slide when the page regains focus
};

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    pauseSlide();
  } else {
    resumeSlide();
  }
});

slide.addEventListener("transitionend", () => {
  slides = document.querySelectorAll(".slide");
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slidesWidth * index}px)`;
  }
});

startSlide();

//nav

document.addEventListener("DOMContentLoaded", function () {
  // Get the checkbox input and navigation links
  const checkbox = document.getElementById("hamburger-btn");
  const navLinks = document.querySelectorAll(".nav-links");

  // Add a click event listener to each navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Uncheck the checkbox to close the navigation menu
      checkbox.checked = false;
    });
  });
});

//service carosel

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".carousel");
//   var instances = M.Carousel.init(elems, {
//     indicators: true,
//     shift: 100,
//     duration: 250,
//   });
// });

//smooth scroll

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//animations



  gsap.registerPlugin(ScrollTrigger);

  function activateAnimations(){
    if (window.innerWidth <= 1200) { // Change the screen width threshold as needed
        // gsap.to(".bg-img", {
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: ".about-container",
        //     start: "-200px 20%",
        //     end: "200px 70%",
        //     scrub: true,
        //     markers: false,
        //   },
        //   // duration:2.5,
        //   clipPath:'inset(0 0 0 0)',
        // });
    
        // gsap.to(".service-container", {
        //   scrollTrigger: {
        //     trigger: ".service-container",
        //     start: "-100px 60%",
        //     end: ".carousel",
        //     // scrub: 2,
        //     markers: false,
        //   },
        //   "--clip": 'circle(62.1% at 50% 50%)',
        //   duration: 3,
        // });
    
        gsap.to(".company-container", {
          scrollTrigger: {
            trigger: ".company-container",
            start: "-100px 60%",
            end: ".csompany-info",
            scrub: true,
            markers: false,
          },
          "--clip": 'circle(62.1% at 50% 50%)',
          duration: 15,
        });
      }else {
        // gsap.to(".about-container", {
        //     scrollTrigger: {
        //       trigger: ".about-container",
        //       start: "-100px 60%",
        //       end: ".about-top-title_jp",
        //       scrub: true,
        //       markers: false,
        //     },
        //     borderRadius:"50%",
        //     duration: 15,
        //   });
    
          // gsap.to(".service-container", {
          //   scrollTrigger: {
          //     trigger: ".service-container",
          //     start: "-100px 60%",
          //     end: ".carousel",
          //     scrub: 2,
          //     markers: false,
          //   },
          //   borderRadius:"50%",
          //   duration: 3,
          // });
          gsap.to(".company-container", {
            scrollTrigger: {
              trigger: ".company-container",
              start: "-100px 60%",
              end: ".csompany-info",
              scrub: true,
              markers: false,
            },
            borderRadius:"50%",
            duration: 15,
          });
      }
    
  }

  activateAnimations();
  

  //animations for the about section

  const tl = gsap.timeline();

  tl
  .to(".bg-img", { clipPath: 'circle(63% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(65% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(66% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(67% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(68% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(69% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(70% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(71% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(72% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(73% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(74% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(75% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(76% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(77% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(78% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(79% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(80% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(81% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(82% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(83% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(84% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'circle(85% at 50% 50%)' })
  .to(".bg-img", { clipPath: 'inset(0 0 0 0)' });



ScrollTrigger.create({
  trigger: ".bg-img",
  start: "top center",
  end: "bottom center",
  scrub: -1, // Enable scrubbing
  animation: tl, // Specify the GSAP timeline to be scrubbed
});

  

const tl2 = gsap.timeline({
  scrollTrigger: ".animate-4",
  start: "60% bottom",
 
});

tl2
  .from(".animate-1", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-2", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-3", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-4", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-5", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-6", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-7", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-8", { y: 100, opacity: 0, duration: 0.4 });

   //animations for the service section

   const tl3 = gsap.timeline();
   
   tl3
   .to(".service-bg-img", { clipPath: 'circle(60% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(65% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(66% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(67% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(68% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(69% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(70% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(71% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(72% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(73% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(74% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(75% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(76% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(77% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(78% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(79% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(80% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(81% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(82% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(83% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(84% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'circle(85% at 50% 50%)' })
  .to(".service-bg-img", { clipPath: 'inset(0 0 0 0)' });


  ScrollTrigger.create({
    trigger: ".service-bg-img",
    start: "top center",
    end: "bottom center",
    scrub: -1, // Enable scrubbing
    animation: tl3, // Use the correct timeline variable
    markers: true
  });
  
})();

/******/ })()
;
//# sourceMappingURL=main1a781d5867c0e8f43e97.js.map