require('dotenv').load();
const File = require('./File')
const Parser = require('./Parser')
const puppeteer = require('puppeteer');

(async function main() {

    const file = new File()
    const parser = new Parser()

    // configure puppeteer options
    let headless = true;
    if(process.argv[2] === 'headed') {
        headless = false
    }

    puppeteer.launch({
        headless: headless,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }).then(async browser => {
        const page = await browser.newPage().catch(function () {
            console.log('Something went horribly wrong.')
        });

        // navigate to the page where the data is
        if (!process.env.url) {
            console.log('No url variable found in .env file. My hands are tied here.')
            process.exit()
        }
        await page.goto(process.env.url);

        //TODO:  tackle the login procedure

        await page.on('load', () => {
            console.log('The page has reloaded.')
            const text = page.evaluate(() => {
                // 
                return {
                    buy: Array.from(document.querySelectorAll('.buy tr')).map((col) => (col.innerText).split("\t")),
                    sell: Array.from(document.querySelectorAll('.sell tr')).map((col) => (col.innerText).split("\t")),
                }
            });
            console.log('Getting new data...')
            text.then((response) => {
                // throw all rows in the parser
                let parsedData = parser.table(response)

                // write parsed data to file
                file.write(parsedData)
            }).catch((e) => {
                console.log(e)
            });
        });
    })
})();
