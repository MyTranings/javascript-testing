import { it, expect, vi } from 'vitest';

import { sendDataRequest } from './http.js';

const testResponseData = { testKey: 'testData' }

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData)
        })
      }
    }
    resolve(testResponse);
  })
});

vi.stubGlobal('fetch', testFetch)

it('should return any available response', () => {
  const testData = { key: 'test' }

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});