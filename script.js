let settings = {
  numberOfArticles: 20,
  fontSize: 18,
  backgroundColor: "#0000ff",
  textColor: "#f2f2f2",
};

let sound = document.querySelector("#hoverSound");

document.querySelector("#controlsNumberOfArticles").addEventListener("input", function () {
  settings.numberOfArticles = this.value;
  document.querySelector("#controlsNumberOfArticlesLabel").textContent = this.value;
});

document.querySelector("#controlsFontSize").addEventListener("input", function () {
  settings.fontSize = this.value;
  document.querySelector("#controlsFontSizeLabel").textContent = this.value;
});

document.querySelector("#controlsBackgroundColor").addEventListener("input", function () {
  settings.backgroundColor = this.value;
  document.querySelector("#controlsBackgroundColorLabel").textContent = this.value;
});

document.querySelector("#controlsTextColor").addEventListener("input", function () {
  settings.textColor = this.value;
  document.querySelector("#controlsTextColorLabel").textContent = this.value;
});

function getRandomArticles() {
  const container = document.querySelector(".container");
  const preview = document.querySelector("#previewPanel");
  preview.classList.remove("active");
  document.querySelector("#previewContent").textContent = "Click an article to see a preview.";
  container.innerHTML = "";

  let url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=random&rnnamespace=0&rnlimit=${settings.numberOfArticles}`;

  fetch(url)
    .then(res => res.json())
    .then(res => {
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

        link.addEventListener("mouseenter", () => {
          sound.currentTime = 0;
          sound.play();
        });

        link.addEventListener("click", (e) => {
          e.preventDefault();
          fetchPreview(entry.title);
        });

        container.appendChild(link);
      });
    });
}

function fetchPreview(title) {
  let preview = document.querySelector("#previewPanel");
  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
    .then(res => res.json())
    .then(data => {
      preview.classList.add("active");
      document.querySelector("#previewContent").innerHTML = `
        <strong>${data.title}</strong><br>
        ${data.extract || "No preview available."}
      `;
    });
}

document.querySelector("#generateButton").addEventListener("click", getRandomArticles);
