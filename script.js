let container = document.querySelector('#container')

function resetAllStyles() {
	container.removeAttribute('class')
	container.removeAttribute('style')
}

let buttonReset = document.querySelector('#reset')
buttonReset.addEventListener('click', resetAllStyles)

let buttonClean = document.querySelector('#buttonClean')
buttonClean.addEventListener('click', function() {
	resetAllStyles()
	container.classList.add('clean')
})

let buttonPoetic = document.querySelector('#buttonPoetic')
buttonPoetic.addEventListener('click', function() {
	resetAllStyles()
	container.style.fontFamily = 'Georgia, serif'
	container.style.letterSpacing = '-0.1em'
	container.style.textAlign = 'center'
	container.style.fontSize = '64px'
	container.style.wordSpacing = '2em'
	container.style.lineHeight = '3em'
	container.style.background = '#f9f3ee'
	container.style.padding = '50px'
	container.style.borderRadius = '20px'
})

let buttonPretty = document.querySelector('#buttonPretty')
buttonPretty.addEventListener('click', function() {
	resetAllStyles()
	container.classList.add('pretty')
})

let buttonUgly = document.querySelector('#buttonUgly')
buttonUgly.addEventListener('click', function() {
	resetAllStyles()
	container.classList.add('ugly')
})

let buttonScary = document.querySelector('#buttonScary')
buttonScary.addEventListener('click', function() {
	resetAllStyles()
	container.style.fontFamily = "'Creepster', cursive"
	container.style.color = 'red'
	container.style.backgroundColor = '#000'
	container.style.fontSize = '30px'
	container.style.textTransform = 'uppercase'
	container.style.letterSpacing = '0.4em'
	container.style.textShadow = '0 0 12px white'
	container.style.padding = '60px'
	container.style.borderRadius = '12px'
})

let buttonFriendly = document.querySelector('#buttonFriendly')
buttonFriendly.addEventListener('click', function() {
	resetAllStyles()
	container.style.fontFamily = "'Comic Sans MS', cursive"
	container.style.color = '#1b5e20'
	container.style.backgroundColor = '#e8f5e9'
	container.style.fontSize = '22px'
	container.style.padding = '30px'
	container.style.borderRadius = '16px'
	container.style.lineHeight = '2'
	container.style.boxShadow = '0 0 20px rgba(0,0,0,0.1)'
})
