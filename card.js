const answerButton = document.querySelector(".card__button");
const answerText = document.querySelector(".card__answer");

answerButton.addEventListener("click", function () {
  answerText.classList.toggle("hidden");

  if (answerText.classList.contains("hidden")) {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
});

const bookmarkIcon = document.querySelector(".card__bookmark");
const bookmarkImg = bookmarkIcon.querySelector("img");

bookmarkIcon.addEventListener("click", function () {
  bookmarkIcon.classList.toggle("card__bookmark--active");

  if (bookmarkIcon.classList.contains("card__bookmark--active")) {
    bookmarkImg.src = "./assets/bookmark--filled.svg";
    bookmarkImg.alt = "Bookmarked";
  } else {
    bookmarkImg.src = "./assets/bookmark.svg";
    bookmarkImg.alt = "Not bookmarked";
  }
});
