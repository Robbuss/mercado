
const fs = require('fs');
const path = require('path')
const moment = require('moment')
var csvWriter = require('csv-write-stream')
var writer = csvWriter()

class File {
    constructor() {
        this.pathName = path.join(__dirname, './storage/')
        this.fileName = 'out.csv'
    }

    init(data) {
        console.log('Appending data to: ' + this.pathName + this.fileName)
        // covert data to csv 
        var writer = csvWriter({sendHeaders:false})
        // create write stream with flag a for appending
        writer.pipe(fs.createWriteStream(this.pathName + this.fileName, {flags: 'a'})) 
        // write the actual data, use moment for time stamps
        for(let d in data){
            writer.write({price:data[d], created_at: moment().format()})
        }
        writer.end()
        console.log('Done. Awaiting new reload')
    }
}
module.exports = File