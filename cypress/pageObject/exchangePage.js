import testingData from "../data/testingData"

class ExchangePage {
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

    performExchange(amountToExchange, fromCurrency, toCurrency) {
        this.amountInput.should('be.enabled').type(`${amountToExchange}`);
        this.fromInput.type(`${fromCurrency}`)
        this.toInput.should('be.enabled').type(`${toCurrency}{enter}{enter}`)
    }

    get assertCurrencyRateFrom() {
        cy.fixture('currencyData').then(currencyData => {
            return cy.get('.unit-rates___StyledDiv-sc-1dk593y-0 > :nth-child(1)').contains(currencyData.base)
        })
    }

    get assertCurrencyRateTo() {
        testingData.forEach(({rateFromJson}) => {
            return cy.get('.unit-rates___StyledDiv-sc-1dk593y-0 > :nth-child(2)').contains(rateFromJson)
        })
    }

    assertCurrencyRates() {
    //     this.assertCurrencyRateFrom
    //     this.assertCurrencyRateTo
    }
}

export default new ExchangePage()