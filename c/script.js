let color = window.location.search.substring(1);
let hex = window.location.hash;

function setColor(color) {
    document.body.style.background = color;
    document.getElementById('color').value = color;
    window.document.title = color.substring(0, 1).toUpperCase() + color.substring(1) + ' screen!';
    window.history.replaceState({}, '', `${location.pathname}?${color}`);
}

function submit() {
    let inCol = document.getElementById('color').innerText;
    setColor(inCol);
}

function setup() {
    window.addEventListener('hashchange', function () {
        window.location.reload(true);
    });

    if (hex !== '') {
        setColor(hex);
    } else {
        setColor(color);
    }

    document.getElementById('color').addEventListener('keydown', function (e) {
        if (e.key === 'Enter'){
            submit();
            e.preventDefault();
        }
    });

    document.getElementById('submit').addEventListener('click', submit);
}

appendLoadEvent(setup);