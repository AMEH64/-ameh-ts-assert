export default function <TValue>(
  value: TValue
): asserts value is NonNullable<TValue> {
  if (value === undefined || value === null) {
    throw new Error(`Expected value to be non-nullable but was ${value}.`);
  }
}
