// here are the options the computer randomly selects from
var options = ["R", "P", "S"];

// define user object
var userObject = {
	stats: {
		gamesPlayed: 0,
		wins: 0,
		losses: 0,
		ties: 0
	},
	isPlaying: true
};

var gameStats = {
	wins: 0,
	losses: 0,
	ties: 0,
	rounds: 0
};

var score = "";
var winStats = "";
var loseStats = "";
var tieStats = "";
var playStats = "";
var playAgain = "";
var userChoice = "";
var computerChoice = "";

console.log(score);

while (userObject.isPlaying) {
	// alert the user about the game!
	var mainAlert = window.alert('Rock, Paper, Scissors! Press OK to continue!');

	while (gameStats.rounds < 3) {
		// Let user choose R, P or S to make their selection
		userChoice = window.prompt('Type in R, P, or S to make your selection');
		console.log(userChoice);
		// computer chooses random selection from options array
		computerChoice = options[Math.floor(Math.random * options.length)];
		console.log(computerChoice);

		if (userChoice.toUpperCase() === 'R') {
			if (computerChoice === 'R') {
				gameStats.ties = gameStats.ties + 1;
			} else if (computerChoice === 'P') {
				gameStats.losses = gameStats.losses + 1;
			} else {
				gameStats.wins += 1;
			}
            gameStats.rounds += 1;
		} else if (userChoice.toUpperCase() === 'P') {
			if (computerChoice == 'R') {
				gameStats.wins += 1;
			} else if (computerChoice == 'P') {
				gameStats.ties = gameStats.ties + 1;
			} else {
				gameStats.losses = gameStats.losses + 1;
			}
            gameStats.rounds += 1;
		} else if (userChoice.toUpperCase() === 'S') {
			if (computerChoice === 'R') {
				gameStats.losses = gameStats.losses + 1;
			} else if (computerChoice === 'P') {
				gameStats.wins += 1;
			} else {
				gameStats.ties = gameStats.ties + 1;
			}
            gameStats.rounds += 1;
		} else {
			window.prompt('That is NOT an acceptable move!');
		}
		score = `wins: ${gameStats.wins} loses: ${gameStats.losses} ties: ${gameStats.ties}`;
        window.alert(score);
	}
    
    if (gameStats.wins === gameStats.losses) {
        userObject.stats.ties += 1;
    } else if (gameStats.wins > gameStats.losses) {
        userObject.stats.wins += 1;
    } else {
        userObject.stats.losses += 1;
    }

    userObject.stats.gamesPlayed += 1;

	winStats = userObject.stats.wins;
	loseStats = userObject.stats.losses;
	tieStats = userObject.stats.ties;
	playStats = userObject.stats.gamesPlayed;

    window.alert(
		`games: ${playStats}  
		wins: ${winStats}  
		losses: ${loseStats}  
		ties: ${tieStats}`
		);

    playAgain = window.confirm("Would you like to play again?");

    if (playAgain === false) {
        userObject.isPlaying = false;
    } else {
		gameStats = {
			wins: 0,
			losses: 0,
			ties: 0,
			rounds: 0
		};
	}
}

window.alert("Thank you for playing!");