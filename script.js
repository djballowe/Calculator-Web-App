const display = document.querySelector('#main');
const small = document.querySelector('#smallNumbers')
const buttons = document.querySelectorAll('button');
let num = document.getElementById('main').childElementCount;

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
            displayValue2();

        } else {
            content.classList.add('mainDigit');
            content.setAttribute('id', button.id);
            content.textContent = button.id;
            display.appendChild(content);
        }
    })
})

function displayValue2() {
    const content = document.createElement('div');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            for (let i = 0; i < num; i++) {
                let child = display.lastElementChild;
                while (child) {
                    display.removeChild(child);
                    child = display.lastElementChild;
                }
            }
            content.classList.add('mainDigit');
            content.setAttribute('id', button.id);
            content.textContent = button.id;
            display.appendChild(content);
        })
    })
}


// listen to buttons and turn them into values
let value1 = [];
let value2 = [];
let calc = [];

function getValue1() {
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
                if (calc.length === 0) {
                    calc.push(button.id);
                    findValue2();
                }
            }
            
        })
    })
}

function findValue2() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (value1.length > 0 && button.className !== 'factors') {
                value2.push(button.id);
            } else if (button.className === 'factors') {
                findCalculation();
            }
            
        })
    })
}


function findCalculation() {
    factor = calc.join('');
    value1.pop();
    int1 = parseInt(value1.join(''));
    int2 = parseInt(value2.join(''));
    switch (factor) {
        case '+':
            ans = int1 + int2;
            console.log(ans);
            return ans;

        case '-':
            ans = int1 - int2;
            console.log(ans);
            return ans;

        case '*':
            ans = int1 * int2;
            console.log(ans);
            return ans;
        
        case '/':
            ans = int1 / int2;
            console.log(ans);
            return ans;

    } 
    console.log(factor);
 }


getValue1();

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
