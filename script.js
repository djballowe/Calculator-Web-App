const display = document.querySelector('#main');
const small = document.querySelector('#smallNumbers');
const buttons = document.querySelectorAll('button');
let num = document.getElementById('main').childElementCount;
const dummy = document.createElement('div');


// display


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const content = document.createElement('div');
        const x = document.getElementById('start');
        if (num > 1 && button.className === 'factors' && button.id !== '=') {
            clearDisplay();

        } else if (num === 1 && button.id === 'factors' && button.id !== '=') {
            content.classList.add('mainDigit');
            content.setAttribute('id', button.id);
            content.textContent = button.id;
            display.appendChild(content);
            
        } else if (button.id === '=') {
            clearDisplay();
            content.classList.add('mainDigit');
            content.textContent = findCalculation();
            display.appendChild(content);
        } else if (button.id === 'CE') {
            clearDisplay();
            clearValue();
            calc.splice(0, calc.length);
            onStart();
            
        } else {
            x.style.display = 'none';
            content.classList.add('mainDigit');
            content.setAttribute('id', button.id);
            content.textContent = button.id;
            display.appendChild(content);
            
        }
    })
})


// starting with 0 on load and CE


function onStart() {
    const x = document.createElement('div');
    x.classList.add('mainDigit');
    x.setAttribute('id', 'start');
    x.textContent = '0';
    display.appendChild(x);
}

function clearDisplay() {
    let num = document.getElementById('main').childElementCount;
    for (let i = 0; i < num; i++) {
        let child = display.lastElementChild;
        while (child) {
            display.removeChild(child);
            child = display.lastElementChild;
        }
    }
}


// listen to buttons and populate arrays

let value1 = [];
let value2 = [];
let calc = [];

function getValue() {
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let num = document.getElementById('main').childElementCount;
            if (calc.length === 0) {
                if (value2.length === 0 && button.className !== '=' && button.id !== 'CE' && button.id !== 'C') {
                    if (value1.length === 0 && (button.id === '-' || button.id === '+')) {
                        value1.push(button.id);
                    } else if (num > 0 && button.className !== 'factors') {
                        value1.push(button.id);
                    } else if (value1.length >= 1 && button.className === 'factors' && button.id !== '=' ) {
                        calc.push(button.id);
                    }
                }
            } else if (calc.length === 1) {
                if (value1.length > 0 && button.className !== 'factors') {
                    value2.push(button.id);
                } else if (button.className === 'factors' && button.id !== '=') {
                    findCalculation();
                    calc[0] = button.id;
                }
            }
        })
    })
}

// join arrays and turn them into ints, Find correct operand, return the answer and clear arrays.

function findCalculation() {
    factor = calc.join('');
    int1 = parseFloat(value1.join(''));
    int2 = parseFloat(value2.join(''));
    switch (factor) {
        case '+':
            ans = int1 + int2;
            console.log(ans);
            clearValue();
            value1.push(ans);
            return ans;

        case '-':
            ans = int1 - int2;
            console.log(ans);
            clearValue();
            value1.push(ans);
            return ans;

        case '*':
            ans = int1 * int2;
            console.log(ans);
            clearValue();
            value1.push(ans);
            return ans;
        
        case '/':
            ans = int1 / int2;
            console.log(ans);
            clearValue();
            value1.push(ans);
            return ans;

    } 
    console.log(factor);
}

function clearValue() {
    value2.splice(0, value2.length);
    value1.splice(0, value1.length);
}

onStart();
getValue();

console.log(value1);
console.log(value2);
console.log(calc);

