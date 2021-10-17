const header = document.querySelector("header");
const sticky = header.offsetTop;
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= sticky + 120) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const projects = document.querySelectorAll(".project");
const projectImages = document.querySelectorAll(".project img");
projects.forEach((project) => {
  project.addEventListener("mouseover", (e) => {
    e.currentTarget.firstElementChild.style.transform = "scale(1.1)";
    e.currentTarget.firstElementChild.style.transition = "all 0.3s ease-in-out";
  });
});

projects.forEach((project) => {
  project.addEventListener("mouseleave", (e) => {
    e.currentTarget.firstElementChild.style.transform = "scale(1)";
    e.currentTarget.firstElementChild.style.transition = "all 0.3s ease-in-out";
  });
});
