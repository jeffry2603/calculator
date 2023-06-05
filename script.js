let expressionInput = document.getElementById('expression');

function handleButtonClick(value) {
  const isNumber = /^\d+$/.test(value);
  if (isNumber) {
    expressionInput.value += value;
  } else {
    if (value === '=') {
      calculateResult();
    } else {
      expressionInput.value += ` ${value} `;
    }
  }
}

function clearExpression() {
  expressionInput.value = '';
}

function calculateResult() {
  const expression = expressionInput.value;
  if (expression === '') {
    alert('Please enter an expression!');
    return;
  }

  try {
    const result = eval(expression);
    expressionInput.value = result;
  } catch (error) {
    alert('Invalid expression!');
  }
}
