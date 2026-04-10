module.exports = {
  validUser: {
    email: 'newuser@test.com',
    password: '12345678',
    confirmPassword: '12345678'
  },

  shortPassword: {
    email: 'newuser@test.com',
    password: '123',
    confirmPassword: '123',
    errorMessage: 'Please enter at least 8 characters'
  },

  passwordMismatch: {
    email: 'newuser@test.com',
    password: '12345678',
    confirmPassword: '87654321',
    errorMessage: 'Please enter the same Password'
  },

  invalidEmail: {
    email: 'teste',
    password: '12345678',
    confirmPassword: '12345678',
    errorMessage: 'Please enter a valid email address'
  }
};