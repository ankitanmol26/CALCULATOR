let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === 'AC') {
            expression = "";
            input.value = "";
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else if (value === '=') {
            try {
                expression = String(eval(expression));
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        } else {
            expression += value;
            input.value = expression;
        }
    });
});






