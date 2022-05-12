const display = document.querySelector('#main');
const small = document.querySelector('#smallNumbers')
const buttons = document.querySelectorAll('button');




buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        
        const content = document.createElement('div');
        let num = document.getElementById('main').childElementCount;
        
        if (button.className === 'factors') {
            content.textContent = button.id;
            small.appendChild(content);
            if (num !==0) {
                for (let i = 1; i < display.length; i++) {
                    console.log([i]);
                }
            }
        } else {
            content.classList.add('mainDigit');
            content.textContent = button.id;
            display.appendChild(content);
        }
    })
})


