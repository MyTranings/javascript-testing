import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractEnteredNumberValues(form);

  const result = calculateResult(numberInputs);
  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);


function getData(form) {
  const formData = new FormData(form);
  return extractNumbers(formData);
}

function validateData(numberInputs) {
  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    return add(numbers).toString();
  } catch (error) {
    return error.message;
  }
}

function prepareResult(result) {
  if (result === 'invalid') {
    return 'Invalid input. You must enter valid numbers.';
  } else if (result !== 'no-calc') {
    return 'Result: ' + result;
  }
}