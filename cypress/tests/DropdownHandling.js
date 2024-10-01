const DROPDOWN_SEL = "select[id='dropdown']";
describe('Dropdown Handling', () => {
    it('should be able to select dropdown option', () => {
        cy.visit("/dropdown");

        //select by index  | Select option 1 
        cy.get(DROPDOWN_SEL).select(1)

        //select by value  | Select option 2
        cy.get(DROPDOWN_SEL).select("2");

        //select by visible text 1 | Select option 1 
        cy.get(DROPDOWN_SEL).select("Option 1")

        //Verify the selected option is now option 1 

        cy.get("select option:selected").invoke("text").should("eq","Option 1")
    });
});