/// <reference types="cypress" />
import Chance from 'chance'
import exchangePage from "../pageObject/exchangePage";

describe('planetsArray', () => {
    before(() => {
        // cy.fixture('exchangePage').then(exchangeData => {
        //     cy.wrap(exchangeData).as(exchangeData)
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

    let testingData = [
        {
            description: "an integer currency amount",
            amountData: {
                amount: chance.integer({ min: 1, max: 100 })
            },
            toCurrency:chance.currency().code
        },
        {
            description: "a floating currency amount",
            amountData: {
                amount:chance.floating({ min: 0, max: 100, fixed: 2 })
            },
            toCurrency:chance.currency().code
        }
    ]

    testingData.forEach(({description, amountData, toCurrency}) => {
        it(`Positive: user performs exchange ${description} from USD to ${toCurrency}`, () => {
            cy.fixture('currencyData').then(currencyData => {
                cy.log("GIVEN User is at Exchange page")
                exchangePage.open()

                cy.log("When User performs exchange")
                exchangePage.performExchange(amountData.amount, currencyData.base, toCurrency)

                cy.log('THEN currency rates appears')
                exchangePage.assertCurrencyRates()
            })
        })
    })
})