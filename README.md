## Synopsis

Part of 1 of a scraper build with Puppeteer and nodeJS. 

## Project Structure

Clone this repo in a directory accessible by a webserver (For example Xampp or Apache). 
The nodeJS app uses http://localhost/mercado/simulation as default URL to look for data. 
Puppeteer is used to scrape data. 
Simulation is a simple html webpage which uses jQuery to generate random data at a random interval. 
The page consists of two tables; buy and sell. Each are populated at a random interval between 5 and 8 seconds, to simulate a slow and instable webserver
The page is then reloaded after that interval. 

## Installation
To install the required depencies type: 

``` npm install ```

This will install Puppeteer, a (headless) Chrome browser to scrape the data.
The data will be stored in a csv file 

To start the scraper navigate to the project folder and type:

``` node app.js ```

