document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.content-box');
    const triggerPoint = window.innerHeight / 1.2;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerPoint) {
            box.classList.add('scrolled');
        } else {
            box.classList.remove('scrolled');
        }
    });
});

const links = document.querySelectorAll('.content-box a, .fixed-box a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.05)';
        link.style.transition = 'transform 0.2s ease';
    });

    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});
