export const emailValidation = (email: string) => {
  if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    return true;
  }
  return false;
};