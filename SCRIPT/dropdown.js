


document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const arrow = document.querySelector('.arrow');
    const div4 = document.querySelector('.div4');

    if (dropdownBtn && dropdownContent && arrow && div4) {
        dropdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdownContent.classList.toggle('active');
            arrow.classList.toggle('active');
            div4.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!div4.contains(e.target)) {
                dropdownContent.classList.remove('active');
                arrow.classList.remove('active');
                div4.classList.remove('open');
            }
        });
    } else {
        console.error('erreur');
    }
});