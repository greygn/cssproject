const buttonEl = document.querySelector(`.header-top-section-menu`);
const modalEl = document.querySelector(`.menu-full`);
const modalCloseEl = document.querySelector(`.menu-close`);
const mobButtonEl = document.querySelector(`.mobile-search`);
const mobModalEl = document.querySelector(`.mobile-search-modal`);


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

const openModal = () => {
    modalEl.style.visibility = `visible`;
    modalEl.style.opacity = 1;
};

const closeModal = () => {
    modalEl.style.visibility = `hidden`;
    modalEl.style.opacity = 0;
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