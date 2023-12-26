import { processData } from './dataProcessor';

describe('dataProcessor', () => {
  it('should return positive number', () => {
    const result = processData([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });
  it('should return negative number', () => {
    const result = processData([-5, -8, -2, -10]);
    expect(result).toEqual(-25);
  });
});