describe('Search on Google', () => {
  it('Visits Google', () => {
    cy.visit('https://findyourjob.tech/');
    cy.get(':nth-child(2) > .text-it-white').click();
    cy.get('#username').type('luongvuthai1st@gmail.com');
    cy.get('#password').type('Thai123456');
    cy.get('#kc-login').click();
    cy.get('.inline-flex > .text-it-white').should(
      'have.text',
      'luongvuthai1st@gmail.com'
    );
    cy.get('#search').type('Python');
    cy.get('.w-full > .it-button').click();
    cy.get(':nth-child(1) > .cursor-pointer > .text-lg')
      .should('have.text', 'Backend Developer')
      .click();
    cy.get('.my-4 > .it-button').click();
    cy.get('.border-dark-grey > .it-radio').click();
    cy.get('.mt-3 > input').selectFile('C:/Users/Windows 11/Desktop/abc.pdf');
    //cy.get('.flex-col > .it-button').click()
    //cy.get('#mantine-5vwic2bec').type('I am a Senior Android Developer')
    cy.findByText('Cover Letter').should('be.visible');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
    cy.findByText('Send my CV').should('be.visible').click();
    cy.get('#modal-title').should('have.text', 'CONGRATULATIONS!');
    //cy.findByText('Send my CV').click()
    //cy.findByText('Your CV has been sent').should('be.visible')
  });
});
