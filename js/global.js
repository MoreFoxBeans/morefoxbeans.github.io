if (document.documentElement) {
    document.documentElement.className = localStorage.getItem('theme') || 'light';
}

let currentPage = 'main';

class MFB_Page extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if (!this.hasAttribute('noinit')) {
            const child = document.createElement('mfb-innerpage');

            child.append(...this.childNodes);

            this.appendChild(child);

            if (typeof(this.getAttribute('page')) !== 'string') {
                this.setAttribute('page', 'main');
            } else {
                this.style.display = 'none';
            }
        }
    }
}

class MFB_Button extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const icon = this.getAttribute('icon');

        if (typeof(icon) === 'string') {
            const iconEl = document.createElement('div');
            iconEl.className = 'mdi mdi-' + icon + (this.innerText ? ' button-icon' : '');

            this.appendChild(iconEl);
        }

        const page = this.getAttribute('page');

        if (typeof(page) === 'string') {
            this.addEventListener('click', function () {
                showPage(page);
            });
        }

        const href = this.getAttribute('href');

        if (typeof(href) === 'string') {
            const linkHandler = document.createElement('a');
            linkHandler.className = 'link-handler';
            linkHandler.href = href;
            
            this.appendChild(linkHandler);
        }

        if (this.innerText.length > 40) {
            this.setAttribute('multiline', '');
        }
    }
}

class MFB_Copyright extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const link = document.createElement('a');
        link.href = 'https://github.com/morefoxbeans';
        link.innerText = '©MoreFoxBeans 2022';

        this.appendChild(link);
    }
}

class MFB_TextInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.setAttribute('contenteditable', '');
    }
}

function prevent(event) {
    event.preventDefault();
}

function showPage(page) {
    if (currentPage) document.querySelector(`mfb-page[page='${currentPage}']`).classList.add('fadeOut');

    document.querySelector(`mfb-page[page='${page}']`).style.display = null;
    document.querySelector(`mfb-page[page='${page}']`).classList.add('fadeIn');

    let oldPage = currentPage;

    window.setTimeout(function () {
        if (oldPage) document.querySelector(`mfb-page[page='${oldPage}']`).style.display = 'none';
        if (oldPage) document.querySelector(`mfb-page[page='${oldPage}']`).classList.remove('fadeOut');
        document.querySelector(`mfb-page[page='${page}']`).classList.remove('fadeIn');
    }, 400);

    currentPage = page;
}

function hidePage() {
    document.querySelector(`mfb-page[page=${currentPage}]`).classList.add('fadeOut');

    window.setTimeout(function () {
        document.querySelector(`mfb-page[page=${currentPage}]`).classList.remove('fadeOut');
        document.querySelector(`mfb-page[page=${currentPage}]`).style.display = 'none';
        currentPage = undefined;
    }, 400);
}

function refreshPage(page, middle) {
    let pageEl = document.querySelector(`mfb-page[page='${page}']`);
    
    let newEl = pageEl.cloneNode(true);
    newEl.setAttribute('noinit', '');
    document.body.insertBefore(newEl, pageEl);

    pageEl.removeAttribute('page');

    pageEl.classList.add('fadeOut');
    newEl.classList.add('fadeIn');

    middle();

    window.setTimeout(function () {
        newEl.classList.remove('fadeIn');

        pageEl.remove();
    }, 400);
}

function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}

function appendLoadEvent(func) {
    if (typeof window.onload === 'function') {
        let oldonload = window.onload;

        window.onload = function() {
            oldonload();
            func();
        }
    } else {
        window.onload = func;
    }
}

function global() {
    customElements.define('mfb-page', MFB_Page);
    customElements.define('mfb-button', MFB_Button);
    customElements.define('mfb-copyright', MFB_Copyright);
    customElements.define('mfb-textinput', MFB_TextInput);

    setTheme(localStorage.getItem('theme') || 'light');

    window.setTimeout(function () {
        document.getElementsByTagName('mfb-fadein')[0].remove();
    }, 1000);
}

appendLoadEvent(global);
