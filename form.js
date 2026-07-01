const form = document.querySelector(".form");
const main = document.querySelector(".main");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const questionValue = document.querySelector("#question").value;
  const answerValue = document.querySelector("#answer").value;
  const tagValue = document.querySelector("#tag").value;

  const card = document.createElement("article");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.classList.add("card__title");
  title.textContent = questionValue;
  card.appendChild(title);

  const answer = document.createElement("p");
  answer.classList.add("card__answer", "hidden");
  answer.textContent = answerValue;
  card.appendChild(answer);

  const button = document.createElement("button");
  button.classList.add("card__button");
  button.textContent = "Show answer";
  card.appendChild(button);

  const bookmarkIcon = document.createElement("div");
  bookmarkIcon.classList.add("card__bookmark");
  card.appendChild(bookmarkIcon);

  const bookmarkImg = document.createElement("img");
  bookmarkImg.src = "./assets/bookmark.svg";
  bookmarkImg.alt = "Not bookmarked";
  bookmarkIcon.appendChild(bookmarkImg);

  const tags = document.createElement("div");
  tags.classList.add("card__tags");
  card.appendChild(tags);

  const tag = document.createElement("span");
  tag.classList.add("card__tag");
  tag.textContent = tagValue;
  tags.appendChild(tag);

  button.addEventListener("click", function () {
    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
      button.textContent = "Show answer";
    } else {
      button.textContent = "Hide answer";
    }
  });

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

  main.appendChild(card);

  form.reset();
});

function updateCounter(field, counter) {
  const remaining = 150 - field.value.length;
  counter.textContent = remaining + " characters left";
}

const questionField = document.querySelector("#question");
const questionCounter = document.querySelector("#question__counter");

questionField.addEventListener("input", function () {
  updateCounter(questionField, questionCounter);
});

const answerField = document.querySelector("#answer");
const answerCounter = document.querySelector("#answer__counter");

answerField.addEventListener("input", function () {
  updateCounter(answerField, answerCounter);
});
