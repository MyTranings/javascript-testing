import { it, expect } from 'vitest';

import { validateNotEmpty } from './validation.js';

it('should throw an error if empty string is provided', () => {
  const inputText = '';

  const result = () => validateNotEmpty(inputText);

  expect(result).toThrow();
})

it('should throw an error if string from blanks is provided', () => {
  const inputText = '         ';

  const result = () => validateNotEmpty(inputText);

  expect(result).toThrow();
})

it('should throw an error with provided error message', () => {
  const inputText = '';
  const inputMessage = 'Message'

  const result = () => validateNotEmpty(inputText, inputMessage);

  expect(result).toThrow(inputMessage);
})