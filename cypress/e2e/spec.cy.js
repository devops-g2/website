describe('Registration Page', () => {
  beforeEach(() => {
    /*cy.intercept('GET', '/users*', {
      statusCode: 200,
        body: {
          ok: true,
        email: 'user@example.com',
        password: 'mypassword',
      },
    })
    cy.intercept(
      {
        method: 'GET',
        url: '/posts',
      },
      [],
    ).as('getPosts')*/
    
    cy.visit('/')
  })

    it.only('should successfully log in with valid credentials', () => {
    /*cy.get('#root > div.header > h3 > a').should('exist').click();*/

    cy.get('#root > div.header > h3 > a').click()
    cy.get('input[type="email"]').type('user@example.com')
    cy.get('input[type="password"]').type('mypassword')
    cy.get('.sign-in-button').click()

    
    cy.get('.sign-in-button').should('not.exist')
  })

  it('should save user input in the registration form', () => {
    
    const userData = {
      name: 'Name',
      email: 'Email',
      password: 'Password',
    }

    
    cy.request('GET', `http://localhost:5173/users?email=${userData.email}`)
      .its('body')
      .should('have.length', 1)
      .and('include', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })

    cy.url().should('include', '/dashboard')
    cy.get('.welcome-message').should('contain', 'Welcome, user@example.com')
  })

  it('should not allow login without registration', () => {
    
    cy.get('input[type="email"]').type('Email')
    cy.get('input[type="password"]').type('Password')
    cy.get('button[type="login"]').click()

    
    cy.url().should('include', '/login')
    cy.get('.error-message').should(
      'contain',
      'User not found. Please register first.',
    )
  })

  it('should show an error for an invalid email', () => {
    cy.get('input[type="email"]').type('invalidemail')
    cy.get('input[type="password"]').type('mypassword')
    cy.get('button[type="login"]').click()

    cy.wait(1000)

    cy.get('.error-message').should('contain', 'Invalid email format')
    cy.url().should('include', '/login')
  })

  it('should navigate to the registration page', () => {
    cy.get('.register-link').click()

    cy.url().should('include', '/registration')
  })

  it('should show an error for empty login credentials', () => {
    cy.get('button[type="login"]').click()

    cy.get('.error-message').should(
      'contain',
      'Please enter both email and password',
    )
    cy.url().should('include', '/login')
  })

  it('should log out successfully', () => {
    // Log in first

    cy.get('.logout-link').click()

    cy.url().should('include', '/logout')
    cy.get('.logout-message').should(
      'contain',
      'You have been successfully logged out',
    )
  })

  it('should navigate back to the home page', () => {
    cy.go('back').click()

    cy.url().should('include', '/')
  })
})