## Synopsis

Part of 1 of a scraper build with Puppeteer and nodeJS. 

## Project Structure

Clone this repo in a directory accessible by a webserver (For example Xampp or Apache). 
The nodeJS app uses http://localhost/mercado/simulation as default URL to look for data. 
Puppeteer is used to scrape data. 
Simulation is a simple html webpage which uses jQuery to generate random data at a random interval. 
The page consists of two tables; buy and sell. Each are populated at a random interval between 5 and 8 seconds, to simulate a slow and instable webserver.  
The page is then reloaded after that interval. 

## Installation
To install the required dependencies type: 

``` npm install ```

This will install Puppeteer, a (headless) Chrome browser to scrape the data.

## Configration

Create or update the ``` .env ``` file to contain the url and credentials. An .env.example is provided. 
The data will be stored in a csv file inside the folder storage.
Files will be ordered by date, if a file with the same date already exists (ie the software is restarted during the same session), new data will be a appended to the file.

## Usage

To start the scraper navigate to the project folder and type:

``` node app ```

By default the program runs in the console. If you want to run a headed version for debugging type:

``` node app headed ``` 

And a Chromium browser wil start. 

## Caveats 

In the current simulation, you ``` can't ``` compare data from the simulation to what you see in a separate browser window because every request new random data is generated.  