const burger = document.querySelector(".logo");
const dropBtn = document.querySelectorAll("#list-link");
const dropdown = document.querySelectorAll(".list-content");
const mobileNav = document.querySelector(".header__mobile-menu");
burger.addEventListener("click", function () {
  if (burger.getAttribute("src") === "../../images/icon-hamburger.svg") {
    burger.src = "../../images/icon-close.svg";
    mobileNav.classList.add("nav-active");
  } else {
    burger.src = "../../images/icon-hamburger.svg";
    mobileNav.classList.remove("nav-active");
  }
});

for (let i = 0; i < dropBtn.length; i++) {
  dropBtn[i].addEventListener("click", function () {
    dropdown[i].classList.toggle("show");
  });
}
