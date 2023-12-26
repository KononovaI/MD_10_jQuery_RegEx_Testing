import { passwordValidation } from './passwordValidation';

describe('passwordValidation', () => {
  it('should contain at least 8 characters', () => {
    const result = passwordValidation('passwor');
    expect(result).toEqual(false);
  });
	it('should validate only with letters', () => {
    const result = passwordValidation('abcdefghijklmn');
    expect(result).toEqual(false);
  });
	it('should not validate without at least 1 digit', () => {
    const result = passwordValidation('passwor1');
    expect(result).toEqual(false);
  });
	it('should contain at least 1 special character(!, @, #, $, %, ^, &, *)', () => {
    const result = passwordValidation('passwor1@');
    expect(result).toEqual(true);
  });
	it('should contain at least 1 capital letter', () => {
    const result = passwordValidation('passwor1');
    expect(result).toEqual(false);
  });
});