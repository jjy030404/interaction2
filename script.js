* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	background: #fdfdfd;
	color: #222;
	font-family: "Helvetica Neue", sans-serif;
	padding-bottom: 100px;
}

.title {
	text-align: center;
	font-size: 2.5rem;
	margin-top: 40px;
	margin-bottom: 10px;
	color: #333;
}

.controls {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;
	padding: 30px;
}

.controls-buttons {
	display: flex;
	justify-content: center;
	gap: 10px;
	flex-wrap: wrap;
}

button {
	background-color: #222;
	color: #fff;
	border: none;
	padding: 12px 20px;
	border-radius: 6px;
	font-size: 1rem;
	cursor: pointer;
	transition: 0.3s ease;
}

button:hover {
	background-color: #444;
}

#container {
	transition: 0.4s ease;
	padding: 30px;
	max-width: 800px;
	margin: 0 auto;
	line-height: 1.6;
	font-size: 1.1rem;
}

.clean {
	font-family: "Inter", sans-serif;
	color: #333;
	font-size: 20px;
	line-height: 1.6;
	padding: 20px;
	background-color: #fff;
	border-radius: 12px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.pretty {
	font-family: "Playfair Display", serif;
	color: #4e2a84;
	background-color: #f2ecfa;
	font-size: 22px;
	padding: 30px;
	border-radius: 16px;
	line-height: 2;
	letter-spacing: 0.02em;
	box-shadow: 0 10px 30px rgba(78, 42, 132, 0.1);
}

.ugly {
	font-family: "Comic Sans MS", cursive;
	color: lime;
	background-color: yellow;
	letter-spacing: 0.3em;
	text-shadow: 2px 2px 0 red;
	transform: rotate(1.5deg);
	font-size: 24px;
	padding: 25px;
}

