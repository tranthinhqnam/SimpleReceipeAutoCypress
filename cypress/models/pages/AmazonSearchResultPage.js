const SEARCH_RESULT_ITEM_SEL ='[cel_widget_id^="MAIN-SEARCH_RESULTS"]';

export class AmazonSearchResultPage{
    get searchItemElemList(){
      return  cy.get(SEARCH_RESULT_ITEM_SEL);
    }
}