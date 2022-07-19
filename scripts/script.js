// FIXED NAVBAR
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// SPLIDE JS
var splideCharacter = new Splide("#splideCharacter", {
  perPage: 3,
  rewind: true,
  // width: "19.5rem",
  autoWidth: true,
  // heigth: "30rem",
  autoHeight: true,
  gap: "6.2rem",
  padding: "2.25rem",
});

splideCharacter.mount();

var splideStories = new Splide("#splideStory", {
  perPage: 3,
  rewind: true,
  // width: "19.5rem",
  autoWidth: true,
  // heigth: "30rem",
  autoHeight: true,
  gap: "5.7rem",
  padding: "2rem",
});

splideStories.mount();
