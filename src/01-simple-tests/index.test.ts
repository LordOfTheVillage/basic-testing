// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  const a = 3;
  const b = 2;

  test('should add two numbers', () => {
    const sum = 5;
    expect(simpleCalculator({ a, b, action: Action.Add })).toBe(sum);
  });

  test('should subtract two numbers', () => {
    const sub = 1;
    expect(simpleCalculator({ a, b, action: Action.Subtract })).toBe(sub);
  });

  test('should multiply two numbers', () => {
    const product = 6;
    expect(simpleCalculator({ a, b, action: Action.Multiply })).toBe(product);
  });

  test('should divide two numbers', () => {
    const res = 1.5;
    expect(simpleCalculator({ a, b, action: Action.Divide })).toBe(res);
  });

  test('should exponentiate two numbers', () => {
    const res = 9;
    expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(res);
  });

  test('should return null for invalid action', () => {
    const action = 'wrong';
    const res = null;
    expect(simpleCalculator({ a, b, action })).toBe(res);
  });

  test('should return null for invalid arguments', () => {
    const a = 'wrong';
    const res = null;
    expect(simpleCalculator({ a, b, action: Action.Exponentiate })).toBe(res);
  });
});
