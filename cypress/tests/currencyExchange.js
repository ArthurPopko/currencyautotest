/// <reference types="cypress" />
import exchangePage from "../pageObject/exchangePage";
describe('planetsArray', () => {
    before(() => {
        // cy.fixture('newPlanet').then(data => {
        //     cy.wrap(data).as('newPlanet')
        // })
    })

    /*Задание 10
    Напишите автотест для конвертера валют.
    Определите набор тестовых данных.
    Набор данных для тестирования у вас пусть хранится.
    При разработке можете использовать объект в коде, но после нужно вынести его во внешний файл (фикстуры fixtures)
    {
      "base": USD,
      "date": "2018-02-13",
      "rates": [
         {shortName: "CAD", rate: 1.260046},
         {shortName: "CHF", rate: 0.933058},
         {shortName: "EUR", rate: 0.806942},
         {shortName: "GBP", rate: 0.719154}
      ]}
    2) Базовая валюта в данных - это USD (определено в данных в поле base). А вот валюту конверсии будем выбирать
    случайно среди доступных rates (используйте библиотеку chance).
    Например, мы выбрали случайно канадский доллар
    3) Заходим по ссылке на любой конвертер валют. Например этот https://www.xe.com/currencyconverter.
    4) Пара для конверсии это USD и CAD. Вбиваем эти значения в поля и инициируем поиск
    5) Конечная точка теста - проверка рейта конверсии валют (рейт - это исходные данные из фикстуры)*/

    // it('Exchange autotest ', () => {
    //     cy.log('Currency exchange autotest')
    //     describe('UI test for google store', () => {
    //         it('Positive: find the item by name in google store', () => {
    //             cy.visit('https://store.google.com/us/?hl=eng-US')
    //             cy.get(cy.get('.xZx5x').click())
    //             cy.get('.MsT9Jc').type(`Google Pixel {enter}`)
    //             cy.get('a[href="/product/pixel_5"]').should("exist")
    //         })
    //     })
    // })

    it('Positive: find the item by name in google store', () => {
        // cy.get('@productData').then((productData) => {
            cy.log("GIVEN User is at Exchange page")
            exchangePage.open()

            cy.log("When User perform exchange")
            exchangePage.performExchange(12, 'USD', 'CAD')
            //
            // SearchResultsPage.getProductByDocId(productData.url)
            //     .should("exist")
        // })
    })
})