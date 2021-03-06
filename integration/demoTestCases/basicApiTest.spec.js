import { baseURL } from '../../../cypress';

describe('API Testing with Cypress', () => {

   beforeEach(() => {
       cy.request("https://pokeapi.co/api/v2/pokemon").as('pikachu');
   });

   it('Validate the header', () => {
       cy.get('@pikachu')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json; charset=utf-8');
   });

   it('Validate the status code', () => {
       cy.get('@pikachu')
           .its('status')
           .should('equal', 200);
   });
  
});
