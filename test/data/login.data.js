module.exports = {
  validUser: {
    email: 'bob@example.com',
    password: '10203040'
  },

  invalidEmail: {
    email: 'teste',
    password: '12345678',
    errorMessage: 'Please enter a valid email address'
  },

  invalidPassword: {
    email: 'teste@teste.com',
    password: '123',
    errorMessage: 'Please enter at least 8 characters'
  },

  emptyPassword: {
    email: 'bob@example.com',
    password: '',
    errorMessage: 'Please enter at least 8 characters'
  }
};