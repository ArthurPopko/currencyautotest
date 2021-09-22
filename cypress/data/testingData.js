import Chance from 'chance'
import currencyData from "../fixtures/currencyData.json"

let currencyNumber =
    {
        number: chance.integer({min: 0, max: currencyData.rates.length - 1}),
    }

console.log(currencyNumber.number) // check the index for json object, shouldn't exceed the array length

let testingData = [
    {
        description: "an integer currency amount",

        amountData: {
            amount: chance.integer({min: 1, max: 100})
        },

        // toCurrency: chance.currency().code
        toCurrency: currencyData.rates[currencyNumber.number]['shortName'],
        rateFromJson: currencyData.rates[currencyNumber.number]['rate']
    },
    {
        description: "a floating currency amount",

        amountData: {
            amount: chance.floating({min: 0, max: 100, fixed: 2})
        },
        // toCurrency: chance.currency().code
        toCurrency: currencyData.rates[currencyNumber.number]['shortName'],
        rateFromJson: currencyData.rates[currencyNumber.number]['rate']
    }
]
console.log(testingData[0].rateFromJson); // rate to be assert
console.log(currencyData.rates[currencyNumber.number]) // just to compare with the corresponding line in json data provider

export default testingData