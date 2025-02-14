//  VALIDATE THE FOLLOWING

//At least 6 characters required
// At least 1 uppercase
//At least 1 lowercase
//At least 1 digit
// At least 1 special character (!@#$%^&*{}|)
//password must match

export const validator = (password = "", confirmPassword = "") => {
  const error = [];
  if (password.length < 6 && error.push("At least 6 characters required."));
  !/[A-Z]/.test(password) &&
    error.push("Password must contain at least one UPPERCASE letter.(A-Z");
  !/[a-z]/.test(password) &&
    error.push("Password must contain at least one lowercase letter(a-z).");
  !/[0-9]/.test(password) &&
    error.push("Password must contain at least one digit.(0-9)");
  !/[(!@#$%^&*{}|)]/.test(password) &&
    error.push(
      "Password must contain at least one special character. (!@#$%^&*{}|)"
    );
  password !== confirmPassword && error.push("Password must match.");
  return error;
};
