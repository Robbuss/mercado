const puppeteer = require('puppeteer');
const config = require('./config.js');

(async function main() {
    try {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        // maybe set userAgent to chrome like 

        // visit simulation url
        await page.goto(config.config.url);
        await page.waitForSelector('#sell');

    } catch (e) {
        console.log(e);
    }
})();