export const passwordValidation = (password: string) => {
	if (password.match(/(?=.*[a-zA-Z])(?=.*\d)(?=.*\W)[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,}/)) {
    return true;
  }
  return false;
};