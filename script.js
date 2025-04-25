let synth = new Tone.Synth().toDestination();
let container = document.getElementById("container");
let noteDisplay = document.getElementById("note-display");
let notesPlayed = [];

function playNote(note) {
	synth.triggerAttackRelease(note, "8n");
	notesPlayed.push(note);
	if (notesPlayed.length > 10) notesPlayed.shift();
	noteDisplay.textContent = notesPlayed.join('');
}

function randomNote() {
	let notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
	let octave = Math.floor(Math.random() * 4) + 3;
	return notes[Math.floor(Math.random() * notes.length)] + octave;
}

function generateTiles() {
	container.innerHTML = "";
	let count = Math.floor(Math.random() * 51) + 30;

	for (let i = 0; i < count; i++) {
		let hex = document.createElement("div");
		hex.classList.add("hex");

		let size = Math.floor(Math.random() * 80) + 50;
		hex.style.setProperty("--size", `${size}px`);

		let red = Math.floor(Math.random() * 256);
		let green = Math.floor(Math.random() * 256);
		let blue = Math.floor(Math.random() * 256);
		hex.style.setProperty("--bg", `rgb(${red},${green},${blue})`);

		let note = randomNote();

		hex.addEventListener('mouseenter', () => {
			let hoverNote = randomNote();
			playNote(hoverNote);
			let hoverRed = Math.floor(Math.random() * 256);
			let hoverGreen = Math.floor(Math.random() * 256);
			let hoverBlue = Math.floor(Math.random() * 256);
			hex.style.setProperty("--bg", `rgb(${hoverRed},${hoverGreen},${hoverBlue})`);
		});

		hex.addEventListener('click', () => {
			let loop = new Tone.Loop(() => playNote(note), "4n").start(0);
			Tone.Transport.start();
		});

		container.appendChild(hex);
	}
}

document.addEventListener('click', async () => {
	await Tone.start();
	generateTiles();
	setInterval(generateTiles, 10000);
}, { once: true });
