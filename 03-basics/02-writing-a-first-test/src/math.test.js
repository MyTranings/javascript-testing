import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act 
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0)

  expect(result).toBe(expectedResult);
})

it('sohuld yield NaN if at least one invalid number is provided', () => {
  // Arrange
  const inputs = ['invalid', 1];

  // Act
  const result = add(inputs);

  // Assert
  expect(result).toBeNaN();
})

it('should yield a correct sum if an array of numeric string values is provided', () => {
  // Arrange
  const inputs = ['1', '2'];

  // Act
  const result = add(inputs)

  // Assert
  const expectedResult = inputs.reduce(
    (acc, cur) => acc += +cur,
    0
  )

  expect(result).toBe(expectedResult);
})

it('should yield 0 if empty array is provided', () => {
  const input = [];

  const result = add(input);

  expect(result).toBe(0);
})

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  }

  expect(resultFn).toThrow()
})

it('shuold throw an error if provided with mutliple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  }

  expect(resultFn).toThrow()
})