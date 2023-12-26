import { nameValidation } from './namedValidation';

describe('nameValidation', () => {
  it('should contain at least 2 characters', () => {
    const result = nameValidation('c');
    expect(result).toEqual(false);
  });
	it('should be less than 51 characters', () => {
    const result = nameValidation('c');
    expect(result).toEqual(false);
  });
	it('should validate 10 characters', () => {
    const result = nameValidation('abcdefghij');
    expect(result).toEqual(true);
  });
	it('should not validate special characters', () => {
    const result = nameValidation('In#&?%!^ga');
    expect(result).toEqual(true);
  });
	it('should not validate the digits', () => {
    const result = nameValidation('1234567');
    expect(result).toEqual(false);
  });
});