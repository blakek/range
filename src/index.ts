export function* rangeG(
  from: number,
  to: number,
  step = 1
): Generator<number, void, number> {
  const shouldIncrement = to > from;

  if (
    (shouldIncrement && Math.sign(step) === -1) ||
    (!shouldIncrement && Math.sign(step) === 1)
  ) {
    throw new RangeError(
      'would create infinte range due to stepping in the wrong direction'
    );
  }

  const shouldContinue = shouldIncrement
    ? (value: number) => value <= to
    : (value: number) => value >= to;

  for (let value = from; shouldContinue(value); value += step) {
    yield value;
  }
}

export function range(from: number, to: number, step = 1): number[] {
  return Array.from(rangeG(from, to, step));
}

export function rangeSize(from: number, to: number, step = 1): number {
  const steps = Math.floor((to - from) / step + 1);
  if (steps < 0) return Infinity;
  return steps;
}
