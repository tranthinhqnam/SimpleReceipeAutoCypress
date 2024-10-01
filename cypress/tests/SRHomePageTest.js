import { SRHomePage } from '../models/pages/SRHomePage';

describe('SR homepage test', () => {
  it('should be able to print all the titles', () => {
    cy.visit('https://www.simplyrecipes.com/');
    cy.get('[class="card__title"]').each(($title, index) => {
      cy.log($title.text().trim());
      cy.log(index);
    });
  });

  it('should be able to interact with component', () => {
    cy.visit('https://www.simplyrecipes.com/');
    const srHomePage = new SRHomePage();
    srHomePage.heroComponent().cardTitle.each(($title, index) => {
      cy.log($title.text().trim());
      cy.log(index);
    });
  });

  it.only('should able to get hero card title', () => {
    cy.visit('https://www.simplyrecipes.com/');
    new SRHomePage().getHeroCompTitle().then(title =>
      cy.wrap('').then(() => {
        expect(title).to.be.eq(
          'Cattle Drive Casserole Is My New Favorite Dinner'
        );
      })
    );
  });
});
