require('dotenv').load();
const File = require('./File')
const puppeteer = require('puppeteer');

(async function main() {

    const file = new File()

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
                let temp = document.querySelectorAll('.sell tr')
                let b = []
                temp.forEach(function (cols) {
                    b.push(cols.innerText)
                })
                return b
            });
            console.log('Getting new data...')
            text.then((response) => {
                file.init(response)
            }).catch((e) => {
                console.log(e)
            });
        });
    })
})();
