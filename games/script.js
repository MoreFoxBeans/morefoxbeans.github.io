const games = [
    {
        page: 'all',
        title: 'All Games',
        games: [],
    },
    {
        page: 'favorites',
        title: 'My Favorites',
        games: [],
    },
    {
        page: 'duck-life',
        title: 'Duck Life',
        games: [
            { title: 'Duck Life 1', page: 'duck_life_1', icon: 'egg', },
            { title: 'Duck Life 2', page: 'duck_life_2', icon: 'duck', },
            { title: 'Duck Life 3', page: 'duck_life_3', icon: 'food-drumstick', },
            { title: 'Duck Life 4', page: 'duck_life_4', icon: 'egg-fried', favorite: true, },
            { title: 'Duck Life 4 (Classic)*', page: 'duck_life_4_classic', icon: 'duck', },
        ],
    },
    {
        page: 'papas',
        title: 'Papa\'s Series',
        games: [
            { title: 'Papa\'s Pizzeria*', page: 'pizzeria', icon: 'pizza', },
            { title: 'Papa\'s Burgeria', page: 'burgeria', icon: 'hamburger', favorite: true, },
            { title: 'Papa\'s Taco Mia', page: 'taco_mia', icon: 'taco', },
            { title: 'Papa\'s Freezeria*', page: 'freezeria', icon: 'beer', },
        ],
    },
    {
        page: 'factory',
        title: 'Factory Balls',
        games: [
            { title: 'Factory Balls 1', page: 'factory_balls', icon: 'circle-slice-2', },
            { title: 'Factory Balls 2', page: 'factory_balls_2', icon: 'circle-slice-4', },
            { title: 'Factory Balls 3', page: 'factory_balls_3', icon: 'circle-slice-6', favorite: true, },
            { title: 'Factory Balls X-mas', page: 'factory_balls_xmas', icon: 'pine-tree', },
        ],
    },
    {
        page: 'bonte',
        title: 'Bonte Bart Puzzles',
        games: [
            { title: '40xEscape', page: '40xescape', icon: 'door', favorite: true, },
            { title: 'Full Moon', page: 'full_moon', icon: 'moon-full', favorite: true, },
            { title: 'Me and the Key', page: 'me_and_the_key', icon: 'key', favorite: true, },
            { title: 'Me and the Key 2', page: 'me_and_the_key_2', icon: 'key', favorite: true, },
            { title: 'Me and the Key 3', page: 'me_and_the_key_3', icon: 'key', },
        ],
    },
    {
        page: 'vex',
        title: 'Vex',
        games: [
            { title: 'Vex 3', page: 'vex_3', icon: 'hexagon-outline', favorite: true, },
            { title: 'Vex 4', page: 'vex_4', icon: 'hexagon-multiple-outline', favorite: true, },
            { title: 'Vex 5', page: 'vex_5', icon: 'dots-hexagon', favorite: true, },
        ],
    },
    {
        page: 'fire-water',
        title: 'Fireboy and Watergirl',
        games: [
            { title: '#1: Forest Temple', page: 'fb_and_wg_1', icon: 'forest', favorite: true, },
            { title: '#2: Light Temple', page: 'fb_and_wg_2', icon: 'weather-sunny', },
            { title: '#3: Ice Temple', page: 'fb_and_wg_3', icon: 'weather-snowy-heavy', },
            { title: '#4: Crystal Temple', page: 'fb_and_wg_4', icon: 'diamond-stone', },
            { title: '#5: Elements', page: 'fb_and_wg_5', icon: 'earth', },
        ],
    },
    {
        page: 'bloons',
        title: 'Bloons Tower Defense',
        games: [
            { title: 'Bloons Tower Defense', page: 'bloons_td', icon: 'balloon', },
            { title: 'Bloons Tower Defense 2', page: 'bloons_td_2', icon: 'airballoon-outline', },
            { title: 'Bloons Tower Defense 4', page: 'bloons_td_4', icon: 'arrow-projectile', favorite: true, },
        ],
    },
    {
        page: 'quiz',
        title: 'The Impossible Quiz',
        games: [
            { title: 'The Impossible Quiz', page: 'impossible_quiz', icon: 'numeric-1-box-multiple-outline', favorite: true, },
            { title: 'The Impossible Quiz 2', page: 'impossible_quiz_2', icon: 'numeric-2-box-multiple-outline', },
            { title: 'The Impossible Quiz Book', page: 'iq_book', icon: 'book-outline', },
            { title: 'The Impossible Quiz Book 2', page: 'iq_book_2', icon: 'book-open-outline', },
            { title: 'The Impossible Quiz Book 3', page: 'iq_book_3', icon: 'book-open-page-variant-outline', },
        ],
    },
    {
        page: 'whg',
        title: 'The World\'s Hardest Game',
        games: [
            { title: 'The World\'s Hardest Game', page: 'worlds_hardest_game', icon: 'star-half', favorite: true, },
            { title: 'The World\'s Hardest Game 2', page: 'worlds_hardest_game_2', icon: 'star', },
        ],
    },
    {
        page: 'other',
        title: 'Others',
        games: [
            { title: 'Run 3', page: 'run_3', icon: 'run-fast', favorite: true, },
            { title: 'Syobon Action/Cat Mario', page: 'open_syobon_action', icon: 'paw', favorite: true, },
            { title: 'Slope', page: 'slope', icon: 'soccer', favorite: true, },
            { title: 'Tunnel Rush', page: 'tunnel_rush', icon: 'fan', favorite: true, },
            { title: 'Super Mario 63', page: 'super_mario_63', icon: 'mushroom-outline', favorite: true, },
            { title: 'Interactive Buddy', page: 'interactive_buddy', icon: 'bomb', favorite: true, },
            { title: 'Basketball Legends', page: 'basketball_legends', icon: 'basketball', },
            { title: 'Moto X3M', page: 'moto_x3m', icon: 'motorbike', favorite: true, },
            { title: 'BLOXORZ', page: 'bloxorz', icon: 'rectangle-outline', },
            { title: 'Getting Over It (Scratch)', page: 'getting_over_it', icon: 'pickaxe', favorite: true, },
        ],
    },
];

let beforeHome, beforePage;
let innerPage;

function process() {
    for (let i = 0; i < games.length; i++) {
        for (let j = 0; j < games[i].games.length; j++) {
            let cur = games[i].games[j];

            games[0].games.push(cur);

            if (cur.favorite) {
                games[1].games.push(cur);
            }
        }
    }
}

function createButtons() {
    for (let i = 0; i < games.length; i++) {
        let button = document.createElement('mfb-button');
        button.setAttribute('icon', 'arrow-right');
        button.innerText = `${games[i].title} (${games[i].games.length})`;

        button.addEventListener('click', function () {
            showPage(games[i].page);
        });

        innerPage.insertBefore(button, beforeHome);

        if (i == 1) innerPage.insertBefore(document.createElement('mfb-seperator'), beforeHome);
    }
}

function createPages() {
    for (let i = 0; i < games.length; i++) {
        let page = document.createElement('mfb-page');
        page.setAttribute('page', games[i].page);

        let heading = document.createElement('mfb-text');
        heading.innerText = `${games[i].title} (* = Broken)`;
        page.appendChild(heading);

        for (let j = 0; j < games[i].games.length; j++) {
            let cur = games[i].games[j];
            
            let button = document.createElement('mfb-button');
            button.setAttribute('href', 'launch/' + cur.page + '.html');
            button.setAttribute('icon', cur.icon);
            button.innerText = cur.title;

            page.appendChild(button);
        }

        page.appendChild(document.createElement('mfb-seperator'));
    
        let back = document.createElement('mfb-button');
        back.setAttribute('icon', 'arrow-left');
        back.innerText = 'Back';
    
        back.addEventListener('click', function () {
            showPage('main');
        });
    
        page.appendChild(back);
        
        document.body.insertBefore(page, beforePage);
    }
}

function createLayout() {
    process();
    createButtons();
    createPages();
}

function setup() {
    innerPage = document.querySelector('mfb-page[page="main"]').children[0];
    beforeHome = document.getElementById('beforeHome');
    beforePage = document.getElementById('beforePage');

    document.getElementById('random').addEventListener('click', function () {
        window.location.href = 'launch/' + games[0].games[Math.floor(Math.random() * games[0].games.length)].page + '.html'
    });

    createLayout();
}

appendLoadEvent(setup);