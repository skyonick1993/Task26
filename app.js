let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let currentSlide = 0;
let Items = $$(".p-design__image > img");

function renderSlide() {
  for (let i = 0; i < Items.length; i++) {
    if (i === currentSlide) {
      Items[i].classList.add("is-active");
    }
  }
}

function clearSlide() {
  for (let i = 0; i < Items.length; i++) {
    Items[i].classList.remove("is-active");
  }
}

function nextSlide() {
  currentSlide = currentSlide >= Items.length - 1 ? 0 : currentSlide + 1;
  clearSlide();
  renderSlide();
}

function prevSlide() {
  currentSlide = currentSlide <= 0 ? Items.length - 1 : currentSlide - 1;
  clearSlide();
  renderSlide();
}

$("#next").addEventListener("click", nextSlide);
$("#prev").addEventListener("click", prevSlide);
