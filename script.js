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
let value1 = [];
let value2 = [];
let calc = [];

function getValues() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let num = document.getElementById('main').childElementCount;
            
            if (value2.length === 0 && button.className !== 'factors') {
                if (num === 1 && (button.id === '-' || button.id === '+')) {
                    value1.push(button.id);
                } else if (num > 0 && button.className !== 'factors') {
                    value1.push(button.id);
                }
            } 
            if (value1.length > 0 && button.className === 'factors') {
                calc.push(button.id);
                buttons.forEach((button) => {
                    button.addEventListener('click', () => {
                        value2.push(button.id);
                        return
                    })
                })
            }
        })
    })
}


// function findCalculation {
//     buttons.forEach((button) => {
//         button.addEventListener('click', () => {
//             let num = document.getElementById('main').childElementCount;
//             if (value1 > 0 && value1 > 0) {
//                 if (button.className === 'factors')
//             }
//         })
//     })
// }

getValues();
console.log(value1);
console.log(value2);
console.log(calc);

function add(x, y) {
    
}

function subtract(x, y) {

}

function multiply(x, y) {

}

function divide(x, y) {

}
