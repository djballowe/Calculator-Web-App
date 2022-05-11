const display = document.getElementById('main');
const buttons = document.querySelectorAll('button');




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = button.id;
    })
})



