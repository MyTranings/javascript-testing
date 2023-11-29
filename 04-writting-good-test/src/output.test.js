import { it, expect, describe } from 'vitest';
import { generateResultText } from './output.js';


describe('generateResultText()', () => {
  it('should return a string, no matter which value is passed in', () => {
    const n = 1;
    const str = 'invalid';
    const bool = false;

    const resultN = generateResultText(n);
    const resultStr = generateResultText(str);
    const resultBool = generateResultText(bool);

    expect(resultN).toBeTypeOf('string')
    expect(resultStr).toBeTypeOf('string')
    expect(resultBool).toBeTypeOf('string')
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = generateResultText(result);

    expect(resultText).toBe('')
  })

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = generateResultText(result);

    expect(resultText).toContain('Invalid')
  })
})