class exchangePage {
    open() {
        cy.visit('/');
    }

    get amountInput() {
        return cy.get('#amount');
    }

    get fromInput() {
        return cy.get('#midmarketFromCurrency').click()
    }

    get toInput() {
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

    get assertCurrencyRateFrom() {
        cy.fixture('currencyData').then(currencyData => {
        return cy.get('.unit-rates___StyledDiv-sc-1dk593y-0 > :nth-child(1)').contains(currencyData.base)
        })
    }

    // get assertCurrencyRateTo() {
    //     cy.fixture('currencyData').then(currencyData => {
    //         return cy.get('.unit-rates___StyledDiv-sc-1dk593y-0 > :nth-child(2)').contains(currencyData[2][1])
    //     })
    // }

    assertCurrencyRates() {
        this.assertCurrencyRateFrom
        // this.assertCurrencyRateTo
    }
}

export default new exchangePage()