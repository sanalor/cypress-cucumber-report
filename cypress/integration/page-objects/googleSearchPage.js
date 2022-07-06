class GoogleSearchPage{
    get getAcceptCookiesBtn(){
        return cy.get('#L2AGLb').contains('Aceptar todo');
    }
     
    openGoogleSearchPage(){
        cy.visit('/');
    }

}
export default new GoogleSearchPage();