import { it, expect } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

it('should throw error if string is empty', () => {
  const input = '';

  const resultFn = () => validateStringNotEmpty(input);

  expect(resultFn).toThrow()
})

it('should throw error if a blank string passed', () => {
  const input = '       ';

  const resultFn = () => validateStringNotEmpty(input);

  expect(resultFn).toThrow()
})

it('should throw error if string is empty containing a message - must no be empty', () => {
  const input = '';

  const resultFn = () => validateStringNotEmpty(input);

  expect(resultFn).toThrow(/must not be empty/)
})

it('should throw an error any other type is provided', () => {
  const inputNum = 1;
  const inputBool = true;
  const inputObj = {};

  const resultFnNum = () => validateStringNotEmpty(inputNum);
  const resultFnBool = () => validateStringNotEmpty(inputBool);
  const resultFnObj = () => validateStringNotEmpty(inputObj);

  expect(resultFnNum).toThrow()
  expect(resultFnBool).toThrow()
  expect(resultFnObj).toThrow()
})

it('should not throw error if string is not empty', () => {
  const input = 'asdasdas';

  const resultFn = () => validateStringNotEmpty(input);

  expect(resultFn).not.toThrow(/not be empty/)
})

it('should throw an error if NaN is passed', () => {
  const input = NaN;

  const resultFn = () => validateNumber(input);

  expect(resultFn).toThrow();
})

it('should throw an error if NaN is passed', () => {
  const input = NaN;

  const resultFn = () => validateNumber(input);

  expect(resultFn).toThrow(/Invalid number/);
})

it('should throw an error if non-numeric value is passed', () => {
  const inputStr = '1';
  const inputBool = false;
  const inputObj = {};

  const resultFnStr = () => validateNumber(inputStr);
  const resultFnBool = () => validateNumber(inputBool);
  const resultFnObj = () => validateNumber(inputObj);

  expect(resultFnStr).toThrow();
  expect(resultFnBool).toThrow();
  expect(resultFnObj).toThrow();
})

it('should not throw an error if a number is passed', () => {
  const input = 5;

  const resultFn = () => validateNumber(input)

  expect(resultFn).toBeTypeOf('number')
})