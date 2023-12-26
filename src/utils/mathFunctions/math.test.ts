import { add, multiply } from './mathFunctions';

describe('mathFunctions', () => {
  it('should work with positive integers', () => {
    const result = add(55, 5);
    expect(result).toEqual(60);
  });
  it('should work if one integer is zero', () => {
    const result = add(0, 5);
    expect(result).toEqual(5);
  });
  it('should work with negative integers', () => {
    const result = add(-55, -5);
    expect(result).toEqual(-60);
  });
  it('should work with positive integers', () => {
    const result = multiply(5, 5);
    expect(result).toEqual(25);
  });
  it('should work if one integer is zero', () => {
    const result = multiply(0, 5);
    expect(result).toEqual(0);
  });
  it('should work with negative integers', () => {
    const result = multiply(-5, -5);
    expect(result).toEqual(25);
  });
});