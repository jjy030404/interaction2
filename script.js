let settings = {
  numberOfArticles: 20,
  fontSize: 18,
  backgroundColor: "#0000ff",
  textColor: "#ffffff",
};

let controlsNumberOfArticles = document.querySelector("#controlsNumberOfArticles");
let controlsNumberOfArticlesLabel = document.querySelector("#controlsNumberOfArticlesLabel");
let controlsFontSize = document.querySelector("#controlsFontSize");
let controlsFontSizeLabel = document.querySelector("#controlsFontSizeLabel");
let controlsBackgroundColor = document.querySelector("#controlsBackgroundColor");
let controlsBackgroundColorLabel = document.querySelector("#controlsBackgroundColorLabel");
let controlsTextColor = document.querySelector("#controlsTextColor");
let controlsTextColorLabel = document.querySelector("#controlsTextColorLabel");

controlsNumberOfArticles.addEventListener("input", function () {
  settings.numberOfArticles = this.value;
  controlsNumberOfArticlesLabel.textContent = this.value;
});

controlsFontSize.addEventListener("input", function () {
  settings.fontSize = this.value;
  controlsFontSizeLabel.textContent = this.value;
});

controlsBackgroundColor.addEventListener("input", function () {
  settings.backgroundColor = this.value;
  controlsBackgroundColorLabel.textContent = this.value;
});

controlsTextColor.addEventListener("input", function () {
  settings.textColor = this.value;
  controlsTextColorLabel.textContent = this.value;
});

function getRandomArticles() {
  let container = document.querySelector(".container");
  container.innerHTML = "";

  let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=random&rnnamespace=0&rnlimit=${settings.numberOfArticles}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      let articles = res.query.random;
      articles.forEach((entry, i) => {
        let link = document.createElement("a");
        link.href = `https://en.wikipedia.org/wiki/${entry.title}`;
        link.target = "_blank";
        link.textContent = entry.title;
        link.style.fontSize = `${settings.fontSize}px`;
        link.style.backgroundColor = settings.backgroundColor;
        link.style.color = settings.textColor;
        link.style.animationDelay = `${i * 0.05}s`;
        container.appendChild(link);
      });
    });
}

document.querySelector("#generateButton").addEventListener("click", () => {
  const sound = document.querySelector("#clickSound");
  sound.currentTime = 0;
  sound.play();
  getRandomArticles();
});
