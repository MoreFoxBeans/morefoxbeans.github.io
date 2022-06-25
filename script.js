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
        title: 'Melon 1',
        id: 'watermelon1',
    },
    {
        title: 'Melon 2',
        id: 'watermelon2',
    },
    {
        title: 'Subtle Trans',
        id: 'trans',
    },
    {
        title: 'Subtle Gay',
        id: 'gay',
    },
    {
        title: 'Subtle Bi',
        id: 'bi',
    },
    {
        title: 'Subtle Lesbian',
        id: 'lesbian',
    },
    {
        title: 'Pusheen Toast',
        id: 'pusheentoast',
    },
    {
        title: 'Pusheen Cupcake',
        id: 'pusheencupcake',
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
        title: 'Stealth',
        id: 'stealth',
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

        if (i === themes.length - 1) {
            document.getElementById('themes').appendChild(row);
            document.getElementById('themes').appendChild(button);
        } else {
            row.appendChild(button);

            if (i % 2 === 1) {
                document.getElementById('themes').appendChild(row);
            }
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