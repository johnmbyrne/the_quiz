// General Knowledge Question bank
// Selection of 20 questions taken from: https://www.quiztriviagames.com/multiple-choice-trivia-questions/

const generalKnowledge = [
    {
        question: "In which Italian city can you find the Colosseum?",
        answerA: "Venice",
        answerB: "Rome",
        answerC: "Naples",
        answerD: "Milan",
        correctAnswer: "answerB",
    },
    {
        question: "In the TV show New Girl, which actress plays Jessica Day?",
        answerA: "Zooey Deschanel",
        answerB: "Kaley Cuoco",
        answerC: "Jennifer Aniston",
        answerD: "Alyson Hannigan",
        correctAnswer: "answerA",
    },
    {
        question: "What is the largest canyon in the world?",
        answerA: "Verdon Gorge, France",
        answerB: "King’s Canyon, Australia",
        answerC: "Grand Canyon, USA",
        answerD: "Fjaðrárgljúfur Canyon, Iceland",
        correctAnswer: "answerC",
    },
    {
        question: "How long is the border between the United States and Canada?",
        answerA: "3,525 miles",
        answerB: "4,525 miles",
        answerC: "5,525 miles",
        answerD: "6,525 miles",
        correctAnswer: "answerC",
    },
    {
        question: "What is the largest active volcano in the world?",
        answerA: "Mount Etna",
        answerB: "Mount Vesuvius",
        answerC: "Mouna Loa",
        answerD: "Mount Batur",
        correctAnswer: "answerC",
    },
    {
        question: "When did Lenin die?",
        answerA: "21 January 1924",
        answerB: "21 January 1934",
        answerC: "21 January 1944",
        answerD: "21 January 1954",
        correctAnswer: "answerA",
    },
    {
        question: "In which US state did the Scopes Monkey Trial happen?",
        answerA: "Maryland",
        answerB: "South Dakota",
        answerC: "Indiana",
        answerD: "Tennessee",
        correctAnswer: "answerD",
    },
    {
        question: "When was the book “To Kill a Mockingbird” by Harper Lee published?",
        answerA: "1950",
        answerB: "1960",
        answerC: "1970",
        answerD: "1980",
        correctAnswer: "answerB",
    },
    {
        question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
        answerA: "Le Louvre",
        answerB: "Uffizi Museum",
        answerC: "British Museum",
        answerD: "Metropolitan Museum of Art",
        correctAnswer: "answerA",
    },
    {
        question: "In which city can you find the Prado Museum?",
        answerA: "Buenos Aires",
        answerB: "Barcelona",
        answerC: "Santiago",
        answerD: "Madrid",
        correctAnswer: "answerD",
    },
    {
        question: "When did Salt Lake City host the Winter Olympics?",
        answerA: "1992",
        answerB: "1998",
        answerC: "2002",
        answerD: "2008",
        correctAnswer: "answerC",
    },
    {
        question: "In the Big Bang Theory, what is the name of Sheldon and Leonard’s neighbour?",
        answerA: "Penny",
        answerB: "Patty",
        answerC: "Lily",
        answerD: "Jessie",
        correctAnswer: "answerA",
    },
    {
        question: "When did Hitler invade Poland?",
        answerA: "1st September 1939",
        answerB: "11th November 1939",
        answerC: "8th May 1940",
        answerD: "1st December 1940",
        correctAnswer: "answerA",
    },
    {
        question: "What is the largest continent in size?",
        answerA: "Asia",
        answerB: "Africa",
        answerC: "Europe",
        answerD: "North America",
        correctAnswer: "answerA",
    },
    {
        question: "Which French king was nicknamed the “Sun King”?",
        answerA: "Louis XVI",
        answerB: "Charlemagne",
        answerC: "Francis I",
        answerD: "Louis XIV",
        correctAnswer: "answerD",
    },
    {
        question: "Who was George W. Bush’s vice president?",
        answerA: "Kamala Harris",
        answerB: "Joe Biden",
        answerC: "Dick Cheney",
        answerD: "Al Gore",
        correctAnswer: "answerC",
    },
    {
        question: "Which famous inventor invented the telephone?",
        answerA: "Thomas Edison",
        answerB: "Benjamin Franklin",
        answerC: "Alexander Graham Bell",
        answerD: "Nikola Tesla",
        correctAnswer: "answerC",
    },
    {
        question: "If you are born on the 1st of January, which star sign are you?",
        answerA: "Scorpio",
        answerB: "Capricorn",
        answerC: "Libra",
        answerD: "Aries",
        correctAnswer: "answerB",
    },
    {
        question: "How many wives had Henry VIII?",
        answerA: "1",
        answerB: "3",
        answerC: "4",
        answerD: "6",
        correctAnswer: "answerD",
    },
    {
        question: "In which city is the Juventus Football Club based?",
        answerA: "Turin",
        answerB: "Barcelona",
        answerC: "Manchester",
        answerD: "Marseille",
        correctAnswer: "answerA",
    },
];

// Create function and array to select 10 questions at random from the bank

let randomQuestions = [];

function handleQuestions() {
    while (randomQuestions.length <= 9) {
        const random = generalKnowledge[Math.floor(Math.random() * generalKnowledge.length)];
        if (!randomQuestions.includes(random)) {
            randomQuestions.push(random);
        }
    }
}

//  Set up functions and variables to display questions and answer options

let questionNumber = 10;
let playerScore = 0;
let indexNumber = 0;

function nextQuestion(index) {
    handleQuestions();
    const currentQuestion = randomQuestions[index];
    document.getElementById("question_number").innerHTML = questionNumber;
    document.getElementById("quiz_score").innerHTML = playerScore;
    document.getElementById("question_display").innerHTML = currentQuestion.question;
    document.getElementById("option1_label").innerHTML = currentQuestion.answerA;
    document.getElementById("option2_label").innerHTML = currentQuestion.answerB;
    document.getElementById("option3_label").innerHTML = currentQuestion.answerC;
    document.getElementById("option4_label").innerHTML = currentQuestion.answerD;
}

// checking if the correct answer was selected

function checkForAnswer() {
    const currentQuestion = randomQuestions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctAnswer;
    const options = document.getElementsByName("option");
    let correctOption = null;

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id;
        }
    });

    // Check to make sure something has been selected

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById("options").style.display = "flex";
    }

    //  Using colours to display correct/incorrect answers on selection

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green";
            playerScore++;
            indexNumber++;
            setTimeout(() => {
                questionNumber--;
            }, 1000);
        } else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id;
            document.getElementById(wrongLabelId).style.backgroundColor = "red";
            document.getElementById(correctOption).style.backgroundColor = "green";
            indexNumber++;
            setTimeout(() => {
                questionNumber--;
            }, 1000);
        }
    });
}

//  Move to next question when button is pressed

function moveNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();
    setTimeout(() => {
        if (indexNumber <= 9) {
            nextQuestion(indexNumber);
        } else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
}

// Resetting selections for next question

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// Completing the score box at the end of the quiz

function handleEndGame() {
    let comment = null;
    let commentColour = null;

    if (playerScore <= 4) {
        comment = "The questions didn't suit you! Don't give up, keep trying.";
        commentColour = "red";
    } else if (playerScore >= 5 && playerScore < 8) {
        comment = "Not bad, but not great either, try again.";
        commentColour = "orange";
    } else if (playerScore >= 8) {
        comment = "You know your trivia! Well done!.";
        commentColour = "green";
    }
    const playerPercent = (playerScore / 10) * 100;

    document.getElementById("comment").innerHTML = comment;
    document.getElementById("comment").style.color = commentColour;
    document.getElementById("score_percent").innerHTML = playerPercent;
    document.getElementById("correct_answers").innerHTML = playerScore;
    document.getElementById("score_summary").style.display = "flex";
}

// Close the Score summary and reset the game

function closeScoreModal() {
    questionNumber = 10;
    playerScore = 0;
    wrongAttempt = 0;
    indexNumber = 0;
    randomQuestions = [];
    nextQuestion(indexNumber);
    document.getElementById("score_summary").style.display = "none";
}

function closeOption() {
    document.getElementById("options").style.display = "none";
}