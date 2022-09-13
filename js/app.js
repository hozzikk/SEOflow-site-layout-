const navLink = document.querySelectorAll('.nav-link');

function clearActive() {
    navLink.forEach(item => {
        item.classList.remove('active');
    })
}

navLink.forEach((item) => {
    item.addEventListener('click', () => {
        clearActive();
        item.classList.add('active')
    })
})
