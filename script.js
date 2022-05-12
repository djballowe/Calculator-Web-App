const display = document.querySelector('#main');
const small = document.querySelector('#smallNumbers')
const buttons = document.querySelectorAll('button');




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        const start = document.getElementById('startNumber');
        const content = document.createElement('div');
        let num = document.getElementById('main').childElementCount;
        
        if (num === 1 && button.className !== 'factors') {
            start.textContent = button.id;
            display.appendChild(content);
        } else if (button.className === 'factors') {
            content.textContent = button.id;
            small.appendChild(content);
        } else {
            content.classList.add('mainDigit');
            content.setAttribute('id', button.id);
            content.textContent = button.id;
            display.appendChild(content);
        }
    })
})





