class exchangePage {
    open() {
        cy.visit('/');
    }

    get amountInput () {
        return cy.get('#amount');
    }

    get fromInput () {
        return cy.get('#midmarketFromCurrency').click()
    }

    get toInput () {
        return cy.get('#midmarketToCurrency').click()
    }

    // get submitButton () {
    //     return cy.get('button[type="submit"]');
    // }
    performExchange(amountToExchange, fromCurrency, toCurrency) {
        this.amountInput.should('be.enabled').type(`${amountToExchange}`);
        this.fromInput.type(`${fromCurrency}`)
        this.toInput.should('be.enabled').type(`${toCurrency}{enter}{enter}`)
        // this.submitButton.click();
    }
}

export default new exchangePage()