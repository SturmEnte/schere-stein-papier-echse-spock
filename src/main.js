// 0 schere, 1 stein, 2 papier, 3 echse, 4 spock
document.getElementById("schere").addEventListener("click", () => play(0));
document.getElementById("stein").addEventListener("click", () => play(1));
document.getElementById("papier").addEventListener("click", () => play(2));
document.getElementById("echse").addEventListener("click", () => play(3));
document.getElementById("spock").addEventListener("click", () => play(4));

const GAME_SCREEN = document.getElementById("game-screen");
const END_SCREEN = document.getElementById("end-screen");

const RESULT_TEXT = ["Unentschieden", "Du hast verloren", "Du hast gewonnen"];

function play(choice) {
	let botChoice = Math.floor(Math.random() * 5);

	switch (choice) {
		case 0: // Schere
			if (botChoice == 0) {
				// Schere
				document.getElementById("result").innerHTML = RESULT_TEXT[0];
			} else if (botChoice == 1) {
				// Stein
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			} else if (botChoice == 2) {
				// Papier
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			} else if (botChoice == 3) {
				// Echse
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			} else if (botChoice == 4) {
				// Spock
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			}
			break;
		case 1: // Stein
			if (botChoice == 0) {
				// Schere
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			} else if (botChoice == 1) {
				// Stein
				document.getElementById("result").innerHTML = RESULT_TEXT[0];
			} else if (botChoice == 2) {
				// Papier
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			} else if (botChoice == 3) {
				// Echse
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			} else if (botChoice == 4) {
				// Spock
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			}
			break;
		case 2: // Papier
			if (botChoice == 0) {
				// Schere
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			} else if (botChoice == 1) {
				// Stein
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			} else if (botChoice == 2) {
				// Papier
				document.getElementById("result").innerHTML = RESULT_TEXT[0];
			} else if (botChoice == 3) {
				// Echse
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			} else if (botChoice == 4) {
				// Spock
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			}
			break;
		case 3: // Echse
			if (botChoice == 0) {
				// Schere
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			} else if (botChoice == 1) {
				// Stein
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			} else if (botChoice == 2) {
				// Papier
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			} else if (botChoice == 3) {
				// Echse
				document.getElementById("result").innerHTML = RESULT_TEXT[0];
			} else if (botChoice == 4) {
				// Spock
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			}
			break;
		case 4: // Spock
			if (botChoice == 0) {
				// Schere
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			} else if (botChoice == 1) {
				// Stein
				document.getElementById("result").innerHTML = RESULT_TEXT[2];
			} else if (botChoice == 2) {
				// Papier
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			} else if (botChoice == 3) {
				// Echse
				document.getElementById("result").innerHTML = RESULT_TEXT[0];
			} else if (botChoice == 4) {
				// Spock
				document.getElementById("result").innerHTML = RESULT_TEXT[1];
			}
			break;
	}

	GAME_SCREEN.style.display = "none";
	END_SCREEN.style.display = "block";
}

document.getElementById("play-again").addEventListener("click", () => {
	GAME_SCREEN.style.display = "block";
	END_SCREEN.style.display = "none";
});
