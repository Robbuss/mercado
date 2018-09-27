const puppeteer = require('puppeteer');
const config = require('./config.js');

(async function main() {
    puppeteer.launch({
        headless: false
    }).then(async browser => {
        const page = await browser.newPage();

        //TODO:  tackle the login procedure

        // navigate to the page where the data is
        await page.goto(config.config.url);

        // this indicates the page is refreshed
        page.on('load', () => {

            // visit simulation url
            const text = page.evaluate(() => document.querySelector('#sell').textContent);
            text.then((response) => {
                // should write this to a file
                console.log(response);
            })
        });
    });
})();