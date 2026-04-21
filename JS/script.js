function _(element) {
    return document.querySelector(element);
}


// CODE FOR HAMBURGER MENU.
const hamMenu = _('.hamburger-menu-container');
hamMenu.addEventListener('click', () => {
    toggleHamMenuOptions();
    toggleDisableScrolling();

});

document.addEventListener('click', (e) => {
    if (e.target.matches('.ham-option')) {
        toggleHamMenuOptions();
        toggleDisableScrolling();
    }
});

function toggleHamMenuOptions() {
    hamMenu.classList.toggle('active');
    const hamMenuSideOptions = _('.ham-menu-options-container');
    hamMenuSideOptions.classList.toggle('active');
}

function toggleDisableScrolling() {
    const body = document.body;
    body.classList.toggle('no-scroll');

    const html = document.documentElement;
    html.classList.toggle('no-scroll');
}