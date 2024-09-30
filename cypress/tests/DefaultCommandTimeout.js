describe('Exploring default command timeout',() => {
    it('should be able to apply timeout', () => {
        cy.visit("https://the-internet.herokuapp.com");
        cy.get('a[href="/login"]').click();
        cy.location('pathname',{timeout :500}).should("eq","/login")

    });
});