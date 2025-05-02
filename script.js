let settings = {
  numberOfArticles: 20,
  fontSize: 18,
  backgroundColor: "#0000ff",
  textColor: "#ffffff",
};

document.addEventListener("DOMContentLoaded", () => {
  let synth = null;
  const previewPanel = document.querySelector("#previewPanel");
  const previewContent = document.querySelector("#previewContent");

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
    previewPanel.classList.remove("active");
    previewContent.textContent = "Hover over an article to preview it.";
    container.innerHTML = "";

    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=random&rnnamespace=0&rnlimit=${settings.numberOfArticles}`;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        const articles = res.query.random;
        articles.forEach((entry, i) => {
          const link = document.createElement("a");
          link.href = `https://en.wikipedia.org/wiki/${entry.title}`;
          link.target = "_blank";
          link.textContent = entry.title;
          link.style.fontSize = `${settings.fontSize}px`;
          link.style.backgroundColor = settings.backgroundColor;
          link.style.color = settings.textColor;
          link.style.animationDelay = `${i * 0.05}s`;

          link.addEventListener("mouseenter", () => {
            if (synth) {
              playRandomTone(synth);
            }
            changeRandomBackground();
            fetchPreview(entry.title);
          });

          container.appendChild(link);
        });
      });
  }

  function playRandomTone(synthInstance) {
    const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    synthInstance.triggerAttackRelease(randomNote, "8n");
  }

  function changeRandomBackground() {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 90%)`;
    document.body.style.backgroundColor = randomColor;
  }

  function fetchPreview(title) {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
      .then(res => res.json())
      .then(data => {
        previewPanel.classList.add("active");
        previewContent.innerHTML = `
          <strong>${data.title}</strong><br>
          ${data.extract || "No preview available."}
        `;
      });
  }

  document.querySelector("#generateButton").addEventListener("click", async () => {
    await Tone.start();
    synth = new Tone.Synth().toDestination(); // ✅ 제스처 후에 생성
    getRandomArticles();
  });
});
