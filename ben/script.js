let answerSound = new Audio('snd/answer.wav');
let hangupSound = new Audio('snd/hangup.wav');

const answers = [
  'Yes.',
  'No.',
  'Hohoho!',
  'bleugh...',
];

const sounds = [
  new Audio('snd/yes.wav'),
  new Audio('snd/no.wav'),
  new Audio('snd/hohoho.wav'),
  new Audio('snd/bleugh.wav'),
]

// credit to https://stackoverflow.com/users/815680/bryc for this hashing function
const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};

function filter(string) {
  string = string.toLowerCase(); // not case sensitive
  string = string.trim(); // trim spaces from ends
  string = string.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g, ''); // remove puncuation
  string = string.replace(/\s{2,}/g, ' '); // remove double spaces

  return string;
}

function ask() {
    let question = document.getElementById('response').innerText;
    document.getElementById('response').innerText = '';

    document.getElementById('you').innerText = question;

    question = filter(question);

    if ((cyrb53(question) % 14) === 0 || question === 'hang up') {
        document.getElementById('ben').innerText = '*slams the phone down*';
    
        hangupSound.play();
    
        window.setTimeout(function () {
            showPage('main');
        }, 500);
        
        return;
    }

    let type;
    let max = 1000;

    if (question.includes('how many') || question.includes('how much')) {
        type = 'many';
        max = 1000;
    } else if (question.includes('how old') || question.includes('how tall')) {
        type = 'many';
        max = 100;
    } else if (question.includes('why') || question.includes('where') || question.includes('how') || question.includes('what') || question.includes('which') || question.includes('who') || question.includes('when')) {
        type = 'what';
    } else if (question.includes('do') || question.includes('does') || question.includes('are') || question.includes('is')) {
        type = 'yes/no';
    } else {
        type = 'all';
    }

    let hash = cyrb53(question);
    let index = hash % 4;

    if (type === 'yes/no') {
        index = hash % 3;
    } else if (type === 'what') {
        index = (hash % 2) + 2;
    } else if (type === 'many') {
        index = 2;
    } else {
        index = hash % 4;
    }

    sounds[index].play();

    document.getElementById('ben').innerText = type === 'many' ? (hash % max).toString() : answers[index];
}

function setup() {
    document.getElementById('response').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            if (filter(document.getElementById('response').innerText) != '') {
                ask();
            }
            
            e.preventDefault();
        }
    });

    document.getElementById('submit').addEventListener('click', function () {
        if (filter(document.getElementById('response').innerText) != '') {
            ask();
        }
    });

    document.getElementById('call').addEventListener('click', function () {
        document.getElementById('response').innerText = '';

        showPage('call');

        answerSound.play();

        document.getElementById('you').innerText = '*picks up the phone*';
        document.getElementById('ben').innerText = 'Bæn?';
    });

    document.getElementById('hangUp').addEventListener('click', function () {
        hangupSound.play();

        showPage('main');
    });

    document.getElementById('sbYes').addEventListener('click', function () { sounds[0].play(); });
    document.getElementById('sbNo').addEventListener('click', function () { sounds[1].play(); });
    document.getElementById('sbHohoho').addEventListener('click', function () { sounds[2].play(); });
    document.getElementById('sbBleugh').addEventListener('click', function () { sounds[3].play(); });
    document.getElementById('sbAnswer').addEventListener('click', function () { answerSound.play(); });
    document.getElementById('sbHangUp').addEventListener('click', function () { hangupSound.play(); });
}

appendLoadEvent(setup);