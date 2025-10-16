let isScrolling = false;

// smooth scroll when clicking nav item
document.querySelectorAll('.nav').forEach(navItem => {
    navItem.addEventListener('click', () => {
        const targetId = navItem.getAttribute('data-target');
        const target = document.getElementById(targetId);

        if (target) {
            isScrolling = true;

            // instantly update active class when clicked
            document.querySelectorAll('.nav').forEach(nav => nav.classList.remove('active'));
            navItem.classList.add('active');

            // scroll smoothly to section
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // wait until scroll settles before re-enabling auto-detection
            const checkScroll = setInterval(() => {
                const distance = target.getBoundingClientRect().top;
                if (Math.abs(distance) < 2) {
                    isScrolling = false;
                    clearInterval(checkScroll);
                }
            }, 100);
        }
    });
});

// highlight active section while scrolling
const sections = document.querySelectorAll('div[id]');
const navItems = document.querySelectorAll('.nav');

window.addEventListener('scroll', () => {
    if (isScrolling) return;

    let current = '';
    const scrollYPos = window.scrollY + 75; // slightly less offset for smoother activation

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollYPos >= sectionTop && scrollYPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(nav => {
        nav.classList.toggle('active', nav.getAttribute('data-target') === current);
    });
});
