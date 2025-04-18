let fortunes = [
	"You will have a <span style='font-size: 40px; color: #5dade2;'>GLORIOUS</span> day.",
	"You will consume much <span style='letter-spacing: 1em; color: #f39c12;'>cheese</span>.",
	"A <span style='color: #27ae60;'>surprise visitor</span> brings good news.",
	"Today is a perfect day to <span style='text-decoration: underline;'>try something new</span>.",
	"Fortune favors the <span style='font-weight: bold;'>bold</span>.",
	"You will find joy in <span style='color: #9b59b6;'>unexpected places</span>.",
	"Your ideas will <span style='text-transform: uppercase;'>shine</span> today.",
	"A small act of <span style='color: #e74c3c;'>kindness</span> will return to you multiplied.",
	"Creativity flows like a <span style='font-style: italic;'>river</span> today.",
	"A <span style='background: #f1c40f;'>golden opportunity</span> is coming.",
	"Trust your <span style='font-variant: small-caps;'>instincts</span>.",
	"A good laugh will come at just the right time."
]

let currentFortuneIndex = 0
let output = document.querySelector('#output')

function updateFortune(index) {
	output.classList.remove('fade-in')
	void output.offsetWidth
	output.innerHTML = fortunes[index]
	output.classList.add('fade-in')
}

function nextFortune() {
	currentFortuneIndex++
	if (currentFortuneIndex >= fortunes.length) {
		currentFortuneIndex = 0
	}
	updateFortune(currentFortuneIndex)
}

function prevFortune() {
	currentFortuneIndex--
	if (currentFortuneIndex < 0) {
		currentFortuneIndex = fortunes.length - 1
	}
	updateFortune(currentFortuneIndex)
}

function randomFortune() {
	let randomIndex = Math.floor(Math.random() * fortunes.length)
	currentFortuneIndex = randomIndex
	updateFortune(randomIndex)
}

document.querySelector("#buttonNext").addEventListener('click', nextFortune)
document.querySelector("#buttonPrev").addEventListener('click', prevFortune)
document.querySelector("#buttonRandom").addEventListener('click', randomFortune)
