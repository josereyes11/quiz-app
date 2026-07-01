const toggleButton = document.querySelector(".profile__setting-toggle");
const toggleIcon = document.querySelector(".profile__setting-icon");
const toggleLabel = document.querySelector(".profile__setting-label");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleIcon.src = "./assets/sun.svg";
    toggleIcon.alt = "Light mode";
    toggleLabel.textContent = "Lightmode";
    document.body.style.setProperty("--color-bg", "#f5f7ff;");
    document.body.style.setProperty("--color-surface", "#ffffff;");
    document.body.style.setProperty("--color-border", "#dde1f0;");
    document.body.style.setProperty("--color-accent", "#2563eb;");
    document.body.style.setProperty("--color-accent-secondary", "#00a87a;");
    document.body.style.setProperty("--color-text-primary", "#1a1d27;");
    document.body.style.setProperty("--color-text-secondary", "#5a6070;");
    document.body.style.setProperty("--color-tag-bg", "#e8edf8;");
    document.body.style.setProperty("--color-tag-text", "#2563eb;");
  } else {
    toggleIcon.src = "./assets/moon.svg";
    toggleIcon.alt = "Dark mode";
    toggleLabel.textContent = "Darkmode";
    document.body.style.setProperty("--color-bg", "#0f1117;");
    document.body.style.setProperty("--color-surface", "#1a1d27;");
    document.body.style.setProperty("--color-border", "#2e3240;");
    document.body.style.setProperty("--color-accent", "#4f8ef7;");
    document.body.style.setProperty("--color-accent-secondary", "#00d4aa;");
    document.body.style.setProperty("--color-text-primary", "#e8eaf0;");
    document.body.style.setProperty("--color-text-secondary", "#8b90a0;");
    document.body.style.setProperty("--color-tag-bg", "#2a3050;");
    document.body.style.setProperty("--color-tag-text", "#4f8ef7;");
  }
});
