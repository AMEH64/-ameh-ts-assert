import isNonNullable from "./isNonNullable";

test("should throw error when value is undefined", () => {
  const value: number | undefined | null = undefined;
  const act = () => isNonNullable(value);
  expect(act).toThrow(`Expected value to be non-nullable but was ${value}.`);
});

test("should throw error when value is null", () => {
  const value: number | undefined | null = null;
  const act = () => isNonNullable(value);
  expect(act).toThrow(`Expected value to be non-nullable but was ${value}.`);
});

test("should not throw error when value is non-nullable", () => {
  const value: number | undefined | null = 1;
  const act = () => isNonNullable(value);
  expect(act).not.toThrow();
});
