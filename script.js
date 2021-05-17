const openWindow = document.querySelectorAll('.item');
const overlay = document.querySelector('.overlay');
const closeWindow = document.querySelectorAll('.close');
const windows = document.querySelectorAll('.box-bg');

for (let i = 0; i < openWindow.length; i++) {
    const btnOpen = function() {
        windows[i].classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    openWindow[i].addEventListener("click", btnOpen);
};

for (let i = 0; i < closeWindow.length; i++) {
    const btnClose = function() {
        windows[i].classList.add('hidden');
        overlay.classList.add('hidden');
    };
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !windows[i].classList.contains('hidden')) {
            btnClose();
        }
    });
    closeWindow[i].addEventListener("click", btnClose);
}