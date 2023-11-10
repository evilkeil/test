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

  // const tl = gsap.timeline();


 

const tl2 = gsap.timeline({
  scrollTrigger: ".animate-2",
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
    trigger: "#serviceTrigger",
    start: "top center",
    end: "500px top",
    scrub: -1, // Enable scrubbing
    animation: tl3, // Use the correct timeline variable
    markers: false
  });



  ///////////// 

 
// const tl6 = gsap.timeline();

// tl6.to(".animate-svg", {
//     attr: { d: "M600,112.77C268.63,112.77,0,65.52,0,100V120H1200V100C1200,65.52,931.37,112.77,600,112.77Z" },
//     duration: 1, // Adjust the duration as needed
//     ease: "none",
// });

// ScrollTrigger.create({
//     trigger: "#serviceTrigger",
//     start: "top center",
//     end: "500px top",
//     scrub: 1, // Enable scrubbing
//     animation: tl6,
//     markers: false
// });

const tl6 = gsap.timeline();

tl6.to(".service-container", {
    borderRadius:"0%",
});

ScrollTrigger.create({
    trigger: "#serviceTrigger",
    start: "top center",
    end: "500px top",
    scrub: 1, // Enable scrubbing
    animation: tl6,
    markers: false
});
  
const circle = document.querySelector('.circle');

gsap.to(circle, {
    width: 200, // Adjust the expanded size as needed
    height: 200, // Adjust the expanded size as needed
    duration: 1, // Adjust the animation duration
    scrollTrigger: {
        trigger: '#service', // Specify the trigger element by ID
        start: 'top center', // Start the animation when the top of the section reaches the center of the viewport
        end: 'bottom center', // End the animation when the bottom of the section reaches the center of the viewport
        scrub: 1, // Enable scrubbing for a smooth effect
    },
});
   //animations for the company section


   let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".company-hero",
      start: "top top",
      scrub: true,
      pin: true,
    //  markers: true
    }
  });
  
  tl4.to(".dot", {scale:1})
    .to(".company-title", {x:"-100vw", xPercent:-100}, 0)
    .set(".company-main", {backgroundColor:"#F0F5F5"})
  

// Create a timeline for the SVG transition

})();

/******/ })()
;
//# sourceMappingURL=main44a389be5103ff81d650.js.map