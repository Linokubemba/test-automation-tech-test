describe('Login form', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('displays an error message if login is empty', () => {
    cy.get('[name="username"]').type('')
    cy.get('[name="password"]').type('liveTest')
    cy.get('[type="submit"]').click()
    cy.get('.errorMsg').should('contain', 'Connection error') // Missing login.
  })

  it('displays an error message if password is empty', () => {
    cy.get('[name="username"]').type('test')
    cy.get('[name="password"]').type('')
    cy.get('[type="submit"]').click()
    cy.get('.errorMsg').should('contain', 'Connection error') // Missing password.
  })

  it('displays an error message if the login is incorrect', () => {
    cy.get('[name="username"]').type('wrongLogin')
    cy.get('[name="password"]').type('liveTest')
    cy.get('[type="submit"]').click()
    cy.get('.errorMsg').should('contain', 'Connection error') // Invalid login.
  })

  it('displays an error message if the password is incorrect', () => {
    cy.get('[name="username"]').type('test')
    cy.get('[name="password"]').type('wrongPassword')
    cy.get('[type="submit"]').click()
    cy.get('.errorMsg').should('contain', 'Connection error') // Invalid password.
  })

  it('disables the login button if an error is raised', () => {
    cy.get('[name="username"]').type('test')
    cy.get('[name="password"]').type('wrongPassword')
    cy.get('[type="submit"]').click()
    cy.get('[type="submit"]').should('be.disabled')
  })

  it('redirects to the forgot password page', () => {
    cy.get('[href="/forgot-password"]').click()
    cy.url().should('include', '/forgot-password')
  })

  it('redirects to the health page if the login and password are correct', () => {
    cy.get('[name="username"]').type('test')
    cy.get('[name="password"]').type('liveTest')
    cy.get('[type="submit"]').click()
    cy.url().should('include', '/health')
  })
})
  