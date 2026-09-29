
function calculateSum(a, b) {
    return a + b;
}

console.log("EXERCIȚIUL 1");

console.log("Suma 5 + 3 =", calculateSum(5, 3));
console.log("Suma 10 + 7 =", calculateSum(10, 7));



const student = {

    name: "Sorina",

    age: 18,

    grade: 9,

    introduce: function() {

        console.log(
            "Sunt " +
            this.name +
            " și am " +
            this.age +
            " ani."
        );

    }
};

console.log("EXERCIȚIUL 2");

student.introduce();

student.grade = 10;

console.log(
    "Noua valoare a notei:",
    student.grade
);


const choices = [
    "piatra",
    "hartia",
    "foarfeca"
];



const gameScore = {

    player: 0,

    computer: 0,

    draws: 0,


    displayScore: function() {

        alert(
            "Scorul actual:\n\n" +
            "Tu: " + this.player + "\n" +
            "Calculator: " + this.computer + "\n" +
            "Egalități: " + this.draws
        );

    }

};



let totalRounds = 0;



const playerChoiceElement =
    document.getElementById("playerChoice");

const computerChoiceElement =
    document.getElementById("computerChoice");

const resultElement =
    document.getElementById("result");

const playerScoreElement =
    document.getElementById("playerScore");

const computerScoreElement =
    document.getElementById("computerScore");

const drawScoreElement =
    document.getElementById("drawScore");

const roundsElement =
    document.getElementById("rounds");



function getComputerChoice() {

    const randomNumber =
        Math.floor(
            Math.random() * choices.length
        );

    return choices[randomNumber];
}



function determineWinner(
    playerChoice,
    computerChoice
) {

    if (playerChoice === computerChoice) {

        gameScore.draws++;

        return "Egalitate!";
    }


    if (
        playerChoice === "piatra" &&
        computerChoice === "foarfeca"
    ) {

        gameScore.player++;

        return "Ai câștigat!";
    }

    if (
        playerChoice === "foarfeca" &&
        computerChoice === "hartia"
    ) {

        gameScore.player++;

        return "Ai câștigat!";
    }

    if (
        playerChoice === "hartia" &&
        computerChoice === "piatra"
    ) {

        gameScore.player++;

        return "Ai câștigat!";
    }


    gameScore.computer++;

    return "Calculatorul a câștigat!";
}


function updateScore() {

    playerScoreElement.textContent =
        gameScore.player;

    computerScoreElement.textContent =
        gameScore.computer;

    drawScoreElement.textContent =
        gameScore.draws;

    roundsElement.textContent =
        totalRounds;
}


function checkFinalWinner() {

    if (gameScore.player === 5) {

        alert(
            "Felicitări! Ai ajuns la 5 victorii!"
        );

        resultElement.textContent =
            "Ai câștigat jocul!";

        return true;
    }


    if (gameScore.computer === 5) {

        alert(
            "Calculatorul a ajuns la 5 victorii!"
        );

        resultElement.textContent =
            "Calculatorul a câștigat jocul!";

        return true;
    }


    return false;
}



function playGame(playerChoice) {

    const computerChoice =
        getComputerChoice();


    playerChoiceElement.textContent =
        playerChoice;


    computerChoiceElement.textContent =
        computerChoice;


    const result =
        determineWinner(
            playerChoice,
            computerChoice
        );

    resultElement.textContent =
        result;


    totalRounds++;


    updateScore();


    gameScore.displayScore();

    checkFinalWinner();
}



document
    .getElementById("rock")
    .addEventListener(
        "click",
        function() {

            playGame("piatra");

        }
    );



document
    .getElementById("paper")
    .addEventListener(
        "click",
        function() {

            playGame("hartia");

        }
    );


document
    .getElementById("scissors")
    .addEventListener(
        "click",
        function() {

            playGame("foarfeca");

        }
    );



document
    .getElementById("newGame")
    .addEventListener(
        "click",
        function() {

            gameScore.player = 0;

            gameScore.computer = 0;

            gameScore.draws = 0;



            playerChoiceElement.textContent = "-";

            computerChoiceElement.textContent = "-";


            resultElement.textContent =
                "Jocul a fost resetat!";

            updateScore();

        }
    );