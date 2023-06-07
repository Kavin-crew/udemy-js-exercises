///////////////////////////////////////////////////////////
// For navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
//my own version of navigation
// for overflow upon active of navigation mobile
const htmlEl = document.querySelector("html");
const bodyEl = document.querySelector("body");

// for activating nav mobile upon click
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  //to make it unscrollable in Y-axis if navigation is open
  htmlEl.classList.toggle("overflowY");
  bodyEl.classList.toggle("overflowY");
});

//for scrolling a:link for every section and works with safari
const allLinks = document.querySelectorAll("a:link");

console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = link.getAttribute("href");

    // smooth scrolling to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (
      link.classList.contains("btn-nav") &&
      headerEl.classList.contains("nav-open")
    ) {
      headerEl.classList.toggle("nav-open");
      htmlEl.classList.toggle("overflowY");
      bodyEl.classList.toggle("overflowY");
    }
  });
});

/////////////////////////////////////////////////////////
//For sticky navigation

const secionMainEl = document.querySelector(".section-main");

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (entry.isIntersecting === false) {
      document.body.classList.add("sticky-nav");
    } else {
      document.body.classList.remove("sticky-nav");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-5.6px",
  }
);
obs.observe(secionMainEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

/////////////////////////////////////////////////////////
//For accordion

// declaration
const accordionHeaderEl = document.querySelectorAll(".accordion-header");
const accordionEL = document.querySelectorAll(".accordion");

for (let i = 0; i < accordionHeaderEl.length; i++) {
  accordionHeaderEl[i].addEventListener("click", function () {
    accordionEL[i].classList.toggle("open-state");
  });
  //remove any open state
}

///////////////////////////////////////////////////////////
//my own version of navigation
// // for overflow upon active of navigation mobile
// const htmlEl = document.querySelector("html");
// const bodyEl = document.querySelector("body");

// btnNavEl.addEventListener("click", function () {
//   // for overflow upon active of navigation mobile
//   headerEl.classList.toggle("nav-open");
//   htmlEl.classList.toggle("overflowY");
//   bodyEl.classList.toggle("overflowY");

//   const howitworksEl = document.querySelector(".nav-how-it-work");
//   const mealsEl = document.querySelector(".nav-meals");
//   const testimonialsEl = document.querySelector(".nav-testimonials");
//   const pricingEl = document.querySelector(".nav-pricing");
//   const ctaEl = document.querySelector(".nav-cta");

//   howitworksEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });

//   mealsEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });

//   testimonialsEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });

//   pricingEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });

//   ctaEl.addEventListener("click", function () {
//     headerEl.classList.remove("nav-open");
//     htmlEl.classList.remove("overflowY");
//     bodyEl.classList.remove("overflowY");
//   });
// });
