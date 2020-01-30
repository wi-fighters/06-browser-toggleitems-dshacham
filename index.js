(() => {
    const button = document.querySelector('.btn');

    const toggleList = () => {
        const ul = document.querySelector('.list-group');
        const ulClasses = [...ul.classList];

        if (ulClasses.includes('d-none')) {
            ul.classList.replace('d-none', 'd-block');
        } else {
            ul.classList.replace('d-block', 'd-none');
        };
    };

    button.addEventListener('click', toggleList, false);
})();