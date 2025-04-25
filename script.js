let synth = new Tone.Synth().toDestination();
let container = document.querySelector("#container");

function playRandomNote() {
	let notes = ["C", "D", "E", "F", "G", "A", "B"];
	let octave = Math.floor(Math.random() * 4) + 3;
	let note = notes[Math.floor(Math.random() * notes.length)];
	synth.triggerAttackRelease(note + octave, "8n");
}

function generateDivs() {
	container.innerHTML = "";

	let count = Math.floor(Math.random() * 101);

	for (let i = 0; i < count; i++) {
		let newElement = document.createElement("div");

		let red = Math.floor(Math.random() * 256);
		let green = Math.floor(Math.random() * 256);
		let blue = Math.floor(Math.random() * 256);

		newElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

		newElement.addEventListener('mouseenter', function() {
			playRandomNote();
			let hoverRed = Math.floor(Math.random() * 256);
			let hoverGreen = Math.floor(Math.random() * 256);
			let hoverBlue = Math.floor(Math.random() * 256);
			newElement.style.backgroundColor = `rgb(${hoverRed}, ${hoverGreen}, ${hoverBlue})`;
		});

		container.appendChild(newElement);
	}
}

document.addEventListener('click', async () => {
	await Tone.start();
	generateDivs();
	setInterval(generateDivs, 1000);
}, { once: true });
