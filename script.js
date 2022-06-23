const themes = [
    {
        title: 'Light',
        id: 'light',
    },
    {
        title: 'Dark',
        id: 'dark',
    },
];

function setup() {
    for (let i = 0; i < themes.length; i++) {
        const button = document.createElement('mfb-button');
        button.innerText = themes[i].title;
        button.className = themes[i].id;

        button.addEventListener('click', function () {
            setTheme(themes[i].id);
        });

        document.getElementById('themes').appendChild(button);
    }
}

appendLoadEvent(setup);