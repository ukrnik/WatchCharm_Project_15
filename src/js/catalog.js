document.addEventListener('DOMContentLoaded', () => {
    const btnCatalog = document.querySelector('.catalog-btn');
    const catalogList = document.querySelectorAll('.catalog-item');


    const showMore = () => {
        catalogList.forEach(i => i.classList.remove('item-hidden'));
        btnCatalog.classList.add('item-hidden');
    };

    btnCatalog.addEventListener('click', showMore);

});