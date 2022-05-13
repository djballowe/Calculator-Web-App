const display = document.querySelector('#main');
const small = document.querySelector('#smallNumbers')
const buttons = document.querySelectorAll('button');


// display

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        const start = document.getElementById('startNumber');
        const content = document.createElement('div');
        const dummy = document.createElement('div');
        let num = document.getElementById('main').childElementCount;
        
        if (num === 1 && button.className !== 'factors') {
            start.remove();
            content.textContent = button.id;
            content.setAttribute('id', button.id);
            content.classList.add('mainDigit');
            display.appendChild(content);
            display.appendChild(dummy);
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

// listen to buttons and turn them into values
function getValues() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let value1 = [];
            value1.push(button.id);
            return value1;
        })
    })
}



function add(x, y) {
    
}

function subtract(x, y) {

}

function multiply(x, y) {

}

function divide(x, y) {

}
