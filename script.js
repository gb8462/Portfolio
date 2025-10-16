document.querySelectorAll('.nav').forEach(navItem => {
    navItem.addEventListener('click', () => {
        const targetId = navItem.getAttribute('data-target');
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        // remove active class from all navs
        document.querySelectorAll('.nav').forEach(n => n.classList.remove('active'));

        // add active class only to clicked one
        navItem.classList.add('active');
    });
});

// highlight active section while scrolling
const sections = document.querySelectorAll('div[id]');
const navItems = document.querySelectorAll('.nav');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // adjust for navbar height
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(nav => {
        nav.classList.remove('active');
        if (nav.getAttribute('data-target') === current) {
            nav.classList.add('active');
        }
    });
});
