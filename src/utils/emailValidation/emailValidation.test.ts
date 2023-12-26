import { emailValidation } from './emailValidations';

describe('emailValidation', () => {
  it('should validate with the character @', () => {
    const result = emailValidation('example@example.com');
    expect(result).toEqual(true);
  });
	it('should not validate without the character @', () => {
    const result = emailValidation('exampleexample.com');
    expect(result).toEqual(false);
  });
	it('should not validate special characters', () => {
    const result = emailValidation('exa#&?%!^mple@example.com');
    expect(result).toEqual(false);
  });
	it('should not validate without a domain name', () => {
    const result = emailValidation('example@.com');
    expect(result).toEqual(false);
  });
	it('should not validate with the whitespaces', () => {
    const result = emailValidation('example@ex   ample.com');
    expect(result).toEqual(false);
  });
});