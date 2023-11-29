export function generateResultText(calculationResult) {
  let result = '';

  if (calculationResult === 'invalid') {
    result = 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    result = 'Result: ' + calculationResult;
  }

  return result;
}

export function outputResult(resultText) {
  const output = document.getElementById('result');

  output.textContent = resultText;
}