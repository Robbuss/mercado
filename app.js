require('dotenv').load();
const File = require('./File')

const puppeteer = require('puppeteer');

main()
async function main() {
    const file = new File()

    puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }).then(async browser => {
        const page = await browser.newPage().catch(function () {
            console.log('Something went horribly wrong.')
        });

        //TODO:  tackle the login procedure

        // navigate to the page where the data is
        await page.goto(process.env.url);

        await page.on('load', () => {
            console.log('The page has reloaded.')
            const text = page.evaluate(() => {
                let temp = document.querySelectorAll(".sell tr")
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
}
