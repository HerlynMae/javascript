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

// accordion
const accordions = document.querySelectorAll("h4");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.nextElementSibling.classList.toggle("open");
    accordion.querySelector("i").classList.toggle("open");
  });
});

// tabs

// const tabsNav = document.querySelectorAll(".tabs__link");
// const tabsContent = document.querySelectorAll(".tabs__image");

// tabsNav.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     removeActiveTab();
//     tab.classList.add("active");
//     const activeContent = document.querySelector(`#${tab.id}-img`);
//     removeActiveContent();
//     activeContent.classList.add("active");
//   });
// });

// function removeActiveTab() {
//   tabsNav.forEach((tab) => {
//     tab.classList.remove("active");
//   });
// }

// function removeActiveContent() {
//   tabsContent.forEach((tab) => {
//     tab.classList.remove("active");
//   });
// }
