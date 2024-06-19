function calc() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let lblOutput = document.getElementById("output");

    switch (operator) {
        case "+":
            lblOutput.innerHTML = num1 + num2;
            break;
        case "-":
            lblOutput.innerHTML = num1 - num2;
            break;
        case "*":
            lblOutput.innerHTML = num1 * num2;
            break;
        case "/":
            lblOutput.innerHTML = num1 / num2;
            break;
        default:
            lblOutput.innerHTML = "Invalid Operator...";
    }

    lblOutput.classList.add('animate-output');
    setTimeout(() => {
        lblOutput.classList.remove('animate-output');
    }, 500);
}
