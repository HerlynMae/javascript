// slider
var slider = tns({
  container: ".my-slider",
  items: 1,
  gutter: 100,
  slideBy: "page",
  autoplay: true,
  controls: false,
  navPosition: "bottom",
});
// toggle menu

const header = document.querySelector(".header__nav");
const toggle = document.querySelector(".toggle__menu");

toggle.addEventListener("click", () => {
  header.classList.toggle("open");
  toggle.classList.toggle("open");
});

// accordion
const accordions = document.querySelectorAll("h4");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.nextElementSibling.classList.toggle("open");
    accordion.querySelector("i").classList.toggle("open");
  });
});

// tabs
const tabsNav = document.querySelectorAll(".tabs__link");
const tabsContent = document.querySelectorAll(".tabs__image");

tabsNav.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveTab() {
  tabsNav.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveContent() {
  tabsContent.forEach((tab) => {
    tab.classList.remove("active");
  });
}

// progress bar
const spans = document.querySelectorAll(".progress__bar span");

spans.forEach((span) => {
  span.style.width = span.dataset.width;
  span.innerHTML = span.dataset.width;
});
