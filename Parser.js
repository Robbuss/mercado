class Parser {
    constructor() {
        //
    }

    table(data) {
        // data is structed in an buy and sell object containign all orders visible in the current request
        let parsedData = []

        // loop through buy and sell orders 
        for(let d in data)
        {
            // seperate data in object
            for(let x in data[d]){
                let parsed = {
                    type: d === 'sell' ? 'sell' : 'buy',
                    price: null,
                    qty: null,
                }
                parsed.price = data[d][x][0]
                parsed.qty = data[d][x][1]
                parsedData.push(parsed)

            }
        }
        return parsedData
    }
}
module.exports = Parser