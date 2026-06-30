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

  const answer = document.createElement("p");
  answer.classList.add("card__answer", "hidden");
  answer.textContent = answerValue;

  const button = document.createElement("button");
  button.classList.add("card__button");
  button.textContent = "Show answer";

  const bookmark = document.createElement("div");
  bookmark.classList.add("card__bookmark");

  const bookmarkImg = document.createElement("img");
  bookmarkImg.src = "./assets/bookmark.svg";
  bookmarkImg.alt = "Not bookmarked";

  const tags = document.createElement("div");
  tags.classList.add("card__tags");

  const tag = document.createElement("span");
  tag.classList.add("card__tag");
  tag.textContent = tagValue;

  card.appendChild(title);
  card.appendChild(answer);
  card.appendChild(button);
  card.appendChild(bookmark);
  card.appendChild(tags);

  bookmark.appendChild(bookmarkImg);
  tags.appendChild(tag);

  main.appendChild(card);

  form.reset();
});
