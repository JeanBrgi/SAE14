


/*
document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.div4 .dropdown-btn');
    const dropdownContent = document.querySelector('.div4 .dropdown-content');
    const arrow = document.querySelector('.div4 .arrow');
    const div4 = document.querySelector('.div4');

    dropdownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownContent.classList.toggle('active');
        arrow.classList.toggle('active');
        const div4 = document.querySelector('.div4');
    });

    document.addEventListener('click', (e) => {
        if (!dropdownBtn.contains(e.target)) {
            dropdownContent.classList.remove('active');
            arrow.classList.remove('active');
            div4.classList.remove('open');
        }
    });
});
*/
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
        console.error('One or more elements not found');
    }
});