before(()=>{
    // code to run before all tests goes here
    cy.log("Inside before block");
});

beforeEach(function() {
    // code to run before each test goes here
    cy.log("Inside beforeEach");
});

describe('My First Test', () => {
    it('Visits the home page', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    });

    it('check the title',()=>{
        cy.title().should('contain','Practice Page')
    });
});

describe('My Second Test',()=>{
    it('Verify page url',()=>{
        cy.url().should('contain', 'AutomationPractice');
    });
});

afterEach(function() {
    // code to run after each test goes here
    cy.log("Inside afterEach");
});

after(function() {
    // code to run after all tests goes here
    cy.log("Inside after");
});