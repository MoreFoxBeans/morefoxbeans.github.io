let buffer = '';

const themes = [
    {
        title: 'Light',
        id: 'light',
    },
    {
        title: 'Dark',
        id: 'dark',
    },
    {
        title: 'Matcha',
        id: 'matcha',
    },
    {
        title: 'Taro',
        id: 'taro',
    },
    {
        title: 'Red Bean',
        id: 'redbean',
    },
    {
        title: 'Neon',
        id: 'neon',
    },
    {
        title: 'Blue Stars',
        id: 'bluestars',
    },
    {
        title: 'Purple Stars',
        id: 'purplestars',
    },
    {
        title: 'Watermelon 1',
        id: 'watermelon1',
    },
    {
        title: 'Watermelon 2',
        id: 'watermelon2',
    },
    {
        title: 'ඞඞඞ',
        id: 'sus',
    },
    {
        title: 'High Contrast',
        id: 'contrast',
    },
    {
        title: 'LAST CHRISTMAS I GAVE YOU MY HEART BUT THE VERY NEXT DAY YOU GAVE IT AWAY THIS YEAR TO SAVE ME FROM TEARS ILL GIVE IT TO SOMEONE SPECIAL',
        id: 'lsd',
    },
];

function setup() {
    let row;

    for (let i = 0; i < themes.length; i++) {
        if (i % 2 === 0) {
            row = document.createElement('mfb-row');
        }

        let button = document.createElement('mfb-button');
        button.innerText = themes[i].title;
        button.className = 'theme ' + themes[i].id;

        button.addEventListener('click', function () {
            setTheme(themes[i].id);
        });

        row.appendChild(button);

        if (i % 2 === 1 || i === themes.length - 1) {
            document.getElementById('themes').appendChild(row);
        }
    }

    document.body.addEventListener('keydown', function (e) {
        buffer += e.key;

        if ('trust me'.substring(0, buffer.length) !== buffer) {
            buffer = '';
        }

        if (buffer === 'trust me') {
            window.location.href = '/trustme/';
        }
    });
}

appendLoadEvent(setup);