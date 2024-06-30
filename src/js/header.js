document.addEventListener('DOMContentLoaded', () => {
    const dropdownOverlay = document.querySelector('.mob-menu-overlay');
    const btnHamburger = document.querySelector('.icon-open-btn');
    const btnCloseDropdown = document.querySelector('.close-menu-btn');

    const navList = document.querySelectorAll('.mob-menu-list');
    const header = document.querySelector('.header');



    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.classList.add('show');
        } else {
            header.classList.remove('show');
        }

        lastScrollTop = scrollTop;
    })


    const openDropdown = () => {
        dropdownOverlay.classList.add('is-open');
    };

    const closeDropdown = () => {
        dropdownOverlay.classList.remove('is-open');
    };

    btnHamburger.addEventListener('click', openDropdown);

    btnCloseDropdown.addEventListener('click', closeDropdown);


    dropdownOverlay.addEventListener('click', (event) => {
        if (event.target === dropdownOverlay) {
            closeDropdown();
        }
    });



    navList.forEach(link => {
        link.addEventListener('click', closeDropdown);
    });

});
