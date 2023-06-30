// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 2, b: 3, action: Action.Subtract, expected: -1 },
  { a: 8, b: 3, action: Action.Subtract, expected: 5 },
  { a: 3, b: 2, action: Action.Divide, expected: 1.5 },
  { a: 5, b: 4, action: Action.Divide, expected: 1.25 },
  { a: 8, b: 2, action: Action.Divide, expected: 4 },
  { a: 8, b: 2, action: Action.Multiply, expected: 16 },
  { a: 5, b: 1, action: Action.Multiply, expected: 5 },
  { a: 1.5, b: 2, action: Action.Multiply, expected: 3 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 6, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 6, b: 0, action: 'wrong', expected: null },
  { a: 'wrong', b: 'also wrong', action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return the correct result for %p',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
