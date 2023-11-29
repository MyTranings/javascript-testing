import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

it('should yield NaN if argument is invalid', () => {
  const input = undefined;
  const input2 = 'invalid';
  const input3 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);
  const result3 = transformToNumber(input3);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
  expect(result3).toBeNaN();
})

it('should return a number from a string if possible', () => {
  const input = '5';

  const result = transformToNumber(input);

  const expectedResult = +input;

  expect(result).toBe(expectedResult);
  expect(result).toBeTypeOf('number');
})