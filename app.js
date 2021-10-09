const header = document.querySelector("header");
const sticky = header.offsetTop;
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= sticky + 120) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
