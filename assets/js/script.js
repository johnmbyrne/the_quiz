// General Knowledge Question bank
// Selection of 20 questions taken from: https://www.quiztriviagames.com/multiple-choice-trivia-questions/

const generalKnowledge = [
    {
        question: "In which Italian city can you find the Colosseum?",
        options: [
            "Venice",
            "Rome",
            "Naples",
            "Milan"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "In the TV show New Girl, which actress plays Jessica Day?",
        options: [
            "Zooey Deschanel",
            "Kaley Cuoco",
            "Jennifer Aniston",
            "Alyson Hannigan"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "What is the largest canyon in the world?",
        options: [
            "Verdon Gorge, France",
            "King’s Canyon, Australia",
            "Grand Canyon, USA",
            "Fjaðrárgljúfur Canyon, Iceland"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "How long is the border between the United States and Canada?",
        options: [
            "3,525 miles",
            "4,525 miles",
            "5,525 miles",
            "6,525 miles"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "What is the largest active volcano in the world?",
        options: [
            "Mount Etna",
            "Mount Vesuvius",
            "Mouna Loa",
            "Mount Batur"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "When did Lenin die?",
        options: [
            "21 January 1924",
            "21 January 1934",
            "21 January 1944",
            "21 January 1954"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "In which US state did the ​​Scopes Monkey Trial happen?",
        options: [
            "Maryland",
            "South Dakota",
            "Indiana",
            "Tennessee"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "When was the book “To Kill a Mockingbird” by Harper Lee published?",
        options: [
            "1950",
            "1960",
            "1970",
            "1980"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
        options: [
            "Le Louvre",
            "Uffizi Museum",
            "British Museum",
            "Metropolitan Museum of Art"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "In which city can you find the Prado Museum?",
        options: [
            "Buenos Aires",
            "Barcelona",
            "Santiago",
            "Madrid"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "When did Salt Lake City host the Winter Olympics?",
        options: [
            "1992",
            "1998",
            "2002",
            "2008"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "In the Big Bang Theory, what is the name of Sheldon and Leonard’s neighbour?",
        options: [
            "Penny",
            "Patty",
            "Lily",
            "Jessie"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "When did Hitler invade Poland?",
        options: [
            "1st September 1939",
            "11th November 1939",
            "8th May 1940",
            "1st December 1940"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "What is the largest continent in size?",
        options: [
            "Asia",
            "Africa",
            "Europe",
            "North America"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Which French king was nicknamed the “Sun King”?",
        options: [
            "Louis XVI",
            "Charlemagne",
            "Francis I",
            "Louis XIV"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Who was George W. Bush’ vice president?",
        options: [
            "Kamala Harris",
            "Joe Biden",
            "Dick Cheney",
            "Al Gore"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Which famous inventor invented the telephone?",
        options: [
            "Thomas Edison",
            "Benjamin Franklin",
            "Alexander Graham Bell",
            "Nikola Tesla"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "If you are born on the 1st of January, which star sign are you?",
        options: [
            "Scorpio",
            "Capricorn",
            "Libra",
            "Aries"
        ],
        correctAnswerIndex: 1
    },
    {
        question: "How many wives had Henry VIII?",
        options: [
            "1",
            "3",
            "4",
            "6"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "In which city is the Juventus Football Club based?",
        options: [
            "Turin",
            "Barcelona",
            "Manchester",
            "Marseille"
        ],
        correctAnswerIndex: 0
    }
]

// Create function and array to select 10 questions at random from the bank

let randomQuestions = []

function handleQuestions() { 
    while (randomQuestions.length <= 9) {
        const random = generalKnowledge[Math.floor(Math.random() * generalKnowledge.length)]
        if (!randomQuestions.includes(random)) {
            randomQuestions.push(random)
        }
    }
}

//  Set up functions and variables to display questions and answer options

let questionNumber = 1
let playerScore = 0
let indexNumber = 0

function nextQuestion(index) {
    handleQuestions()
    const currentQuestion = randomQuestions[index]
    document.getElementById("question_display").innerHTML = questionNumber
    document.getElementById("quiz_score").innerHTML = playerScore
    document.getElementById("question_display").innerHTML = currentQuestion.question;
    document.getElementById("option1_label").innerHTML = currentQuestion.options[0];
    document.getElementById("option2_label").innerHTML = currentQuestion.options[1];
    document.getElementById("option3_label").innerHTML = currentQuestion.options[2];
    document.getElementById("option4_label").innerHTML = currentQuestion.options[3];
}

// checking if the correct answer was selected

function checkForAnswer() {
    const currentQuestion = randomQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctAnswerIndex
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    // Check to make sure something has been selected

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('options').style.display = "flex"
    }

     options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

//  Move to next question when button is pressed

function moveNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(()=> {
        if (indexNumber <= 9) {
            nextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//  Using colours to display correct/incorrect answers on selection

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
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
    let comment = null
    let commentColour = null

    if (playerScore <= 4) {
        comment = "The questions didn't suit you! Don't give up, keep trying."
        commentColour = "red"
    }
    else if (playerScore >= 5 && playerScore < 8) {
        comment = "Not bad, but not great either, try again."
        commentColour = "orange"
    }
    else if (playerScore >= 8) {
        comment = "You know your trivia! Well done!."
        commentColour = "green"
    }
    const playerPercent = (playerScore / 10) * 100

    document.getElementById('comment').innerHTML = comment
    document.getElementById('comment').style.color = commentColour
    document.getElementById('score_percent').innerHTML = playerPercent
    document.getElementById('correct_answers').innerHTML = playerScore
    document.getElementById('score_summary').style.display = "flex"

}

// Close the Score summary and reset the game

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    randomQuestions = []
    nextQuestion(indexNumber)
    document.getElementById('score_summary').style.display = "none"
}

function closeOption() {
    document.getElementById('options').style.display = "none"
}