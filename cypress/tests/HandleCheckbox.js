const CHECKBOXES_SEL = '[type="checkbox"]';
describe('Handling checkboxes', () => {
    it('should be able to select/ unselect', () => {
        cy.visit("/checkboxes");
        // try to unselect 2nd checkbox
        cy.get(CHECKBOXES_SEL).eq(1).click();
        //verify all checkbox are unselected 
        cy.get(CHECKBOXES_SEL).filter(":not(:checked)").should("have.length",2);
        //loop over all checkboxes 
        cy.get(CHECKBOXES_SEL).filter(":not(:checked)").then(item =>{
            cy.get(item).click({multiple:true})
        })
    });
});