const display = document.querySelector('#main');
const small = document.querySelector('#smallNumbers')
const buttons = document.querySelectorAll('button');
let num = document.getElementById('main').childElementCount;
const dummy = document.createElement('div');
// display


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        
        
        const content = document.createElement('div');
        if (num > 0 && button.className === 'factors' && button.id !== '=') {
            clearValues();

        } else if (num === 0 && button.id === 'factors' && button.id !== '=') {
            content.classList.add('mainDigit');
            content.setAttribute('id', button.id);
            content.textContent = button.id;
            display.appendChild(content);
        } else if (button.id === '=') {
            clearValues();
            content.classList.add('mainDigit');
            content.textContent = findCalculation();
            display.appendChild(content);
        } else {
            content.classList.add('mainDigit');
            content.setAttribute('id', button.id);
            content.textContent = button.id;
            display.appendChild(content);
        }
    })
})

function onStart() {
    content.classList.add('startDigit');
    content.setAttribute('id', '0');
    content.textContent = '0';
    display.appendChild(content);
}

function clearValues() {
    let num = document.getElementById('main').childElementCount;
    for (let i = 0; i < num; i++) {
        let child = display.lastElementChild;
        while (child) {
            display.removeChild(child);
            child = display.lastElementChild;
        }
    }
}


// listen to buttons and turn them into values
let value1 = [];
let value2 = [];
let calc = [];

function getValue() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let num = document.getElementById('main').childElementCount;
            if (calc.length === 0) {
                if (value2.length === 0 && button.className !== '=') {
                    if (value1.length === 0 && (button.id === '-' || button.id === '+')) {
                        value1.push(button.id);
                    } else if (num > 0 && button.className !== 'factors') {
                        value1.push(button.id);
                    }
                } 
                if (value1.length >= 1 && button.className === 'factors' && button.id !== '=') {
                    if (calc.length === 0) {
                        calc.push(button.id);
                    }
                }
            } else if (calc.length === 1) {
                if (value1.length > 0 && button.className !== 'factors') {
                    value2.push(button.id);
                } else if (button.className === 'factors' && button.id !== '=') {
                    findCalculation();
                }
            }
        })
    })
}

function findCalculation() {
    factor = calc.join('');
    int1 = parseInt(value1.join(''));
    int2 = parseInt(value2.join(''));
    switch (factor) {
        case '+':
            ans = int1 + int2;
            console.log(ans);
            calc.pop();
            clearValue();
            value1.push(ans);
            return ans;

        case '-':
            ans = int1 - int2;
            console.log(ans);
            calc.pop();
            clearValue();
            value1.push(ans);
            return ans;

        case '*':
            ans = int1 * int2;
            console.log(ans);
            calc.pop();
            clearValue();
            value1.push(ans);
            return ans;
        
        case '/':
            ans = int1 / int2;
            console.log(ans);
            calc.pop();
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





getValue();

console.log(value1);
console.log(value2);
console.log(calc);

