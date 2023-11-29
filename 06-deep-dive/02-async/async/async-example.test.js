import { it, expect } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example.js';

it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined();
    // done();

    try {
      // expect(token).toBe(2);
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  })
})

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
})