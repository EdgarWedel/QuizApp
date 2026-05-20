let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title{...}",
        "answer_4": "a = title {...}",
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate",
        "answer_2": "100 = let rate",
        "answer_3": "rate = 100",
        "answer_4": "let rate = 100",
        "right_answer": 4
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": 2
    }
];

let currentQuestion = 0;
let rightAnswers = 0;


function init() {
    let lastQuestion = document.getElementById('array_lenght');

    lastQuestion.innerHTML = "";
    lastQuestion.innerHTML = questions.length

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) { // show end screen
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('end-screen').style = '';

        document.getElementById('amount-of-right-answers').innerHTML = rightAnswers;
        document.getElementById('amount-of-questions').innerHTML = questions.length;

        document.getElementById('header-image').src = 'img/trophy.png';
        document.getElementById('header-image').classList.remove('quiz-img');
        document.getElementById('end-text').style = 'font-size: x-large';
    } else { // show question
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = percent + '%';
        document.getElementById('progress-bar').style = `width: ${percent}%`;

        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

    }
    document.getElementById('current-question').innerHTML = currentQuestion + 1;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`


    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtig!!!');
        rightAnswers++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        console.log('Leider Flasch...');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next_button').classList.remove('disabled');
}

function nextQuestion() {
    currentQuestion++;  //von 0 auf 1 erhöht.

    showQuestion();
    document.getElementById('next_button').classList.add('disabled');

    resetButtonColors();
}

function resetButtonColors() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}