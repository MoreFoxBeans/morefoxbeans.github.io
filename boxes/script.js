let boxEl;
let num = 0;
let back = 0;
let total = 0;

function removeBox(e) {
    e.target.className = 'fadeOut';
  
    window.setTimeout(function () {
        boxEl.removeChild(e.target);
        num++;
        document.getElementById('count').innerText = `${back} + ${num} / ${total}`;
    
        if (boxEl.children.length === 0) {
            back += num;
            addBoxes();
        }
    }, 200);
  
    e.preventDefault();
  }

function addBox() {
    let button = document.createElement('mfb-button');
    button.style = `left: ${Math.random() * 100 - 15}%;
                    top: ${Math.random() * 100 - 10}%;`;
  
    button.addEventListener('click', removeBox);
    button.addEventListener('contextmenu', removeBox);
  
    boxEl.insertBefore(button, boxEl.firstChild);
}

function addBoxes() {
    num = 0;
    boxEl.replaceChildren();
    total = Math.floor(Math.random() * 100 + 100);
    
    for (let i = 0; i < total; i++) {
        addBox(i / (total - 1));
    }
    
    document.getElementById('count').innerText = back + ' + ' + num + ' / ' + total;
}

function setup() {
    boxEl = document.getElementById('boxes');

    document.body.addEventListener('contextmenu', prevent);

    addBoxes();
}

appendLoadEvent(setup);