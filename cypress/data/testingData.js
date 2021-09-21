import  currencyData from "../fixtures/currencyData.json"
// import currencyNumber from "./currencyNumber";

let number = [
    {
        currencyNumber: chance.integer({min: 0, max: currencyData.rates.length-1}),
    }
]

let testingData = [
    {
        description: "an integer currency amount",

        amountData: {
            amount: chance.integer({min: 1, max: 100})
        },

        // toCurrency: chance.currency().code
        toCurrency: currencyData.rates[3]["shortName"]
    },
    {
        description: "a floating currency amount",

        amountData: {
            amount: chance.floating({min: 0, max: 100, fixed: 2})
        },
        // toCurrency: chance.currency().code
        toCurrency: currencyData.rates[3]["shortName"]
    }
]

export default testingData