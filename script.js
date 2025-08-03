// Canvas drawing functionality (from index.html)
const c = document.getElementById("myCanvas");
if (c) {
    const ctx = c.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

// Dialog functionality (from index.html)
const dialog = document.getElementById('newsletter-dialog');
const showDialogButton = document.getElementById('show-dialog');
const closeDialogButton = document.getElementById('close-dialog');

if (showDialogButton && dialog && closeDialogButton) {
    showDialogButton.addEventListener('click', () => {
        dialog.showModal();
    });

    closeDialogButton.addEventListener('click', () => {
        dialog.close();
    });
}

// Hamburger menu functionality (used across all pages)
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');

if (hamburgerMenu && mainNav) {
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('is-active');
        const isExpanded = mainNav.classList.contains('is-active');
        hamburgerMenu.setAttribute('aria-expanded', isExpanded);
    });
}

// Project filtering functionality (portfolio.html)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const cardTech = card.getAttribute('data-tech');
                    if (cardTech && cardTech.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}