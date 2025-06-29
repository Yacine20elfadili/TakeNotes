const welcome = document.getElementById('welcome');
const main = document.getElementById('main');

const createNewBtn = document.getElementById('createNewNetworkBtn');
const submitNewNetworkBtn = document.getElementById('submitNewNetworkBtn');
const importBtn = document.getElementById('import');


const loader = submitNewNetworkBtn.querySelector('.loader');
const btnText = submitNewNetworkBtn.querySelector('.btn-text');

const networkName = document.getElementById('networkName');
const fileInput = document.getElementById('input[type="file"]');



createNewBtn.addEventListener('click', () => {
    console.log('Creating a new note...');
    networkName.style.display = 'block';
    submitNewNetworkBtn.style.display = 'block';
    createNewBtn.style.display = 'none';
    submitNewNetworkBtn.addEventListener("click", () => {
        const networkName = document.getElementById('networkName').value.trim();
        document.getElementById('networkCreated').textContent = networkName || '--empty--';
        loader.style.display = 'inline-block';
        btnText.textContent = 'Loading...';
        setTimeout(() => {
            loader.style.display = 'none';
            btnText.textContent = 'Done';
            main.style.display = "flex";
            welcome.style.display = "none";
        }, 1500);
    });
});