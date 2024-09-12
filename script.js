const shareButton = document.querySelector(".card__share-btn");
const shareOptions = document.querySelector(".share__options");
const shareOptionsMobile = document.querySelector(".share__options-mobile");
const shareButtonClose = document.querySelector(".card__share-btn--close");

shareButton.addEventListener("click", () => {
  if (+window.innerWidth <= 1000) {
    console.log("Hey");
    shareOptionsMobile.classList.toggle("scale");
  } else {
    shareOptions.classList.toggle("scale");
  }
});

shareButtonClose.addEventListener("click", () => {
  shareOptionsMobile.classList.remove("scale");
});
