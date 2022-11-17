let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');
const allBlocks = document.querySelectorAll('.site-block');
const headerNav = document.querySelectorAll('.header_nav_list__item');
const anchors = document.querySelectorAll('a[href*="#"]');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
const headerNavObject = () => {
    let obj = {}

    headerNav.forEach(e => {
        obj[e.lastElementChild
            .getAttribute('href')
            .replace('#', '')] = e
    });

    return obj;
}


document.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide')
    }
    lastScroll = scrollPosition();
});

allBlocks.forEach(e => {
    e.addEventListener('mouseenter', (e) => {
        let headerNavElementsID = headerNavObject();
        for (let id in headerNavElementsID) {
            headerNavElementsID[id].classList.remove('active');
        }
        headerNavElementsID[e.target.getAttribute('id')].classList.add('active')
    });
});

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
