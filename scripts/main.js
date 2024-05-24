const buttonEl = document.querySelector(`#header-top-section-menu`);
const modalEl = document.querySelector(`#menu-full`);
const modalCloseEl = document.querySelector(`#menu-close`);
const mobButtonEl = document.querySelector(`.mobile-search`);
const mobModalEl = document.querySelector(`#mobile-search-modal`);

function updateHeight() {
    document.querySelector('#menu-full').style.height = `${window.innerHeight}px`;
}

window.addEventListener('resize', updateHeight);
window.addEventListener('orientationchange', updateHeight);

updateHeight();

modalEl.style.cssText = `
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s;
`;

mobModalEl.style.cssText = `
    display: block;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s;
`;

const loadBg = document.getElementById('loader-cont');
setTimeout(() => {
    loadBg.style.opacity = '0%';
    setTimeout(() => {
        loadBg.style.display = 'none';
    }, 500);
}, 1500);

const openModal = () => {
    modalEl.style.visibility = `visible`;
    modalEl.style.opacity = 1;
    document.body.classList.add('no-scroll');
    modalEl.classList.add('active');
};

const closeModal = () => {
    modalEl.style.opacity = 0;
    modalEl.style.visibility = `hidden`;
    document.body.classList.remove('no-scroll');
    modalEl.classList.remove('active');
};

const openMobModal = () => {
    mobModalEl.style.visibility = `visible`;
    mobModalEl.style.opacity = 1;
};

const closeMobModal = event => {
    const target = event.target;

    if (target===mobModalEl){
        mobModalEl.style.visibility = `hidden`;
        mobModalEl.style.opacity = 0;
    }
};

buttonEl.addEventListener(`click`, openModal);
modalCloseEl.addEventListener('click', closeModal);

mobButtonEl.addEventListener('click', openMobModal);
mobModalEl.addEventListener('click', closeMobModal);

const disablePics = document.getElementById('hide-pics');

let pictures = document.getElementsByClassName(`picture`);
let divWithBackground = document.getElementsByClassName(`catalog-card`);
const picturesCopy = Array.from(pictures, picture => {
    return {
        element: picture,
        originalDisplay: getComputedStyle(picture).display,
        originalFilter: getComputedStyle(picture).filter
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const elements = [...divWithBackground];
 
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = 'opacity 1.5s ease-out';
    });

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.style.opacity = '1';
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
});


const divWithBackgroundCopy = Array.from(divWithBackground, div => {
    return {
        element: div,
        originalBackground: getComputedStyle(div).background,
        originalHeight: getComputedStyle(div).height,
        originalColor: getComputedStyle(div.children[0]).color,
        originalBorder: getComputedStyle(div.children[0]).border,
    };
});

let catalogSection = document.getElementById('catalog-section');

const catalogSectionCopy = {
        element: catalogSection,
        originalGrid: getComputedStyle(catalogSection).gridTemplateRows
    };

disablePics.addEventListener(`click`, function(){
    for (let n = 0; n<pictures.length; n++){
        picturesCopy[n].originalDisplay  = getComputedStyle(pictures[n]).display;
        pictures[n].style.display = 'none';
    }
    for (let n = 0; n < divWithBackground.length; n++){
        divWithBackground[n].style.background = 'transparent';
        divWithBackground[n].style.height = `120px`;
        divWithBackground[n].children[0].style.color = 'white';
        divWithBackground[n].children[0].style.border = 'white 1px solid';
    }
    catalogSection.style.gridTemplateRows = 'repeat(2, 100px)'
})

const darkTheme = document.getElementById(`dark-theme`);

let arr1 = document.getElementsByClassName('new-catalog-card-rating')
let arr2 = document.getElementsByClassName('new-catalog-card-heart')

let icons = document.getElementsByClassName('icon');
icons = [...icons, document.getElementById('promo-graphics'), document.getElementById('slider-ind1'), document.getElementById('header-top-section-menu'), ...arr1, ...arr2];
const iconsCopy = Array.from(icons, icon => {
    return {
        element: icon,
        originalFilter: getComputedStyle(icon).filter
    };
});


let divs = [document.body, document.getElementById('header-info'), document.querySelector('footer'), document.getElementById('menu-full')]
const divsCopy = Array.from(divs, div => {
    return {
        element: div,
        originalBackground: getComputedStyle(div).backgroundColor,
    };
});


let buttons = document.getElementsByClassName('accessibilty-button');
const buttonsCopy = Array.from(buttons, button => {
    return {
        element: button,
        originalBackground: getComputedStyle(button).backgroundColor,
        originalColor: getComputedStyle(button).color,
    };
});

let arr3 = document.getElementsByClassName('new-catalog-card-article');
let arr4 = document.getElementsByClassName('new-catalog-card-price');
let arr5 = document.getElementsByClassName('info-text');
let arr6 = document.getElementById('header-top-section');
let arr7 = document.get
// let texts = [document.getElementById('accessibilty-menu'), document.getElementById('menu-full'), document.getElementById('mobile-search-modal'), 
// document.querySelector('header'), document.getElementById('promo-text'), document.getElementById('new-catalog-name'), ...arr3, ...arr4, ...arr5, document.querySelector('footer')
// ];
let texts = document.getElementsByTagName('div');
const textsCopy = Array.from(texts, text => {
        return {
        element: text,
        originalColor: getComputedStyle(text).color,
        originalCssText: text.style.cssText
    };
});


darkTheme.addEventListener('click', function(){
    for (let n = 0; n < icons.length; n++){
        icons[n].style.filter = 'brightness(10) contrast(0.8)';
    }
    for (let n = 0; n < divs.length; n++){
        divs[n].style.backgroundColor = '#121212';
    }
    for (let n = 0; n < texts.length; n++){
        texts[n].style.color = 'white';
    }
    for (let n = 0; n<pictures.length; n++){
        pictures[n].style.filter = 'invert(1) contrast(0.8) hue-rotate(180deg)';
    }
    for (let n = 0; n<buttons.length; n++){
        buttons[n].style.backgroundColor = '#121212';
        buttons[n].style.setProperty('color', '#fff', 'important');
    }
})

let bigFont = document.getElementById('big-font');
bigFont.addEventListener('click', function() {
    for (let n = 0; n < texts.length; n++) {
        const currentFontSize = parseFloat(getComputedStyle(texts[n]).fontSize);
        if (currentFontSize <= 19) {
            texts[n].style.fontSize = '19px';
        }
    }
});

let reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    for (let n = 0; n<pictures.length; n++){
        pictures[n].style.display = picturesCopy[n].originalDisplay;
        pictures[n].style.filter = picturesCopy[n].originalFilter;
    }
    for (let n = 0; n < divWithBackground.length; n++){
        divWithBackground[n].style.background = divWithBackgroundCopy[n].originalBackground;
        divWithBackground[n].style.height = divWithBackgroundCopy[n].originalHeight;
        divWithBackground[n].children[0].style.color = divWithBackgroundCopy[n].originalColor;
        divWithBackground[n].children[0].style.border = divWithBackgroundCopy[n].originalBorder;
    }
    document.getElementById('catalog-section').style.gridTemplateRows = catalogSectionCopy.originalGrid;
    for (let n = 0; n < icons.length; n++){
        icons[n].style.filter = iconsCopy[n].originalFilter;
    }
    for (let n = 0; n < divs.length; n++){
        divs[n].style.backgroundColor = divsCopy[n].originalBackground;
    }
    for (let n = 0; n < texts.length; n++){
        if (textsCopy[n].element !== document.getElementById('loader-cont')){
            texts[n].style.color = textsCopy[n].originalColor;
            texts[n].style.cssText = textsCopy[n].originalCssText;
        }
    }
    for (let n = 0; n<buttons.length; n++){
        buttons[n].style.backgroundColor = buttonsCopy[n].originalBackground;
        buttons[n].style.color = buttonsCopy[n].originalColor;
    }
})
