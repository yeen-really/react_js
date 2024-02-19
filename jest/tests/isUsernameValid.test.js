import { validateUsername } from "../src/isUsernameValid";

test('Valid username check', () => {
    expect(validateUsername('Username123')).toBe(true);
  });
  
  test('Invalid username check', () => {
    expect(validateUsername('User')).toBe(false);
  });
  
  test('Invalid username check', () => {
    expect(validateUsername('user123')).toBe(false);
  });