let display = document.getElementById("display");
// let answer = document.getElementById("answer");
let displayValue = '';
let buttons = document.getElementsByTagName("button");
for (item of buttons) {
    item.addEventListener('click', e => {
        buttonText = e.target.innerText;
        if (buttonText == '+') {
            displayValue += buttonText;
            display.value = displayValue;

        }
        else if (buttonText == '-') {
            displayValue += buttonText;
            display.value = displayValue;

        }
        else if (buttonText == '*') {
            displayValue += buttonText;
            display.value = displayValue;

        }
        else if (buttonText == '/') {
            displayValue += buttonText;
            display.value = displayValue;

        }
        else if (buttonText == 'del') {
            displayValue = displayValue.substring(0, displayValue.length - 1);
            display.value = displayValue;
        }
        else if (buttonText == 'cls') {
            displayValue = '';
            display.value = displayValue;
        }
        else if (buttonText == 'Enter') {
            buttonText == '=';
            display.value = eval(displayValue);
            displayValue = '';
        }
        else {
            displayValue += buttonText;
            display.value = displayValue;
        }
    })
}