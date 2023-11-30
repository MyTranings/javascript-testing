import { it, expect } from 'vitest';

import { validateNotEmpty } from './validation.js';

it('should throw an error if empty string is provided', () => {
  const input = '';

  const result = () => validateNotEmpty(input);

  expect(result).toThrow();
})

it('should throw an error if string from blanks is provided', () => {
  const input = '         ';

  const result = () => validateNotEmpty(input);

  expect(result).toThrow();
})