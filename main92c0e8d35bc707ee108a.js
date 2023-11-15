/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


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
  


  //animations for the about section

  //company name
 

  const text = new SplitType('#company-name', { types: 'chars' });

  text.chars.forEach((char, i) => {
    gsap.to(char, {
      opacity: 1,
      duration: 0, // Instantly set initial opacity to 0.2
      delay: i * 0.1 // Stagger the animation by 0.1 seconds
    });
  })
 
 

  let tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-hero",
      start: "top top",
      scrub: true,
      pin: true,
    //  markers: true
    }
  });
  
  tl1.to(".about-dot", {scale:1})
  .from(".about-top_left", {opacity:0},)
  .from(".about-top_right", {opacity:0}, 1)
    .set("#about", {backgroundColor:"#F0F5F5"});
   

//about ul
const tl2 = gsap.timeline({
  scrollTrigger: ".animate-2",
  start: "60% bottom",
 
});

tl2
  .from(".animate-1", { y: 100, opacity: 0, duration: 0.4 },0.6)
  .from(".animate-2", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-3", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-4", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-5", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-6", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-7", { y: 100, opacity: 0, duration: 0.4 })
  .from(".animate-8", { y: 100, opacity: 0, duration: 0.4 });


   //animations for the service section

   let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-hero",
      start: "top top",
      scrub: true,
      pin: true,
    //  markers: true
    }
  });
  
  // tl3.to(".service-dot", {scale:1})
  //   .to(".service-title", {x:"-100vw", xPercent:-100}, 0)
  //   .set(".service-main", {backgroundColor:"#F0F5F5"})

    
  tl3.to(".service-dot", {scale:0.5})
  .to(".service-title", {x:"-50vw", xPercent:-50}, 0)
  .to(".service-dot", {scale:1})
  // .to(".service-main", {y:"-33%"})  //todo: adust the y in breakpoints
  .to(".service-main", {y:"-110px"})
  .set(".service-main", {backgroundColor:"transparent"})
  .set("#service", {backgroundColor:"#F0F5F5"})

   //animations for the company section



   let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".company-hero", //edit
      start: "top top",
      end:"+=200",
      scrub: 3,
      pin: true,
     markers: false
    }
  });
  
  tl4.to(".company-dot", {scale:0.5})
  // .from(".company-title", {x:"-100vw", xPercent:-100}, 0)
    .to(".company-title", {x:"50vw", xPercent:50}, 0)
    .to(".company-dot", {scale:1})
    .to(".company-main", {y:"-300px"})
    .set(".company-main", {backgroundColor:"#F0F5F5"},0)
    // .set("#company", {backgroundColor:"#F0F5F5"},)
    // .to(".company-main", {y:"-300px"})
    // .set(".company-main", {backgroundColor:"transparent"},-5)
  

//topics section animations

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#topics",
    start: "-=100px",
    scrub: false,
    // pin: true,
  //  markers: true
  }
});

tl5.from(".topics-title", {opacity:0})
.from(".topic", {y:-20,opacity:0}, 0.5)
  .to(".topic", {'--beforeAnimation': "100%",duration: 3}, )
  


})();

/******/ })()
;
//# sourceMappingURL=main92c0e8d35bc707ee108a.js.map