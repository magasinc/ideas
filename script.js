const letterWrap = document.querySelector(".letter-wrap");
const openButton = document.querySelector("#openLetter");

function openLetter() {
  if (letterWrap.classList.contains("is-open")) {
    return;
  }

  openButton.setAttribute("aria-expanded", "true");
  letterWrap.classList.add("is-opening");

  window.setTimeout(() => {
    letterWrap.classList.add("is-open");
  }, 720);
}

openButton.addEventListener("click", openLetter);

openButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLetter();
  }
});
