const display = document.querySelector('#main');
const buttons = document.querySelectorAll('button');




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const content = document.createElement('div');
        content.classList.add('mainDigit');
        content.textContent = button.id;
        display.appendChild(content);
    })
})


