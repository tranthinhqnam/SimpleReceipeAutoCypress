import AmazonHomePage  from "../models/pages/AmazonHomepage";
import { AmazonSearchResultPage } from "../models/pages/AmazonSearchResultPage";
describe('Amz search', () => {
    it('should be able to search', () => {
        cy.visit("/");
        const SEARCH_TEXT = "Dining table";
        let amzHomePage = new AmazonHomePage();
        amzHomePage.searchTxtBxElem.type(SEARCH_TEXT);
        amzHomePage.searchBtnElem.click();

        let amzSearchResultPage = new AmazonSearchResultPage();
        amzSearchResultPage.searchItemElemList.should("not.have.length",0)
    });
});