
const fs = require('fs');
const path = require('path')
const moment = require('moment')
var csvWriter = require('csv-write-stream')
var writer = csvWriter()

class File {
    constructor() {
        this.pathName = path.join(__dirname, './storage/')
        this.fileName = moment().format('DD-MM-YYYY') + '.csv'
    }

    /** 
     * accepts an object data with a buy:{} and sell:{}
     * buy and sell data is structured like:
     * type(buy or sell)
     * price
     * quantity
    */
    write(data) {
        console.log('Appending data to: ' + this.pathName + this.fileName)
        // covert data to csv 
        var writer = csvWriter({sendHeaders:false})
        // create write stream with flag a for appending
        writer.pipe(fs.createWriteStream(this.pathName + this.fileName, {flags: 'a'})) 
        // write the actual data, use moment for time stamps
        for(let d in data){
            writer.write({type: data[d].type, price: data[d].price, qty: data[d].qty, created_at: moment().format()})
        }
        writer.end()
        console.log('Done. Awaiting new reload')
    }
}
module.exports = File