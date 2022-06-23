if (document.documentElement) {
    document.documentElement.className = localStorage.getItem('theme') || 'light';
}

let currentPage = 'main';

class MFB_Page extends HTMLElement {
    constructor() {
        super();

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

class MFB_InnerPage extends HTMLElement {
    constructor() {
        super();
    }
}

class MFB_Button extends HTMLElement {
    constructor() {
        super();
        
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
    }
}

class MFB_Seperator extends HTMLElement {
    constructor() {
        super();
    }
}

class MFB_Text extends HTMLElement {
    constructor() {
        super();
    }
}

class MFB_Copyright extends HTMLElement {
    constructor() {
        super();

        const link = document.createElement('a');
        link.href = 'https://github.com/morefoxbeans';
        link.innerText = '©MoreFoxBeans 2022';

        this.appendChild(link);
    }
}

class MFB_Fadein extends HTMLElement {
    constructor() {
        super();
    }
}

function showPage(page) {
    document.querySelector(`mfb-page[page='${currentPage}']`).style.display = 'none';
    document.querySelector(`mfb-page[page='${page}']`).style.display = null;

    currentPage = page;
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
    customElements.define('mfb-innerpage', MFB_InnerPage);
    customElements.define('mfb-button', MFB_Button);
    customElements.define('mfb-seperator', MFB_Seperator);
    customElements.define('mfb-text', MFB_Text);
    customElements.define('mfb-copyright', MFB_Copyright);
    customElements.define('mfb-fadein', MFB_Fadein);

    setTheme(localStorage.getItem('theme') || 'light');

    window.setTimeout(function () {
        document.getElementsByTagName('mfb-fadein')[0].remove();
    }, 1000);
}

appendLoadEvent(global);
