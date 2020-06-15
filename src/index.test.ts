import test from 'ava';
import { range, rangeG, rangeSize } from './index';

test('can find the necessary size of a range', t => {
  t.is(rangeSize(1, 7), 7);
  t.is(rangeSize(1, 10), 10);
  t.is(rangeSize(0, 100, 10), 11);
  t.is(rangeSize(1, 5, 2), 3);
  t.is(rangeSize(1, 6, 2), 3);
  t.is(rangeSize(-10, 10, 20), 2);
  t.is(rangeSize(10, -10, -4), 6);
  t.is(rangeSize(3, 1, -1), 3);
  t.is(rangeSize(1, 5, -1), Infinity);
});

test('creates an array of numbers', t => {
  t.deepEqual(range(1, 5), [1, 2, 3, 4, 5]);
  t.deepEqual(range(1, 5, 2), [1, 3, 5]);
  t.deepEqual(range(1, 6, 2), [1, 3, 5]);
  t.deepEqual(range(-4, 4, 2), [-4, -2, 0, 2, 4]);
  t.deepEqual(range(5, 1, -1), [5, 4, 3, 2, 1]);
  t.deepEqual(range(-10, -50, -10), [-10, -20, -30, -40, -50]);
});

test('generates a range of numbers', t => {
  t.deepEqual(Array.from(rangeG(0, 3)), [0, 1, 2, 3]);
  t.deepEqual(Array.from(rangeG(3, 8, 3)), [3, 6]);
  t.deepEqual(Array.from(rangeG(-2, 3)), [-2, -1, 0, 1, 2, 3]);
  t.deepEqual(Array.from(rangeG(-10, -12, -1)), [-10, -11, -12]);

  for (const iterator of rangeG(1, 3, 2)) {
    t.true([1, 3].includes(iterator));
  }
});

test('throws when a range would never end due to an incorrect step', t => {
  t.throws(() => range(5, 1, 1), { instanceOf: RangeError });
});
