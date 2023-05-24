const backButton = document.getElementById('btn-back');
const homeURL = 'http://127.0.0.1:5500/src/screens/home/home.html';

backButton.addEventListener('click', () => {
    console.log("passei aqui");
    window.location.href = homeURL;
});