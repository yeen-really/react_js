export const validateUsername = (username) => {
    const firstChar = username.charAt(0);
    if (username.length >= 5 && firstChar === firstChar.toUpperCase()) {
      return true;
    } else {
      return false;
    }

};
