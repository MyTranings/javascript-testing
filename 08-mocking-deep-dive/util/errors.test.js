import { it, expect, describe } from 'vitest';

import { HttpError, ValidationError } from './errors.js';

describe('class HttpError', () => {
  it('should have Data, Message and StatusCode properties', () => {
    const code = '404';
    const message = 'some message';
    const data = {};

    const error = new HttpError(code, message, data);

    expect(error).toHaveProperty('statusCode');
    expect(error).toHaveProperty('message');
    expect(error).toHaveProperty('data');
  })

  it('should have Data, Message and StatusCode properties defined', () => {
    const code = '404';
    const message = 'some message';
    const data = {};

    const error = new HttpError(code, message, data);

    expect(error.statusCode).toBeDefined();
    expect(error.message).toBeDefined();
    expect(error.data).toBeDefined();
  })

  it('should have proper value types ', () => {
    const code = '404';
    const message = 'some message';
    const data = {};

    const error = new HttpError(code, message, data);

    expect(error.statusCode).toBeTypeOf('string');
    expect(error.message).toBeTypeOf('string');
    expect(error.data).toBeTypeOf('object');
  })
})

describe('class ValidationError', () => {
  it('should have Message property', () => {
    const message = 'message';

    const error = new ValidationError();

    expect(error).toHaveProperty('message');
  })

  it('should have Message defined', () => {
    const message = 'error message';

    const error = new ValidationError(message);

    expect(error.message).toBeDefined();
  })

  it('should have Message property as string', () => {
    const message = 'error message';

    const error = new ValidationError(message);

    expect(error.message).toBeTypeOf('string');
  })
})