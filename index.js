(() => {
    const button = document.querySelector('.btn');
    const ul = document.querySelector('.list-group');
    const ulClasses = [...ul.classList];

    const toggleList = () => {
        ul.classList.toggle('d-none');
        ul.classList.toggle('d-block');
        button.textContent = ul.classList.contains('d-none') ? 'Show Destinations' : 'Hide Destinations';
    }

    button.addEventListener('click', toggleList, false);

    const li = document.querySelectorAll('li');

    const selectItem = function (event) {
        this.classList.add('active');
        this.classList.remove('active');
        event.target.classList.add('active');
    };

    li.forEach(li => {
        li.addEventListener('click', selectItem, false);
    })
})();