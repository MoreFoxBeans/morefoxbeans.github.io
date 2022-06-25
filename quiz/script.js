let index = 0;
let maxlives = 3;
let lives = 3;

function loseLife() {
    lives--;
    document.getElementById('lives').innerText = lives;

    if (lives === 0) {
        document.getElementById('score').innerText = index;

        showPage('dead');
    }
}

function nextQuestion() {
    if (index + 1 >= questions.length) {
        showPage('win');
    } else {
        refreshPage('question', function () {
            index++;
            updateQuestion();
        });
    }
}

function updateQuestion() {
    document.getElementById('curq').innerText = `${index + 1} / ${questions.length}`;

    let curQ = questions[index];

    document.getElementById('question').innerText = curQ.question;

    let aBox = document.getElementById('answers');

    aBox.replaceChildren();

    if (typeof(curQ.answer) === 'string') {
        let row = document.createElement('mfb-row');

        let text = document.createElement('mfb-textinput');

        text.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                if (text.innerText === curQ.answer) {
                    nextQuestion();
                } else {
                    loseLife();
                    text.innerText = '';
                }

                e.preventDefault();
            }
        });

        row.appendChild(text);

        let submit = document.createElement('mfb-button');
        submit.setAttribute('icon', 'send');
        submit.className = 'nogrow';

        submit.addEventListener('click', function () {
            if (text.innerText === curQ.answer) {
                nextQuestion();
            } else {
                loseLife();
                text.innerText = '';
            }
        });

        row.appendChild(submit);

        aBox.appendChild(row);
    } else {
        for (let i = 0; i < curQ.answers.length; i++) {
            if (i % 2 === 0) {
                row = document.createElement('mfb-row');
            }

            let button = document.createElement('mfb-button');
            button.innerText = curQ.answers[i];

            button.addEventListener('click', function () {
                if (curQ.answer === i + 1) {
                    nextQuestion();
                } else {
                    loseLife();
                }
            });

            row.appendChild(button);

            if (i % 2 === 1 || i === curQ.answers.length - 1) {
                aBox.appendChild(row);
            }
        }
    }
}

function setup() {
    document.getElementById('qnum').innerText = questions.length;

    document.getElementById('easy').addEventListener('click', function () {
        index = 0;
        maxlives = 5;
        lives = 5;
        document.getElementById('lives').innerText = lives;
        updateQuestion();
        showPage('question');
    });

    document.getElementById('medium').addEventListener('click', function () {
        index = 0;
        maxlives = 3;
        lives = 3;
        document.getElementById('lives').innerText = lives;
        updateQuestion();
        showPage('question');
    });

    document.getElementById('hard').addEventListener('click', function () {
        index = 0;
        maxlives = 1;
        lives = 1;
        document.getElementById('lives').innerText = lives;
        updateQuestion();
        showPage('question');
    });

    document.getElementById('retry').addEventListener('click', function () {
        index = 0;
        lives = maxlives;
        document.getElementById('lives').innerText = lives;
        updateQuestion();
        showPage('question');
    })

    document.getElementById('lives').innerText = lives;
}

appendLoadEvent(setup);