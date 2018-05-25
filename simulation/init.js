/**
 * Math.random() generates (pseudo) random number between 0 and 1
 * Multiply it by the difference between the min and the max value and add the min value to offset.
 * Because setInterval works with ms a multiply by 1k makes it seconds
 */
let pageLoadTime = (Math.random() * (8 - 5) + 5) * 1000;
console.log('Reloading the page in ' + pageLoadTime / 1000 + ' seconds');
$(document).ready(function () {
  setInterval(function () {
    // simulate page load time, between 5 and 8 seconds;
    location.reload();
  }, pageLoadTime);
  populateBuyTable(generateBuyData());
  populateSellTable(generateSellData());
});

// fill a table with random data
function populateBuyTable(data) {
  $('.buy').html(data);
}

function populateSellTable(data) {
  $('.sell').html(data);
}

function generateRandomQty() {
  return (Math.random() * (80 - 1) + 1)
}

function generateRandomPrice() {
  return (Math.random() * (325 - 295) + 295)
}

function generateBuyData() {
  // generate X rows of buy data
  let rowCount = 10; 4
  let buyData = '';
  for (let i = 0; i < rowCount; i++) {
    buyData += '<tr><td class="buy-price">' + generateRandomPrice() + '</td><td class="buy-qty">' + generateRandomQty() + '</td></tr>';
  }
  return buyData;
}

function generateSellData() {
  // generate X rows of buy data
  let rowCount = 10; 4
  let sellData = '';
  for (let i = 0; i < rowCount; i++) {
    sellData += '<tr><td class="sell-price">' + generateRandomPrice() + '</td><td class="sell-qty">' + generateRandomQty() + '</td></tr>';
  }
  return sellData;
}