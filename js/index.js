AOS.init({
  // disable: () => {
  //   const maxWidth = 940;
  // 	return window.innerWidth < maxWidth;
  // },
});
const navItems = document.querySelectorAll(".hamburger__navigation-element");
const selectInput = document.getElementById("hamburger");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    selectInput.checked = false;
  });
});

const offset = 100;
const scrollUpEl = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = "stoke-dashoffset 20ms";

// update dashhoffset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;

  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//onScroll
window.addEventListener("scroll", () => {
  updateDashoffset();

  if (getTop() > offset) {
    scrollUpEl.classList.add("scroll-up--visible");
  } else {
    scrollUpEl.classList.remove("scroll-up--visible");
  }
});

//onClick

scrollUpEl.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Tabs functionality

document.querySelectorAll(".tabs-trigers__item").forEach((item) =>
  item.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(e.target)
    const id = e.target.getAttribute("href").replace("#", "");

    document
      .querySelectorAll(".tabs-trigers__item")
      .forEach((child) => child.classList.remove("tabs-trigers__item--active"));

    document
      .querySelectorAll(".tabs-content__item")
      .forEach((child) => child.classList.remove("tabs-content__item--active"));

    item.classList.add("tabs-trigers__item--active");
    document.getElementById(id).classList.add("tabs-content__item--active");
  })
);

document.querySelector(".tabs-trigers__item").click();
