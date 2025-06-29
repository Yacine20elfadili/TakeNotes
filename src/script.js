const welcome = document.getElementById('welcome');
const main = document.getElementById('main');
const createNewBtn = document.getElementById('create');
const importBtn = document.getElementById('import');


createNewBtn.addEventListener('click', () => {
    console.log('Creating a new note...');
    main.style.display = 'flex';
    welcome.style.display = 'none';
});