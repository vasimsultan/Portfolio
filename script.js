/* ----------------- TYPING EFFECT -------- */

new Typed(".typing", {
  strings: ["Web Developer", "Frontend Developer", "UI Designer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

/* --------- THEME TOGGLE -------------- */

const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

/* ---------------- SMOOTH SCROLL ------------------------ */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* -----------------   SCROLL ANIMATION ------------------------ */

const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});


