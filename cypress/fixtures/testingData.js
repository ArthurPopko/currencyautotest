import Chance from 'chance'

let testingData = [
    {
        description: "an integer currency amount",
        amountData: {
            amount: chance.integer({ min: 1, max: 100 }),
        }
    },
    {
        description: "a floating currency amount",
        amountData: {
            amount:chance.floating({ min: 0, max: 100, fixed: 2 }),
        }
    }
]