(() => {
    const button = document.querySelector('.btn');

    const toggleList = () => {
        const ul = document.querySelector('.list-group');
        const ulClasses = [...ul.classList];

        if (ulClasses.includes('d-none')) {
            ul.classList.replace('d-none', 'd-block');
            button.textContent = 'Hide Destinations';
        } else {
            ul.classList.replace('d-block', 'd-none');
            button.textContent = 'Show Destinations';
        };
    };

    button.addEventListener('click', toggleList, false);
})();